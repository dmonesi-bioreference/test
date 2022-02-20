
resource "azurerm_monitor_diagnostic_setting" "main" {
  name = var.name
  target_resource_id          = var.target_resource_id
  log_analytics_workspace_id  = var.log_analytics_workspace_id
  
  log {
    category = "AppServiceAntivirusScanAuditLogs"
    enabled  = true
    
    retention_policy {           
      days    = 60
      enabled = true
    }
  }

  log {
    category = "AppServiceHTTPLogs"
    enabled  = true

    retention_policy {           
      days    = 60
      enabled = true
    }
  }

  log {
    category = "AppServiceConsoleLogs"
    enabled  = true

    retention_policy {           
      days    = 60
      enabled = true
    }
  }

  log {
    category = "AppServiceAppLogs"
    enabled  = true

    retention_policy {           
      days    = 60
      enabled = true
    }
  }

  log {
    category = "AppServiceFileAuditLogs"
    enabled  = true

    retention_policy {           
      days    = 60
      enabled = true
    }
  }

  log {
    category = "AppServiceAuditLogs"
    enabled  = true

    retention_policy {           
      days    = 60
      enabled = true
    }
  }

  log {
    category = "AppServiceIPSecAuditLogs"
    enabled  = true

    retention_policy {           
      days    = 60
      enabled = true
    }
  }

  log {
    category = "AppServicePlatformLogs"
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