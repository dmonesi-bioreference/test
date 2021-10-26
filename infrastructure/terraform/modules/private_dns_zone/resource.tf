resource "azurerm_private_dns_zone" "main" {
  name                = var.domain_name
  resource_group_name = var.rg_name
}

resource "azurerm_private_dns_zone_virtual_network_link" "main" {
  name                  = "vnet-link"
  resource_group_name   = var.rg_name
  private_dns_zone_name = azurerm_private_dns_zone.main.name
  virtual_network_id    = var.vnet_id
}

resource "azurerm_private_dns_a_record" "example" {
  name                = var.subdomain_name
  zone_name           = azurerm_private_dns_zone.main.name
  resource_group_name = var.rg_name
  ttl                 = 3600
  records             = [var.subdomain_backend_records]
}

