terraform {
  backend "azurerm" {
    resource_group_name  = "RGP-USE2-PaaS-Sandbox"
    storage_account_name = "stgsbxtfstate"
    container_name       = "tfstate"
    key                  = "pandas-gateway.terraform.tfstate"
  }
}

provider "azurerm" {
  subscription_id            = var.subscription_id
  client_id                  = var.client_id
  client_secret              = var.client_secret
  tenant_id                  = var.tenant_id
  skip_provider_registration = "true"
  features {}
}

# Resource group for all network resources
module "ent_resource_group_network" {
  source  = "../modules/resource_group"
  rg_name = var.rg_network_name[local.env_name]
}

# Virtual Network
module "ent_virtual_network" {
  source       = "../modules/vnet"
  vnet_rg_name = module.ent_resource_group_network.name
  vnet_name    = var.vnet_name[local.env_name]
}

# Resource group for this application
module "pandas_resource_group" {
  source  = "../modules/resource_group"
  rg_name = var.rg_name[local.env_name]
}

# Application Gateway Subnet
module "pandas_agw_subnet" {
  source          = "../modules/agw_subnet"
  subnet_name     = var.agw_subnet_name[local.env_name]
  rg_name         = module.ent_resource_group_network.name
  vnet_name       = module.ent_virtual_network.name
  subnet_cidr     = var.agw_subnet_cidr[local.env_name]
  subnet_nsg_name = var.agw_subnet_nsg_name[local.env_name]
  location        = module.pandas_resource_group.location
}

# Application Gateway
module "pandas_agw" {
  source                 = "../modules/agw_with_public_ip"
  env_prefix             = var.env_prefix[local.env_name]
  rg_name                = module.pandas_resource_group.name
  location               = module.pandas_resource_group.location
  app_name               = var.app_name[local.env_name]
  app_short_name         = var.app_short_name[local.env_name]
  agw_sku_name           = var.agw_sku_config[local.env_name].name
  agw_sku_tier           = var.agw_sku_config[local.env_name].tier
  agw_sku_capacity       = var.agw_sku_config[local.env_name].capacity
  subnet_id              = module.pandas_agw_subnet.id
  backend_pool_fqdns     = var.agw_backend_pool_fqdns[local.env_name]
  probe_host_name        = var.agw_probe_hostname[local.env_name]
  ssl_cert_file          = var.app_ssl_cert_file[local.env_name]
  ssl_cert_name          = var.app_ssl_cert_name[local.env_name]
  ssl_cert_pwd           = var.app_ssl_cert_pwd
  backend_auth_cert      = var.agw_backend_cert_file[local.env_name]
  backend_auth_cert_name = var.agw_backend_cert_name[local.env_name]

  depends_on = [
    module.pandas_agw_subnet
  ]
}

