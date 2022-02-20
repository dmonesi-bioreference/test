resource "azurerm_application_insights" "main" {
  name                = "${var.app_name}-${var.env_prefix}-appinsights"
  location            = var.location
  resource_group_name = var.rg_name
  application_type    = "web"
  retention_in_days   = 90

  lifecycle {
    ignore_changes = [tags]
  }
}

module "app_service_diagnostic_setting" {
  source                      = "../app_service_diag_setting"
  name                        = "web_diag_${var.slot_name}"
  log_analytics_workspace_id  = var.log_analytics_workspace_id
  target_resource_id          = azurerm_app_service_slot.main.id
}

resource "azurerm_app_service_slot" "main" {
  name                = var.slot_name
  app_service_name    = var.app_service_name
  location            = var.location
  resource_group_name = var.rg_name
  app_service_plan_id = var.app_service_plan_id
  https_only          = "true"

  # For some reason app_service_plan_id is showing up as a change every time terraform plan/apply is run
  # For now we are going to ignore this attribute in order to keep terraform plan/apply clean
  # TODO: Need to figure out the root cause 
  lifecycle {
    ignore_changes = [app_service_plan_id, tags, app_settings, site_config]
  }

  app_settings = {
    # Settings for Application Insights
    APPINSIGHTS_INSTRUMENTATIONKEY  = azurerm_application_insights.main.instrumentation_key

    # Settings for private Container Registry  
    DOCKER_REGISTRY_SERVER_URL      = "https://${var.docker_registry_server_url}"
    DOCKER_REGISTRY_SERVER_USERNAME = var.docker_registry_server_username
    DOCKER_REGISTRY_SERVER_PASSWORD = var.docker_registry_server_password
  }

  site_config {
    linux_fx_version  = "DOCKER|${var.container_repository}:${var.container_tag}"
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
  
}