resource "azurerm_subnet" "main" {
	name					    = var.subnet_name
	resource_group_name   		= var.rg_name
	virtual_network_name  		= var.vnet_name
	address_prefix        		= var.subnet_cidr
	delegation {
		name					= "mi_delegation"
		service_delegation {
			name = "Microsoft.Sql/managedInstances"
		}
	}
}

resource "azurerm_network_security_group" "main" {
	name                			    = "nsg-${var.subnet_name}"
	location            			    = var.location
	resource_group_name 			    = var.rg_name

	security_rule {
		name						= "allow_management_inbound"
		priority                   	= 100
		direction                  	= "Inbound"
		access                     	= "Allow"
		protocol                   	= "Tcp"
		source_port_range          	= "*"
		destination_port_ranges    	= ["9000","9003","1438","1440","1452"]
		source_address_prefix      	= "SqlManagement"
		destination_address_prefix 	= "*"
	}
	security_rule {
		name						= "allow_management_inbound_corp"
		priority                   	= 200
		direction                  	= "Inbound"
		access                     	= "Allow"
		protocol                   	= "Tcp"
		source_port_range          	= "*"
		destination_port_ranges    	= ["9000","9003"]
		source_address_prefix      	= "CorpnetSaw"
		destination_address_prefix 	= "*"
	}
	security_rule {
		name						= "allow_management_inbound_1"
		priority                   	= 300
		direction                  	= "Inbound"
		access                     	= "Allow"
		protocol                   	= "Tcp"
		source_port_range          	= "*"
		destination_port_ranges    	= ["9000","9003"]
		source_address_prefixes    	= ["65.55.188.0/24","167.220.0.0/16","131.107.0.0/16","94.245.87.0/24"]
		destination_address_prefix 	= "*"
	}
	security_rule {
		name						= "allow_misubnet_inbound"
		priority                   	= 400
		direction                  	= "Inbound"
		access                     	= "Allow"
		protocol                   	= "*"
		source_port_range          	= "*"
		destination_port_range    	= "*"
		source_address_prefix      	= var.subnet_cidr
		destination_address_prefix 	= "*"
	}
	security_rule {
		name						= "allow_health_probe_inbound"
		priority                   	= 500
		direction                  	= "Inbound"
		access                     	= "Allow"
		protocol                   	= "*"
		source_port_range          	= "*"
		destination_port_range    	= "*"
		source_address_prefix      	= "AzureLoadBalancer"
		destination_address_prefix 	= "*"
	}
	security_rule {
		name						= "allow_tds_inbound"
		priority                   	= 1000
		direction                  	= "Inbound"
		access                     	= "Allow"
		protocol                   	= "Tcp"
		source_port_range          	= "*"
		destination_port_range    	= "1433"
		source_address_prefix      	= "VirtualNetwork"
		destination_address_prefix 	= "*"
	}
	security_rule {
		name						= "deny_all_inbound"
		priority                   	= 4096
		direction                  	= "Inbound"
		access                     	= "Deny"
		protocol                   	= "*"
		source_port_range          	= "*"
		destination_port_range    	= "*"
		source_address_prefix      	= "*"
		destination_address_prefix 	= "*"
	}
	
	security_rule {
		name						= "allow_management_outbound"
		priority                   	= 100
		direction                  	= "Outbound"
		access                     	= "Allow"
		protocol                   	= "Tcp"
		source_port_range          	= "*"
		destination_port_ranges    	= ["443","12000"]
		source_address_prefix      	= "*"
		destination_address_prefix 	= "AzureCloud"
	}
	security_rule {
		name						= "allow_misubnet_outbound"
		priority                   	= 200
		direction                  	= "Outbound"
		access                     	= "Allow"
		protocol                   	= "*"
		source_port_range          	= "*"
		destination_port_range    	= "*"
		source_address_prefix      	= "*"
		destination_address_prefix 	= var.subnet_cidr
	}
}

resource "azurerm_route_table" "main" {
	name                          	= "rtr-${var.subnet_name}"
	location            			= var.location
	resource_group_name 			= var.rg_name
	disable_bgp_route_propagation 	= false
	
	route {
		name           				= "subnet_to_vnetlocal"
		address_prefix 				= var.subnet_cidr
		next_hop_type  				= "VnetLocal"
	}
	route {
		name           				= "mi-13-64-11-nexthop-internet"
		address_prefix 				= "13.64.0.0/11"
		next_hop_type  				= "Internet"
	}
	route {
		name           				= "mi-13-104-14-nexthop-internet"
		address_prefix 				= "13.104.0.0/14"
		next_hop_type  				= "Internet"
	}
	route {
		name           				= "mi-20-34-15-nexthop-internet"
		address_prefix 				= "20.34.0.0/15"
		next_hop_type  				= "Internet"
	}
	route {
		name           				= "mi-20-36-14-nexthop-internet"
		address_prefix 				= "20.36.0.0/14"
		next_hop_type  				= "Internet"
	}
	route {
		name           				= "mi-20-40-13-nexthop-internet"
		address_prefix 				= "20.40.0.0/13"
		next_hop_type  				= "Internet"
	}
	route {
		name           				= "mi-20-128-16-nexthop-internet"
		address_prefix 				= "20.128.0.0/16"
		next_hop_type  				= "Internet"
	}
	route {
		name           				= "mi-20-140-15-nexthop-internet"
		address_prefix 				= "20.140.0.0/15"
		next_hop_type  				= "Internet"
	}
	route {
		name           				= "mi-20-144-14-nexthop-internet"
		address_prefix 				= "20.144.0.0/14"
		next_hop_type  				= "Internet"
	}
	route {
		name           				= "mi-20-150-15-nexthop-internet"
		address_prefix 				= "20.150.0.0/15"
		next_hop_type  				= "Internet"
	}
	route {
		name           				= "mi-20-160-12-nexthop-internet"
		address_prefix 				= "20.160.0.0/12"
		next_hop_type  				= "Internet"
	}
	route {
		name           				= "mi-20-176-14-nexthop-internet"
		address_prefix 				= "20.176.0.0/14"
		next_hop_type  				= "Internet"
	}
	route {
		name           				= "mi-20-180-14-nexthop-internet"
		address_prefix 				= "20.180.0.0/14"
		next_hop_type  				= "Internet"
	}
	route {
		name           				= "mi-20-184-13-nexthop-internet"
		address_prefix 				= "20.184.0.0/13"
		next_hop_type  				= "Internet"
	}
	route {
		name           				= "mi-40-64-10-nexthop-internet"
		address_prefix 				= "40.64.0.0/10"
		next_hop_type  				= "Internet"
	}
	route {
		name           				= "mi-51-4-15-nexthop-internet"
		address_prefix 				= "51.4.0.0/15"
		next_hop_type  				= "Internet"
	}
	route {
		name           				= "mi-51-8-16-nexthop-internet"
		address_prefix 				= "51.8.0.0/16"
		next_hop_type  				= "Internet"
	}
	route {
		name           				= "mi-51-10-15-nexthop-internet"
		address_prefix 				= "51.10.0.0/15"
		next_hop_type  				= "Internet"
	}
	route {
		name           				= "mi-51-12-15-nexthop-internet"
		address_prefix 				= "51.12.0.0/15"
		next_hop_type  				= "Internet"
	}
	route {
		name           				= "mi-51-18-16-nexthop-internet"
		address_prefix 				= "51.18.0.0/16"
		next_hop_type  				= "Internet"
	}
	route {
		name           				= "mi-51-51-16-nexthop-internet"
		address_prefix 				= "51.51.0.0/16"
		next_hop_type  				= "Internet"
	}
	route {
		name           				= "mi-51-53-16-nexthop-internet"
		address_prefix 				= "51.53.0.0/16"
		next_hop_type  				= "Internet"
	}
	route {
		name           				= "mi-51-103-16-nexthop-internet"
		address_prefix 				= "51.103.0.0/16"
		next_hop_type  				= "Internet"
	}
	route {
		name           				= "mi-51-104-15-nexthop-internet"
		address_prefix 				= "51.104.0.0/15"
		next_hop_type  				= "Internet"
	}
	route {
		name           				= "mi-51-107-16-nexthop-internet"
		address_prefix 				= "51.107.0.0/16"
		next_hop_type  				= "Internet"
	}
	route {
		name           				= "mi-51-116-16-nexthop-internet"
		address_prefix 				= "51.116.0.0/16"
		next_hop_type  				= "Internet"
	}
	route {
		name           				= "mi-51-120-16-nexthop-internet"
		address_prefix 				= "51.120.0.0/16"
		next_hop_type  				= "Internet"
	}
	route {
		name           				= "mi-51-124-16-nexthop-internet"
		address_prefix 				= "51.124.0.0/16"
		next_hop_type  				= "Internet"
	}
	route {
		name           				= "mi-51-132-16-nexthop-internet"
		address_prefix 				= "51.132.0.0/16"
		next_hop_type  				= "Internet"
	}
	route {
		name           				= "mi-51-136-15-nexthop-internet"
		address_prefix 				= "51.136.0.0/15"
		next_hop_type  				= "Internet"
	}
	route {
		name           				= "mi-51-138-16-nexthop-internet"
		address_prefix 				= "51.138.0.0/16"
		next_hop_type  				= "Internet"
	}
	route {
		name           				= "mi-51-140-14-nexthop-internet"
		address_prefix 				= "51.140.0.0/14"
		next_hop_type  				= "Internet"
	}
	route {
		name           				= "mi-51-144-15-nexthop-internet"
		address_prefix 				= "51.144.0.0/15"
		next_hop_type  				= "Internet"
	}
	route {
		name           				= "mi-52-96-12-nexthop-internet"
		address_prefix 				= "52.96.0.0/12"
		next_hop_type  				= "Internet"
	}
	route {
		name           				= "mi-52-112-14-nexthop-internet"
		address_prefix 				= "52.112.0.0/14"
		next_hop_type  				= "Internet"
	}
	route {
		name           				= "mi-52-125-16-nexthop-internet"
		address_prefix 				= "52.125.0.0/16"
		next_hop_type  				= "Internet"
	}
	route {
		name           				= "mi-52-126-15-nexthop-internet"
		address_prefix 				= "52.126.0.0/15"
		next_hop_type  				= "Internet"
	}
	route {
		name           				= "mi-52-130-15-nexthop-internet"
		address_prefix 				= "52.130.0.0/15"
		next_hop_type  				= "Internet"
	}
	route {
		name           				= "mi-52-132-14-nexthop-internet"
		address_prefix 				= "52.132.0.0/14"
		next_hop_type  				= "Internet"
	}
	route {
		name           				= "mi-52-136-13-nexthop-internet"
		address_prefix 				= "52.136.0.0/13"
		next_hop_type  				= "Internet"
	}
	route {
		name           				= "mi-52-145-16-nexthop-internet"
		address_prefix 				= "52.145.0.0/16"
		next_hop_type  				= "Internet"
	}
	route {
		name           				= "mi-52-146-15-nexthop-internet"
		address_prefix 				= "52.146.0.0/15"
		next_hop_type  				= "Internet"
	}
	route {
		name           				= "mi-52-148-14-nexthop-internet"
		address_prefix 				= "52.148.0.0/14"
		next_hop_type  				= "Internet"
	}
	route {
		name           				= "mi-52-152-13-nexthop-internet"
		address_prefix 				= "52.152.0.0/13"
		next_hop_type  				= "Internet"
	}
	route {
		name           				= "mi-52-160-11-nexthop-internet"
		address_prefix 				= "52.160.0.0/11"
		next_hop_type  				= "Internet"
	}
	route {
		name           				= "mi-52-224-11-nexthop-internet"
		address_prefix 				= "52.224.0.0/11"
		next_hop_type  				= "Internet"
	}
	route {
		name           				= "mi-64-4-18-nexthop-internet"
		address_prefix 				= "64.4.0.0/18"
		next_hop_type  				= "Internet"
	}
	route {
		name           				= "mi-65-52-14-nexthop-internet"
		address_prefix 				= "65.52.0.0/14"
		next_hop_type  				= "Internet"
	}
	route {
		name           				= "mi-66-119-144-20-nexthop-internet"
		address_prefix 				= "66.119.144.0/20"
		next_hop_type  				= "Internet"
	}
	route {
		name           				= "mi-70-37-17-nexthop-internet"
		address_prefix 				= "70.37.0.0/17"
		next_hop_type  				= "Internet"
	}
	route {
		name           				= "mi-70-37-128-18-nexthop-internet"
		address_prefix 				= "70.37.128.0/18"
		next_hop_type  				= "Internet"
	}
	route {
		name           				= "mi-91-190-216-21-nexthop-internet"
		address_prefix 				= "91.190.216.0/21"
		next_hop_type  				= "Internet"
	}
	route {
		name           				= "mi-94-245-64-18-nexthop-internet"
		address_prefix 				= "94.245.64.0/18"
		next_hop_type  				= "Internet"
	}
	route {
		name           				= "mi-103-9-8-22-nexthop-internet"
		address_prefix 				= "103.9.8.0/22"
		next_hop_type  				= "Internet"
	}
	route {
		name           				= "mi-103-25-156-22-nexthop-internet"
		address_prefix 				= "103.25.156.0/22"
		next_hop_type  				= "Internet"
	}
	route {
		name           				= "mi-103-25-157-24-nexthop-internet"
		address_prefix 				= "103.25.157.0/24"
		next_hop_type  				= "Internet"
	}
	route {
		name           				= "mi-103-25-158-23-nexthop-internet"
		address_prefix 				= "103.25.158.0/23"
		next_hop_type  				= "Internet"
	}
	route {
		name           				= "mi-103-36-96-22-nexthop-internet"
		address_prefix 				= "103.36.96.0/22"
		next_hop_type  				= "Internet"
	}
	route {
		name           				= "mi-103-255-140-22-nexthop-internet"
		address_prefix 				= "103.255.140.0/22"
		next_hop_type  				= "Internet"
	}
	route {
		name           				= "mi-104-40-13-nexthop-internet"
		address_prefix 				= "104.40.0.0/13"
		next_hop_type  				= "Internet"
	}
	route {
		name           				= "mi-104-146-15-nexthop-internet"
		address_prefix 				= "104.146.0.0/15"
		next_hop_type  				= "Internet"
	}
	route {
		name           				= "mi-104-208-13-nexthop-internet"
		address_prefix 				= "104.208.0.0/13"
		next_hop_type  				= "Internet"
	}
	route {
		name           				= "mi-111-221-16-20-nexthop-internet"
		address_prefix 				= "111.221.16.0/20"
		next_hop_type  				= "Internet"
	}
	route {
		name           				= "mi-111-221-64-18-nexthop-internet"
		address_prefix 				= "111.221.64.0/18"
		next_hop_type  				= "Internet"
	}
	route {
		name           				= "mi-129-75-16-nexthop-internet"
		address_prefix 				= "129.75.0.0/16"
		next_hop_type  				= "Internet"
	}
	route {
		name           				= "mi-131-253-1-24-nexthop-internet"
		address_prefix 				= "131.253.1.0/24"
		next_hop_type  				= "Internet"
	}
	route {
		name           				= "mi-131-253-3-24-nexthop-internet"
		address_prefix 				= "131.253.3.0/24"
		next_hop_type  				= "Internet"
	}
	route {
		name           				= "mi-131-253-5-24-nexthop-internet"
		address_prefix 				= "131.253.5.0/24"
		next_hop_type  				= "Internet"
	}
	route {
		name           				= "mi-131-253-6-24-nexthop-internet"
		address_prefix 				= "131.253.6.0/24"
		next_hop_type  				= "Internet"
	}
	route {
		name           				= "mi-131-253-8-24-nexthop-internet"
		address_prefix 				= "131.253.8.0/24"
		next_hop_type  				= "Internet"
	}
	route {
		name           				= "mi-131-253-12-22-nexthop-internet"
		address_prefix 				= "131.253.12.0/22"
		next_hop_type  				= "Internet"
	}
	route {
		name           				= "mi-131-253-16-23-nexthop-internet"
		address_prefix 				= "131.253.16.0/23"
		next_hop_type  				= "Internet"
	}
	route {
		name           				= "mi-131-253-18-24-nexthop-internet"
		address_prefix 				= "131.253.18.0/24"
		next_hop_type  				= "Internet"
	}
	route {
		name           				= "mi-131-253-21-24-nexthop-internet"
		address_prefix 				= "131.253.21.0/24"
		next_hop_type  				= "Internet"
	}
	route {
		name           				= "mi-131-253-22-23-nexthop-internet"
		address_prefix 				= "131.253.22.0/23"
		next_hop_type  				= "Internet"
	}
	route {
		name           				= "mi-131-253-24-21-nexthop-internet"
		address_prefix 				= "131.253.24.0/21"
		next_hop_type  				= "Internet"
	}
	route {
		name           				= "mi-131-253-32-20-nexthop-internet"
		address_prefix 				= "131.253.32.0/20"
		next_hop_type  				= "Internet"
	}
	route {
		name           				= "mi-131-253-61-24-nexthop-internet"
		address_prefix 				= "131.253.61.0/24"
		next_hop_type  				= "Internet"
	}
	route {
		name           				= "mi-131-253-62-23-nexthop-internet"
		address_prefix 				= "131.253.62.0/23"
		next_hop_type  				= "Internet"
	}
	route {
		name           				= "mi-131-253-64-18-nexthop-internet"
		address_prefix 				= "131.253.64.0/18"
		next_hop_type  				= "Internet"
	}
	route {
		name           				= "mi-131-253-128-17-nexthop-internet"
		address_prefix 				= "131.253.128.0/17"
		next_hop_type  				= "Internet"
	}
	route {
		name           				= "mi-132-245-16-nexthop-internet"
		address_prefix 				= "132.245.0.0/16"
		next_hop_type  				= "Internet"
	}
	route {
		name           				= "mi-134-170-16-nexthop-internet"
		address_prefix 				= "134.170.0.0/16"
		next_hop_type  				= "Internet"
	}
	route {
		name           				= "mi-134-177-16-nexthop-internet"
		address_prefix 				= "134.177.0.0/16"
		next_hop_type  				= "Internet"
	}
	route {
		name           				= "mi-137-116-15-nexthop-internet"
		address_prefix 				= "137.116.0.0/15"
		next_hop_type  				= "Internet"
	}
	route {
		name           				= "mi-137-135-16-nexthop-internet"
		address_prefix 				= "137.135.0.0/16"
		next_hop_type  				= "Internet"
	}
	route {
		name           				= "mi-138-91-16-nexthop-internet"
		address_prefix 				= "138.91.0.0/16"
		next_hop_type  				= "Internet"
	}
	route {
		name           				= "mi-138-196-16-nexthop-internet"
		address_prefix 				= "138.196.0.0/16"
		next_hop_type  				= "Internet"
	}
	route {
		name           				= "mi-139-217-16-nexthop-internet"
		address_prefix 				= "139.217.0.0/16"
		next_hop_type  				= "Internet"
	}
	route {
		name           				= "mi-139-219-16-nexthop-internet"
		address_prefix 				= "139.219.0.0/16"
		next_hop_type  				= "Internet"
	}
	route {
		name           				= "mi-141-251-16-nexthop-internet"
		address_prefix 				= "141.251.0.0/16"
		next_hop_type  				= "Internet"
	}
	route {
		name           				= "mi-146-147-16-nexthop-internet"
		address_prefix 				= "146.147.0.0/16"
		next_hop_type  				= "Internet"
	}
	route {
		name           				= "mi-147-243-16-nexthop-internet"
		address_prefix 				= "147.243.0.0/16"
		next_hop_type  				= "Internet"
	}
	route {
		name           				= "mi-150-171-16-nexthop-internet"
		address_prefix 				= "150.171.0.0/16"
		next_hop_type  				= "Internet"
	}
	route {
		name           				= "mi-150-242-48-22-nexthop-internet"
		address_prefix 				= "150.242.48.0/22"
		next_hop_type  				= "Internet"
	}
	route {
		name           				= "mi-157-54-15-nexthop-internet"
		address_prefix 				= "157.54.0.0/15"
		next_hop_type  				= "Internet"
	}
	route {
		name           				= "mi-157-56-14-nexthop-internet"
		address_prefix 				= "157.56.0.0/14"
		next_hop_type  				= "Internet"
	}
	route {
		name           				= "mi-157-60-16-nexthop-internet"
		address_prefix 				= "157.60.0.0/16"
		next_hop_type  				= "Internet"
	}
	route {
		name           				= "mi-167-220-16-nexthop-internet"
		address_prefix 				= "167.220.0.0/16"
		next_hop_type  				= "Internet"
	}
	route {
		name           				= "mi-168-61-16-nexthop-internet"
		address_prefix 				= "168.61.0.0/16"
		next_hop_type  				= "Internet"
	}
	route {
		name           				= "mi-168-62-15-nexthop-internet"
		address_prefix 				= "168.62.0.0/15"
		next_hop_type  				= "Internet"
	}
	route {
		name           				= "mi-191-232-13-nexthop-internet"
		address_prefix 				= "191.232.0.0/13"
		next_hop_type  				= "Internet"
	}
	route {
		name           				= "mi-192-32-16-nexthop-internet"
		address_prefix 				= "192.32.0.0/16"
		next_hop_type  				= "Internet"
	}
	route {
		name           				= "mi-192-48-225-24-nexthop-internet"
		address_prefix 				= "192.48.225.0/24"
		next_hop_type  				= "Internet"
	}
	route {
		name           				= "mi-192-84-159-24-nexthop-internet"
		address_prefix 				= "192.84.159.0/24"
		next_hop_type  				= "Internet"
	}
	route {
		name           				= "mi-192-84-160-23-nexthop-internet"
		address_prefix 				= "192.84.160.0/23"
		next_hop_type  				= "Internet"
	}
	route {
		name           				= "mi-192-100-102-24-nexthop-internet"
		address_prefix 				= "192.100.102.0/24"
		next_hop_type  				= "Internet"
	}
	route {
		name           				= "mi-192-100-103-24-nexthop-internet"
		address_prefix 				= "192.100.103.0/24"
		next_hop_type  				= "Internet"
	}
	route {
		name           				= "mi-192-197-157-24-nexthop-internet"
		address_prefix 				= "192.197.157.0/24"
		next_hop_type  				= "Internet"
	}
	route {
		name           				= "mi-193-149-64-19-nexthop-internet"
		address_prefix 				= "193.149.64.0/19"
		next_hop_type  				= "Internet"
	}
	route {
		name           				= "mi-193-221-113-24-nexthop-internet"
		address_prefix 				= "193.221.113.0/24"
		next_hop_type  				= "Internet"
	}
	route {
		name           				= "mi-194-69-96-19-nexthop-internet"
		address_prefix 				= "194.69.96.0/19"
		next_hop_type  				= "Internet"
	}
	route {
		name           				= "mi-194-110-197-24-nexthop-internet"
		address_prefix 				= "194.110.197.0/24"
		next_hop_type  				= "Internet"
	}
	route {
		name           				= "mi-198-105-232-22-nexthop-internet"
		address_prefix 				= "198.105.232.0/22"
		next_hop_type  				= "Internet"
	}
	route {
		name           				= "mi-198-200-130-24-nexthop-internet"
		address_prefix 				= "198.200.130.0/24"
		next_hop_type  				= "Internet"
	}
	route {
		name           				= "mi-198-206-164-24-nexthop-internet"
		address_prefix 				= "198.206.164.0/24"
		next_hop_type  				= "Internet"
	}
	route {
		name           				= "mi-199-60-28-24-nexthop-internet"
		address_prefix 				= "199.60.28.0/24"
		next_hop_type  				= "Internet"
	}
	route {
		name           				= "mi-199-74-210-24-nexthop-internet"
		address_prefix 				= "199.74.210.0/24"
		next_hop_type  				= "Internet"
	}
	route {
		name           				= "mi-199-103-90-23-nexthop-internet"
		address_prefix 				= "199.103.90.0/23"
		next_hop_type  				= "Internet"
	}
	route {
		name           				= "mi-199-103-122-24-nexthop-internet"
		address_prefix 				= "199.103.122.0/24"
		next_hop_type  				= "Internet"
	}
	route {
		name           				= "mi-199-242-32-20-nexthop-internet"
		address_prefix 				= "199.242.32.0/20"
		next_hop_type  				= "Internet"
	}
	route {
		name           				= "mi-199-242-48-21-nexthop-internet"
		address_prefix 				= "199.242.48.0/21"
		next_hop_type  				= "Internet"
	}
	route {
		name           				= "mi-202-89-224-20-nexthop-internet"
		address_prefix 				= "202.89.224.0/20"
		next_hop_type  				= "Internet"
	}
	route {
		name           				= "mi-204-13-120-21-nexthop-internet"
		address_prefix 				= "204.13.120.0/21"
		next_hop_type  				= "Internet"
	}
	route {
		name           				= "mi-204-14-180-22-nexthop-internet"
		address_prefix 				= "204.14.180.0/22"
		next_hop_type  				= "Internet"
	}
	route {
		name           				= "mi-204-79-135-24-nexthop-internet"
		address_prefix 				= "204.79.135.0/24"
		next_hop_type  				= "Internet"
	}
	route {
		name           				= "mi-204-79-179-24-nexthop-internet"
		address_prefix 				= "204.79.179.0/24"
		next_hop_type  				= "Internet"
	}
	route {
		name           				= "mi-204-79-181-24-nexthop-internet"
		address_prefix 				= "204.79.181.0/24"
		next_hop_type  				= "Internet"
	}
	route {
		name           				= "mi-204-79-188-24-nexthop-internet"
		address_prefix 				= "204.79.188.0/24"
		next_hop_type  				= "Internet"
	}
	route {
		name           				= "mi-204-79-195-24-nexthop-internet"
		address_prefix 				= "204.79.195.0/24"
		next_hop_type  				= "Internet"
	}
	route {
		name           				= "mi-204-79-196-23-nexthop-internet"
		address_prefix 				= "204.79.196.0/23"
		next_hop_type  				= "Internet"
	}
	route {
		name           				= "mi-204-79-252-24-nexthop-internet"
		address_prefix 				= "204.79.252.0/24"
		next_hop_type  				= "Internet"
	}
	route {
		name           				= "mi-204-152-18-23-nexthop-internet"
		address_prefix 				= "204.152.18.0/23"
		next_hop_type  				= "Internet"
	}
	route {
		name           				= "mi-204-152-140-23-nexthop-internet"
		address_prefix 				= "204.152.140.0/23"
		next_hop_type  				= "Internet"
	}
	route {
		name           				= "mi-204-231-192-24-nexthop-internet"
		address_prefix 				= "204.231.192.0/24"
		next_hop_type  				= "Internet"
	}
	route {
		name           				= "mi-204-231-194-23-nexthop-internet"
		address_prefix 				= "204.231.194.0/23"
		next_hop_type  				= "Internet"
	}
	route {
		name           				= "mi-204-231-197-24-nexthop-internet"
		address_prefix 				= "204.231.197.0/24"
		next_hop_type  				= "Internet"
	}
	route {
		name           				= "mi-204-231-198-23-nexthop-internet"
		address_prefix 				= "204.231.198.0/23"
		next_hop_type  				= "Internet"
	}
	route {
		name           				= "mi-204-231-200-21-nexthop-internet"
		address_prefix 				= "204.231.200.0/21"
		next_hop_type  				= "Internet"
	}
	route {
		name           				= "mi-204-231-208-20-nexthop-internet"
		address_prefix 				= "204.231.208.0/20"
		next_hop_type  				= "Internet"
	}
	route {
		name           				= "mi-204-231-236-24-nexthop-internet"
		address_prefix 				= "204.231.236.0/24"
		next_hop_type  				= "Internet"
	}
	route {
		name           				= "mi-205-174-224-20-nexthop-internet"
		address_prefix 				= "205.174.224.0/20"
		next_hop_type  				= "Internet"
	}
	route {
		name           				= "mi-206-138-168-21-nexthop-internet"
		address_prefix 				= "206.138.168.0/21"
		next_hop_type  				= "Internet"
	}
	route {
		name           				= "mi-206-191-224-19-nexthop-internet"
		address_prefix 				= "206.191.224.0/19"
		next_hop_type  				= "Internet"
	}
	route {
		name           				= "mi-207-46-16-nexthop-internet"
		address_prefix 				= "207.46.0.0/16"
		next_hop_type  				= "Internet"
	}
	route {
		name           				= "mi-207-68-128-18-nexthop-internet"
		address_prefix 				= "207.68.128.0/18"
		next_hop_type  				= "Internet"
	}
	route {
		name           				= "mi-208-68-136-21-nexthop-internet"
		address_prefix 				= "208.68.136.0/21"
		next_hop_type  				= "Internet"
	}
	route {
		name           				= "mi-208-76-44-22-nexthop-internet"
		address_prefix 				= "208.76.44.0/22"
		next_hop_type  				= "Internet"
	}
	route {
		name           				= "mi-208-84-21-nexthop-internet"
		address_prefix 				= "208.84.0.0/21"
		next_hop_type  				= "Internet"
	}
	route {
		name           				= "mi-209-240-192-19-nexthop-internet"
		address_prefix 				= "209.240.192.0/19"
		next_hop_type  				= "Internet"
	}
	route {
		name           				= "mi-213-199-128-18-nexthop-internet"
		address_prefix 				= "213.199.128.0/18"
		next_hop_type  				= "Internet"
	}
	route {
		name           				= "mi-216-32-180-22-nexthop-internet"
		address_prefix 				= "216.32.180.0/22"
		next_hop_type  				= "Internet"
	}
	route {
		name           				= "mi-216-220-208-20-nexthop-internet"
		address_prefix 				= "216.220.208.0/20"
		next_hop_type  				= "Internet"
	}
}

resource "azurerm_subnet_network_security_group_association" "main" {
	subnet_id                 		= azurerm_subnet.main.id
	network_security_group_id 		= azurerm_network_security_group.main.id
}

resource "azurerm_subnet_route_table_association" "main" {
  subnet_id      					= azurerm_subnet.main.id
  route_table_id 					= azurerm_route_table.main.id
}

output "id" {
  value = azurerm_subnet.main.id
}

output "name" {
  value = azurerm_subnet.main.name
}
