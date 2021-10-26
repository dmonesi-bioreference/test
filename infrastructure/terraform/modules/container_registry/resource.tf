resource "azurerm_container_registry" "main" {
  name                = var.acr_name
  resource_group_name = var.rg_name
  location            = var.location
  sku                 = var.sku
  admin_enabled       = var.admin_enabled
}

output "login_server" {
  value = azurerm_container_registry.main.login_server
}

output "admin_username" {
  value = azurerm_container_registry.main.admin_username
}

output "admin_password" {
  value = azurerm_container_registry.main.admin_password
}
