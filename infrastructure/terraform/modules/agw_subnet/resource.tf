resource "azurerm_subnet" "main" {
  name					        = var.subnet_name
  resource_group_name   		= var.rg_name
  virtual_network_name  		= var.vnet_name
  address_prefix        		= var.subnet_cidr
}

resource "azurerm_network_security_group" "main" {
	name                			    = var.subnet_nsg_name
	location            			    = var.location
	resource_group_name 			    = var.rg_name

	security_rule {
		name						= "Whitelist-Imperva-Block1"
		priority                   	= 1000
		direction                  	= "Inbound"
		access                     	= "Allow"
		protocol                   	= "*"
		source_port_range          	= "*"
		destination_port_ranges    	= ["80","443"]
		source_address_prefix      	= "199.83.128.0/21"
		destination_address_prefix 	= "*"
	}
	security_rule {
		name                       	= "Whitelist-Imperva-Block2"
		priority                   	= 1005
		direction                  	= "Inbound"
		access                     	= "Allow"
		protocol                   	= "*"
		source_port_range         	= "*"
		destination_port_ranges    	= ["80","443"]
		source_address_prefix      	= "198.143.32.0/19"
		destination_address_prefix 	= "*"
	}
	security_rule {
		name                       	= "Whitelist-Imperva-Block4"
		priority                   	= 1015
		direction                  	= "Inbound"
		access                     	= "Allow"
		protocol                   	= "*"
		source_port_range         	= "*"
		destination_port_ranges    	= ["80","443"]
		source_address_prefix      	= "103.28.248.0/22"
		destination_address_prefix 	= "*"
	}
	security_rule {
		name                       	= "Whitelist-Imperva-Block5"
		priority                   	= 1020
		direction                  	= "Inbound"
		access                     	= "Allow"
		protocol                   	= "*"
		source_port_range         	= "*"
		destination_port_ranges    	= ["80","443"]
		source_address_prefix      	= "185.11.124.0/22"
		destination_address_prefix 	= "*"
	}
	security_rule {
		name                       	= "Whitelist-Imperva-Block6"
		priority                   	= 1025
		direction                  	= "Inbound"
		access                     	= "Allow"
		protocol                   	= "*"
		source_port_range         	= "*"
		destination_port_ranges    	= ["80","443"]
		source_address_prefix      	= "45.64.64.0/22"
		destination_address_prefix 	= "*"
	}
	security_rule {
		name                       	= "Whitelist-Imperva-Block7"
		priority                   	= 1030
		direction                  	= "Inbound"
		access                     	= "Allow"
		protocol                   	= "*"
		source_port_range         	= "*"
		destination_port_ranges    	= ["80","443"]
		source_address_prefix      	= "192.230.64.0/18"
		destination_address_prefix 	= "*"
	}
	security_rule {
		name                       	= "Whitelist-Imperva-Block8"
		priority                   	= 1035
		direction                  	= "Inbound"
		access                     	= "Allow"
		protocol                   	= "*"
		source_port_range         	= "*"
		destination_port_ranges    	= ["80","443"]
		source_address_prefix      	= "107.154.0.0/16"
		destination_address_prefix 	= "*"
	}
	security_rule {
		name                       	= "Whitelist-Imperva-Block9"
		priority                   	= 1040
		direction                  	= "Inbound"
		access                     	= "Allow"
		protocol                   	= "*"
		source_port_range         	= "*"
		destination_port_ranges    	= ["80","443"]
		source_address_prefix      	= "45.60.0.0/16"
		destination_address_prefix 	= "*"
	}
	security_rule {
		name                       	= "Whitelist-Imperva-Block10"
		priority                   	= 1045
		direction                  	= "Inbound"
		access                     	= "Allow"
		protocol                   	= "*"
		source_port_range         	= "*"
		destination_port_ranges    	= ["80","443"]
		source_address_prefixes     = ["45.223.0.0/16","149.126.72.0/21"]
		destination_address_prefix 	= "*"
	}
	security_rule {
		name                       	= "BackendHealthCommunication"
		priority                   	= 1060
		direction                  	= "Inbound"
		access                     	= "Allow"
		protocol                   	= "*"
		source_port_range         	= "*"
		destination_port_range    	= "65503-65534"
		source_address_prefix     	= "*"
		destination_address_prefix 	= "*"
	}
	security_rule {
		name                       	= "Pen-Test-IP-Allowance"
		priority                   	= 1070
		direction                  	= "Inbound"
		access                     	= "Allow"
		protocol                   	= "*"
		source_port_range         	= "*"
		destination_port_ranges    	= ["80","443"]
		source_address_prefix     	= "207.244.90.5/32"
		destination_address_prefix 	= "*"
	}
	security_rule {
		name                       	= "BRLI-NJ-Office"
		priority                   	= 1080
		direction                  	= "Inbound"
		access                     	= "Allow"
		protocol                   	= "*"
		source_port_range         	= "*"
		destination_port_ranges    	= ["80","443"]
		source_address_prefixes    	= ["69.74.168.160/28","4.28.191.176/28","65.51.209.64/29","65.200.185.192/28"]
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
