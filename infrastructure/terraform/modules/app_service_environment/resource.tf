resource "azurerm_app_service_environment" "main" {
  name                         = var.ase_name
  resource_group_name          = var.rg_name
  subnet_id                    = var.subnet_id
  pricing_tier                 = var.pricing_tier
  front_end_scale_factor       = var.front_end_scale_factor
  internal_load_balancing_mode = var.internal_load_balancing_mode

  lifecycle {
    ignore_changes = [tags]
  }
}

module "app_service_environment_diagnostic_setting" {
  source                      = "../app_service_environment_diag_setting"
  name                        = "ase_diag"
  target_resource_id          = azurerm_app_service_environment.main.id
  log_analytics_workspace_id  = var.log_analytics_workspace_id
}

output "id" {
  value = azurerm_app_service_environment.main.id
}

output "internal_ip_address" {
  value = azurerm_app_service_environment.main.internal_ip_address
}