data "azurerm_virtual_network" "main" {
	name					= var.vnet_name
	resource_group_name     = var.vnet_rg_name
}

output "id" {
  value = data.azurerm_virtual_network.main.id
}

output "name" {
  value = data.azurerm_virtual_network.main.name
}

output "address_space" {
  value = data.azurerm_virtual_network.main.address_space
}