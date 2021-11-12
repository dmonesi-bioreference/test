resource "azurerm_private_dns_zone" "main" {
  name                = var.domain_name
  resource_group_name = var.rg_name

  lifecycle {
    ignore_changes = [tags]
  }
}

resource "azurerm_private_dns_zone_virtual_network_link" "main" {
  name                  = "vnet-link"
  resource_group_name   = var.rg_name
  private_dns_zone_name = azurerm_private_dns_zone.main.name
  virtual_network_id    = var.vnet_id

  lifecycle {
    ignore_changes = [tags]
  }
}

resource "azurerm_private_dns_a_record" "prod" {
  name                = var.subdomain_name_prod
  zone_name           = azurerm_private_dns_zone.main.name
  resource_group_name = var.rg_name
  ttl                 = 3600
  records             = [var.subdomain_backend_records]

  lifecycle {
    ignore_changes = [tags]
  }
}

resource "azurerm_private_dns_a_record" "stage" {
  name                = var.subdomain_name_stage
  zone_name           = azurerm_private_dns_zone.main.name
  resource_group_name = var.rg_name
  ttl                 = 3600
  records             = [var.subdomain_backend_records]

  lifecycle {
    ignore_changes = [tags]
  }
}

resource "azurerm_private_dns_a_record" "dev" {
  name                = var.subdomain_name_dev
  zone_name           = azurerm_private_dns_zone.main.name
  resource_group_name = var.rg_name
  ttl                 = 3600
  records             = [var.subdomain_backend_records]

  lifecycle {
    ignore_changes = [tags]
  }
}

