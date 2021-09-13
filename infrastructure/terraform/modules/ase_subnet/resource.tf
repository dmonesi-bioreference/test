resource "azurerm_subnet" "main" {
  name					        = var.subnet_name
  resource_group_name   		= var.rg_name
  virtual_network_name  		= var.vnet_name
  address_prefixes        		= [var.subnet_cidr]
}

resource "azurerm_network_security_group" "main" {
	name                			    = var.subnet_nsg_name
	location            			    = var.location
	resource_group_name 			    = var.rg_name

	# Inbound Security Rules
	security_rule {
		name						= "ClearDATA-Mgmt-Inbound"
		priority                   	= 100
		direction                  	= "Inbound"
		access                     	= "Deny"
		protocol                   	= "*"
		source_port_range          	= "*"
		source_address_prefixes     = ["23.95.97.59","51.254.25.115","193.183.98.66","91.217.137.37","87.98.175.85"]
		destination_port_range    	= "*"
		destination_address_prefix 	= "*"
	}
	security_rule {
		name						= "Inbound-management"
		priority                   	= 104
		direction                  	= "Inbound"
		access                     	= "Allow"
		protocol                   	= "*"
		source_port_range          	= "*"
		source_address_prefix       = "AppServiceManagement"
		destination_port_ranges    	= ["454","455"]
		destination_address_prefix 	= "*"
	}
	security_rule {
		name                       	= "Inbound-load-balancer-keep-alive"
		priority                   	= 105
		direction                  	= "Inbound"
		access                     	= "Allow"
		protocol                   	= "*"
		source_port_range         	= "*"
		destination_port_ranges    	= ["16001"]
		source_address_prefix      	= "AzureLoadBalancer"
		destination_address_prefix 	= "*"
	}
	security_rule {
		name                       	= "ASE-internal-inbound"
		priority                   	= 110
		direction                  	= "Inbound"
		access                     	= "Allow"
		protocol                   	= "*"
		source_port_range         	= "*"
		destination_port_range    	= "*"
		source_address_prefix      	= var.subnet_cidr
		destination_address_prefix 	= "*"
	}
	security_rule {
		name                       	= "Inbound-HTTPS"
		priority                   	= 130
		direction                  	= "Inbound"
		access                     	= "Allow"
		protocol                   	= "*"
		source_port_range         	= "*"
		destination_port_ranges    	= ["443"]
		source_address_prefix      	= "*"
		destination_address_prefix 	= "*"
	}
	security_rule {
		name                       	= "Inbound-FTPS"
		priority                   	= 150
		direction                  	= "Inbound"
		access                     	= "Allow"
		protocol                   	= "*"
		source_port_range         	= "*"
		destination_port_ranges    	= ["990"]
		source_address_prefix      	= "*"
		destination_address_prefix 	= "VirtualNetwork"
	}
	security_rule {
		name                       	= "Inbound-FTP-Data"
		priority                   	= 160
		direction                  	= "Inbound"
		access                     	= "Allow"
		protocol                   	= "*"
		source_port_range         	= "*"
		destination_port_ranges    	= ["10001-10020"]
		source_address_prefix      	= "*"
		destination_address_prefix 	= "VirtualNetwork"
	}

	# Outbound Security Rules
	security_rule {
		name                       	= "ClearDATA-Mgmt-Outbound"
		priority                   	= 100
		direction                  	= "Outbound"
		access                     	= "Deny"
		protocol                   	= "*"
		source_port_range         	= "*"
		destination_port_range    	= "*"
		source_address_prefixes     = ["23.95.97.59","51.254.25.115","193.183.98.66","91.217.137.37","87.98.175.85"]
		destination_address_prefix 	= "*"
	}
	security_rule {
		name                       	= "Outbound-443"
		priority                   	= 109
		direction                  	= "Outbound"
		access                     	= "Allow"
		protocol                   	= "*"
		source_port_range         	= "*"
		destination_port_ranges    	= ["443"]
		source_address_prefix       = "*"
		destination_address_prefix 	= "*"
	}
	security_rule {
		name                       	= "Outbound-DB"
		priority                   	= 110
		direction                  	= "Outbound"
		access                     	= "Allow"
		protocol                   	= "*"
		source_port_range         	= "*"
		destination_port_ranges    	= ["1433"]
		source_address_prefix       = "*"
		destination_address_prefix 	= "Sql"
	}
	security_rule {
		name                       	= "Outbound-DNS"
		priority                   	= 120
		direction                  	= "Outbound"
		access                     	= "Allow"
		protocol                   	= "*"
		source_port_range         	= "*"
		destination_port_ranges    	= ["53"]
		source_address_prefix       = "*"
		destination_address_prefix 	= "*"
	}
	security_rule {
		name                       	= "ASE-internal-outbound"
		priority                   	= 130
		direction                  	= "Outbound"
		access                     	= "Allow"
		protocol                   	= "*"
		source_port_range         	= "*"
		destination_port_range    	= "*"
		source_address_prefix       = "*"
		destination_address_prefix 	= var.subnet_cidr
	}
	security_rule {
		name                       	= "Outbound-80"
		priority                   	= 140
		direction                  	= "Outbound"
		access                     	= "Allow"
		protocol                   	= "*"
		source_port_range         	= "*"
		destination_port_ranges    	= ["80"]
		source_address_prefix       = "*"
		destination_address_prefix 	= "*"
	}
	security_rule {
		name                       	= "ASE-to-VNET"
		priority                   	= 150
		direction                  	= "Outbound"
		access                     	= "Allow"
		protocol                   	= "*"
		source_port_range         	= "*"
		destination_port_range    	= "*"
		source_address_prefix       = "*"
		destination_address_prefix 	= var.vnet_cidr
	}
	security_rule {
		name                       	= "Outbound-NTP"
		priority                   	= 160
		direction                  	= "Outbound"
		access                     	= "Allow"
		protocol                   	= "*"
		source_port_range         	= "*"
		destination_port_ranges    	= ["123"]
		source_address_prefix       = "*"
		destination_address_prefix 	= "*"
	}
	security_rule {
		name                       	= "DenyAllOutBound-Custom"
		priority                   	= 170
		direction                  	= "Outbound"
		access                     	= "Deny"
		protocol                   	= "*"
		source_port_range         	= "*"
		destination_port_range    	= "*"
		source_address_prefix       = "*"
		destination_address_prefix 	= "*"
	}
}

resource "azurerm_subnet_network_security_group_association" "subnet-nsg" {
	subnet_id                 = azurerm_subnet.main.id
	network_security_group_id = azurerm_network_security_group.main.id
}

output "id" {
  value = azurerm_subnet.main.id
}

output "name" {
  value = azurerm_subnet.main.name
}
