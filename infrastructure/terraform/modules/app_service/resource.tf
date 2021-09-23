resource "azurerm_app_service_plan" "main" {
	name                									= "${var.app_name}ASP"
    location            									= var.location
    resource_group_name 									= lower(var.rg_name) # It is case sensitive for Linux only
	app_service_environment_id 								= var.ase_id
	kind 													= var.kind
	reserved 												= var.kind == "Linux" ? true : false

	sku {
		tier												= var.sku_tier
		size 												= var.sku_size
		capacity											= var.sku_capacity
	}
}

resource "azurerm_application_insights" "main" {
  name                = "${var.app_name}-appinsights"
  location            = var.location
  resource_group_name = var.rg_name
  application_type    = "web"
  retention_in_days	  = 90
}

resource "azurerm_app_service" "main" {
	name                									= var.app_name
	location            									= var.location
	resource_group_name 									= var.rg_name
	app_service_plan_id 									= azurerm_app_service_plan.main.id
	https_only												= "true"

	# For some reason app_service_plan_id is showing up as a change every time terraform plan/apply is run
	# For now we are going to ignore this attribute in order to keep terraform plan/apply clean
	# TODO: Need to figure out the root cause 
	lifecycle {
     	ignore_changes = [app_service_plan_id]
  	}

	app_settings = {
		WEBSITE_TIME_ZONE									= "US Eastern Standard Time"
		WEBSITE_NODE_DEFAULT_VERSION						= "14.17.6"

		# Settings for Application Insights
		APPINSIGHTS_INSTRUMENTATIONKEY 						= azurerm_application_insights.main.instrumentation_key
		APPINSIGHTS_PROFILERFEATURE_VERSION             	= "1.0.0"
        APPINSIGHTS_SNAPSHOTFEATURE_VERSION             	= "1.0.0"
        APPLICATIONINSIGHTS_CONNECTION_STRING           	= "InstrumentationKey=${azurerm_application_insights.main.instrumentation_key}"
        ApplicationInsightsAgent_EXTENSION_VERSION      	= "~2"
        DiagnosticServices_EXTENSION_VERSION            	= "~3"
        InstrumentationEngine_EXTENSION_VERSION         	= "~1"
        SnapshotDebugger_EXTENSION_VERSION              	= "~1"
        XDT_MicrosoftApplicationInsights_BaseExtensions 	= "~1"
        XDT_MicrosoftApplicationInsights_Mode           	= "recommended"

		# Settings for private Container Registry  
    	DOCKER_REGISTRY_SERVER_URL      					= "https://${var.docker_registry_server_url}"
    	DOCKER_REGISTRY_SERVER_USERNAME 					= var.docker_registry_server_username 
    	DOCKER_REGISTRY_SERVER_PASSWORD 					= var.docker_registry_server_password
	}

	site_config {
    	linux_fx_version 									= "DOCKER|${var.container_repository}"
	}

	depends_on												= [azurerm_application_insights.main]
}

resource "azurerm_app_service_custom_hostname_binding" "main" {
	hostname            									= var.host_name
	app_service_name    									= azurerm_app_service.main.name
	resource_group_name 									= var.rg_name
}

resource "azurerm_app_service_custom_hostname_binding" "internalase" {
	hostname            									= var.iase_host_name
	app_service_name    									= azurerm_app_service.main.name
	resource_group_name 									= var.rg_name
}
