resource "azurerm_log_analytics_workspace" "main" {
  name                = var.name
  location            = var.location
  resource_group_name = var.rg_name
  sku                 = var.sku
  retention_in_days   = 30
}

output "id" {
  value = azurerm_log_analytics_workspace.main.id
}
