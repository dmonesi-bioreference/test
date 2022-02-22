resource "azurerm_app_service_plan" "main" {
  name                       = "${var.app_name}ASP"
  location                   = var.location
  resource_group_name        = lower(var.rg_name) # It is case sensitive for Linux only
  app_service_environment_id = var.ase_id
  kind                       = var.kind
  reserved                   = var.kind == "Linux" ? true : false

  lifecycle {
    ignore_changes = [tags]
  }

  sku {
    tier     = var.sku_tier
    size     = var.sku_size
    capacity = var.sku_capacity
  }
}

resource "azurerm_application_insights_web_test" "main" {
  name                    = "${var.app_name}-webtest"
  location                = var.location
  resource_group_name     = var.rg_name
  application_insights_id = azurerm_application_insights.main.id
  kind                    = "ping"
  frequency               = 600
  timeout                 = 60
  enabled                 = true
  retry_enabled           = true 
  geo_locations           = ["us-tx-sn1-azr", "us-il-ch1-azr","us-ca-sjc-azr","us-va-ash-azr","us-fl-mia-edge"]

  configuration = <<XML
<WebTest Name="ProdWebTest1" Enabled="True" CssProjectStructure="" CssIteration="" WorkItemIds="" Description="" CredentialUserName="" CredentialPassword="" Proxy="default" StopOnError="False" RecordedResultFile="" ResultsLocale="">
  <Items>
    <Request Method="GET" Version="1.1" Url="https://patient.genedx.com" ThinkTime="0" Timeout="300" ParseDependentRequests="True" FollowRedirects="True" RecordResult="True" Cache="False" ResponseTimeGoal="0" Encoding="utf-8" ExpectedHttpStatusCode="200" ExpectedResponseUrl="" ReportingName="" IgnoreHttpStatusCode="False" />
  </Items>
</WebTest>
XML

}


resource "azurerm_application_insights" "main" {
  name                = "${var.app_name}-appinsights"
  location            = var.location
  resource_group_name = var.rg_name
  application_type    = "web"
  retention_in_days   = 90

  lifecycle {
    ignore_changes = [tags]
  }
}

resource "azurerm_app_service" "main" {
  name                = var.app_name
  location            = var.location
  resource_group_name = var.rg_name
  app_service_plan_id = azurerm_app_service_plan.main.id
  https_only          = "true"

  # For some reason app_service_plan_id is showing up as a change every time terraform plan/apply is run
  # For now we are going to ignore this attribute in order to keep terraform plan/apply clean
  # TODO: Need to figure out the root cause 
  lifecycle {
    ignore_changes = [app_service_plan_id, tags, app_settings, site_config]
  }

  app_settings = {
    # Settings for Application Insights
    APPINSIGHTS_INSTRUMENTATIONKEY                  = azurerm_application_insights.main.instrumentation_key

    # Settings for private Container Registry  
    DOCKER_REGISTRY_SERVER_URL      = "https://${var.docker_registry_server_url}"
    DOCKER_REGISTRY_SERVER_USERNAME = var.docker_registry_server_username
    DOCKER_REGISTRY_SERVER_PASSWORD = var.docker_registry_server_password
  }

  site_config {
    linux_fx_version  = "DOCKER|${var.container_repository}:${var.container_tag_prod}"
    default_documents = []
  }

  logs {
    application_logs {
      file_system_level = "Information"
    }
    http_logs {
      file_system {
        retention_in_days = 30
        retention_in_mb = 25
      }
    }
  }

  depends_on = [azurerm_application_insights.main]
}

resource "azurerm_app_service_custom_hostname_binding" "internalase" {
  hostname            = var.iase_host_name_prod
  app_service_name    = azurerm_app_service.main.name
  resource_group_name = var.rg_name
}

resource "azurerm_app_service_custom_hostname_binding" "main" {
  hostname            = var.host_name_prod
  app_service_name    = azurerm_app_service.main.name
  resource_group_name = var.rg_name
}

module "app_service_slot_stage" {
  source                            = "../app_service_slot"
  env_prefix                        = "stg"
  app_name                          = var.app_name
  slot_name                         = "stage"
  rg_name                           = var.rg_name
  location                          = var.location
  app_service_name                  = azurerm_app_service.main.name
  app_service_plan_id               = azurerm_app_service_plan.main.id
  docker_registry_server_url        = var.docker_registry_server_url
  docker_registry_server_username   = var.docker_registry_server_username
  docker_registry_server_password   = var.docker_registry_server_password
  container_repository              = var.container_repository
  container_tag                     = var.container_tag_stage

  log_analytics_workspace_id        = var.log_analytics_workspace_id

  depends_on = [
    azurerm_app_service.main
  ]
}

module "app_service_slot_dev" {
  source                            = "../app_service_slot"
  env_prefix                        = "dev"
  app_name                          = var.app_name
  slot_name                         = "dev"
  rg_name                           = var.rg_name
  location                          = var.location
  app_service_name                  = azurerm_app_service.main.name
  app_service_plan_id               = azurerm_app_service_plan.main.id
  docker_registry_server_url        = var.docker_registry_server_url
  docker_registry_server_username   = var.docker_registry_server_username
  docker_registry_server_password   = var.docker_registry_server_password
  container_repository              = var.container_repository
  container_tag                     = var.container_tag_dev
  
  log_analytics_workspace_id        = var.log_analytics_workspace_id 

  depends_on = [
    azurerm_app_service.main
  ]
}

### added settings to push container and console logs to an log analytic workspace
### refer to the module for settings details

module "app_service_diagnostic_setting_prod" {
  source                      = "../app_service_diag_setting"
  name                        = "web_diag_prod"
  target_resource_id          = azurerm_app_service.main.id
  log_analytics_workspace_id  = var.log_analytics_workspace_id
}


