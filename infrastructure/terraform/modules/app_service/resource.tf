resource "azurerm_app_service_plan" "main" {
	name                									= "${var.app_name}ASP"
    location            									= var.location
    resource_group_name 									= var.rg_name
	app_service_environment_id 								= var.ase_id
												   
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

	app_settings = {
		WEBSITE_TIME_ZONE									= "US Eastern Standard Time"
		WEBSITE_NODE_DEFAULT_VERSION						= "6.9.1"
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
	}

	site_config {
		dotnet_framework_version							= "v4.0"
		default_documents									= [
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

	depends_on												= [azurerm_application_insights.main]
}

resource "azurerm_app_service_custom_hostname_binding" "main" {
	hostname            									= var.host_name
	app_service_name    									= azurerm_app_service.main.name
	resource_group_name 									= var.rg_name
}
