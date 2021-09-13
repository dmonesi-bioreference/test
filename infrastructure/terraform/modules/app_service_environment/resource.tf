resource "azurerm_app_service_environment" "main" {
  name                         = var.ase_name
  subnet_id                    = var.subnet_id
  pricing_tier                 = var.pricing_tier
  front_end_scale_factor       = var.front_end_scale_factor
  internal_load_balancing_mode = var.internal_load_balancing_mode
}

output "id" {
  value = azurerm_app_service_environment.main.id
}

