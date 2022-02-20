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
    WEBSITE_TIME_ZONE = "US Eastern Standard Time"
  }

  site_config {
		dotnet_framework_version  = "v4.0"
		default_documents	        = [
                                  "Default.htm",
                                  "Default.html",
                                  "Default.asp",
                                  "index.htm",
                                  "index.html",
                                  "iisstart.htm",
                                  "default.aspx",
                                  "index.php",
                                  "hostingstart.html"
                                ]
	}
}

