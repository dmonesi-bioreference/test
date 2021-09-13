data "azurerm_resource_group" "main" {
	name = var.rg_name
}

output "name" {
  value = data.azurerm_resource_group.main.name
}

output "location" {
  value = data.azurerm_resource_group.main.location
}
