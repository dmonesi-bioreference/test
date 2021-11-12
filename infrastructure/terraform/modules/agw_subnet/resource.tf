resource "azurerm_network_security_group" "main" {
  name                = var.subnet_nsg_name
  location            = var.location
  resource_group_name = var.rg_name

  lifecycle {
    ignore_changes = [tags]
  }

  security_rule {
    name                       = "ClearDATA-Mgmt-Inbound"
    priority                   = 100
    direction                  = "Inbound"
    access                     = "Deny"
    protocol                   = "*"
    source_port_range          = "*"
    destination_port_range     = "*"
    source_address_prefixes    = ["23.95.97.59", "51.254.25.115", "193.183.98.66", "91.217.137.37", "87.98.175.85"]
    destination_address_prefix = "*"
  }

  security_rule {
    name                       = "Whitelist-Imperva-Block1"
    priority                   = 200
    direction                  = "Inbound"
    access                     = "Allow"
    protocol                   = "*"
    source_port_range          = "*"
    destination_port_ranges    = ["80", "443"]
    source_address_prefixes    = ["199.83.128.0/21", "198.143.32.0/19", "103.28.248.0/22", "185.11.124.0/22", "45.64.64.0/22", "192.230.64.0/18", "107.154.0.0/16", "45.60.0.0/16", "45.223.0.0/16", "149.126.72.0/21"]
    destination_address_prefix = "*"
  }

  security_rule {
    name                       = "BackendHealthCommunication"
    priority                   = 300
    direction                  = "Inbound"
    access                     = "Allow"
    protocol                   = "*"
    source_port_range          = "*"
    destination_port_range     = "65503-65534"
    source_address_prefix      = "*"
    destination_address_prefix = "*"
  }

  security_rule {
    name                       = "BRLI-NJ"
    priority                   = 1000
    direction                  = "Inbound"
    access                     = "Allow"
    protocol                   = "*"
    source_port_range          = "*"
    destination_port_ranges    = ["80", "443"]
    source_address_prefixes    = ["69.74.168.160/28", "4.28.191.176/28", "65.51.209.64/29", "65.200.185.192/28"]
    destination_address_prefix = "*"
  }

  security_rule {
    name                       = "ClearDATA-Mgmt-Outbound"
    priority                   = 100
    direction                  = "Outbound"
    access                     = "Deny"
    protocol                   = "*"
    source_port_range          = "*"
    destination_port_range     = "*"
    source_address_prefixes    = ["23.95.97.59", "51.254.25.115", "193.183.98.66", "91.217.137.37", "87.98.175.85"]
    destination_address_prefix = "*"
  }
}

resource "azurerm_subnet" "main" {
  name                 = var.subnet_name
  resource_group_name  = var.rg_name
  virtual_network_name = var.vnet_name
  address_prefixes     = var.subnet_cidr

  service_endpoints    = [ 
    "Microsoft.Storage" 
  ]
}


resource "azurerm_subnet_network_security_group_association" "subnet-nsg" {
  subnet_id                 = azurerm_subnet.main.id
  network_security_group_id = azurerm_network_security_group.main.id

  depends_on = [
    azurerm_subnet.main,
    azurerm_network_security_group.main
  ]
}

output "id" {
  value = azurerm_subnet.main.id
}

output "name" {
  value = azurerm_subnet.main.name
}
