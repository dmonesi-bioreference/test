terraform {
  backend "azurerm" {
    resource_group_name             = "RGP-USE2-PaaS-Sandbox"
    storage_account_name            = "stgsbxtfstate"
    container_name                  = "tfstate"
    key                             = "pandas.terraform.tfstate"
  }
}

provider "azurerm" {
    subscription_id 							  = var.subscription_id
    client_id       							  = var.client_id
    client_secret   							  = var.client_secret
    tenant_id       							  = var.tenant_id
	  skip_provider_registration 		  = "true"
    features {}
}

# Resource group for all network resources
module "ent_resource_group_network" {
  source                            = "../modules/resource_group"
  rg_name                           = var.rg_network_name[local.env_name]
}

# Virtual Network
module "ent_virtual_network" {
  source                            = "../modules/vnet"
  vnet_rg_name                      = module.ent_resource_group_network.name
  vnet_name                         = var.vnet_name[local.env_name]
}

# Resource group for this application
module "pandas_resource_group" {
  source                            = "../modules/resource_group"
  rg_name                           = var.rg_name[local.env_name]
}

# ASE Subnet
module "pandas_ase_subnet" {
  source                            = "../modules/ase_subnet"
  subnet_name                       = var.ase_subnet_name[local.env_name]
  rg_name                           = module.ent_resource_group_network.name
  vnet_name                         = module.ent_virtual_network.name
  vnet_cidr                         = var.vnet_cidr[local.env_name]
  subnet_cidr                       = var.ase_subnet_cidr[local.env_name]
  subnet_nsg_name                   = var.ase_subnet_nsg_name[local.env_name]
  location                          = module.pandas_resource_group.location
}

# App Service Environment
module "pandas_ase" {
  source                            = "../modules/app_service_environment"
  ase_name                          = var.ase_name[local.env_name]
  subnet_id                         = module.pandas_ase_subnet.id
}

# Azure Container Registry
module "genedx_acr" {
  source                            = "../modules/container_registry"
  acr_name                          = "genedx01"
  rg_name                           = module.pandas_resource_group.name
  location                          = module.pandas_resource_group.location
}

# Application Service
module "pandas_app_service" {
  source                            = "../modules/app_service"
  client_id       							    = var.client_id
  client_secret   							    = var.client_secret
  tenant_id       							    = var.tenant_id
  app_name                          = var.app_name[local.env_name]
  kind                              = var.app_kind[local.env_name]
  rg_name                           = module.pandas_resource_group.name
  location                          = module.pandas_resource_group.location
  ase_id                            = module.pandas_ase.id
  host_name                         = var.app_host_name[local.env_name]
  iase_host_name                    = var.iase_host_name[local.env_name]
  sku_tier                          = var.app_sku_config[local.env_name].tier
  sku_size                          = var.app_sku_config[local.env_name].size
  sku_capacity                      = var.app_sku_config[local.env_name].capacity
  docker_registry_server_url        = module.genedx_acr.login_server
  docker_registry_server_username   = module.genedx_acr.admin_username
  docker_registry_server_password   = module.genedx_acr.admin_password
  container_repository              = var.container_repository[local.env_name]
	ssl_cert_file								      = var.app_ssl_cert_file[local.env_name]
	ssl_cert_name								      = var.app_ssl_cert_name[local.env_name]
  ssl_cert_pwd                      = var.app_ssl_cert_pwd
}


# Application Gateway Subnet
module "pandas_agw_subnet" {
  source                            = "../modules/agw_subnet"
  subnet_name                       = var.agw_subnet_name[local.env_name]
  rg_name                           = module.ent_resource_group_network.name
  vnet_name                         = module.ent_virtual_network.name
  subnet_cidr                       = var.agw_subnet_cidr[local.env_name]
  subnet_nsg_name                   = var.agw_subnet_nsg_name[local.env_name]
  location                          = module.pandas_resource_group.location
}

# Application Gateway
module "pandas_agw" {
  source                            = "../modules/agw_with_public_ip"
  env_prefix                        = var.env_prefix[local.env_name]
  rg_name                           = module.pandas_resource_group.name
  location                          = module.pandas_resource_group.location
  app_short_name                    = var.app_short_name[local.env_name]
	agw_sku_name								      = var.agw_sku_config[local.env_name].name
	agw_sku_tier								      = var.agw_sku_config[local.env_name].tier
	agw_sku_capacity							    = var.agw_sku_config[local.env_name].capacity
	subnet_id 									      = module.pandas_agw_subnet.id
  backend_pool_fqdns                = var.agw_backend_pool_fqdns[local.env_name]
	probe_host_name						        = var.agw_probe_hostname[local.env_name]
	ssl_cert_file								      = var.app_ssl_cert_file[local.env_name]
	ssl_cert_name								      = var.app_ssl_cert_name[local.env_name]
  ssl_cert_pwd                      = var.app_ssl_cert_pwd
	backend_auth_cert							    = var.agw_backend_cert_file[local.env_name]
	backend_auth_cert_name						= var.agw_backend_cert_name[local.env_name]
}

# Private DNS Zone
module "pandas_private_dns_zone" {
  source                            = "../modules/private_dns_zone"
  domain_name                       = var.iase_domain_name[local.env_name]
  subdomain_name                    = var.app_short_name[local.env_name]
  subdomain_backend_records         = module.pandas_ase.internal_ip_address
  rg_name                           = module.pandas_resource_group.name
  vnet_id                           = module.ent_virtual_network.id
}

