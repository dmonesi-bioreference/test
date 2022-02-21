
resource "azurerm_monitor_diagnostic_setting" "main" {
  name = var.name
  target_resource_id          = var.target_resource_id
  log_analytics_workspace_id  = var.log_analytics_workspace_id
  
  log {
    category = "AppServiceEnvironmentPlatformLogs"
    enabled  = true
    
    retention_policy {           
      days    = 60
      enabled = true
    }
  }

  metric {
    category = "AllMetrics"
    enabled  = true

    retention_policy {           
      days    = 60
      enabled = true
    }
  }
}