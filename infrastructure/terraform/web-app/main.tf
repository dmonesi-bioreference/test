terraform {
  backend "azurerm" {
    resource_group_name  = "RGP-USE2-PaaS-Sandbox"
    storage_account_name = "stgsbxtfstate"
    container_name       = "tfstate"
    key                  = "pandas-app.terraform.tfstate"
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
  rg_name = var.rg_network_name
}

# Virtual Network
module "ent_virtual_network" {
  source       = "../modules/vnet"
  vnet_rg_name = module.ent_resource_group_network.name
  vnet_name    = var.vnet_name
}

# Resource group for this application
module "pandas_resource_group" {
  source  = "../modules/resource_group"
  rg_name = var.rg_name
}

# Azure Container Registry
module "genedx_acr" {
  source   = "../modules/container_registry"
  acr_name = var.acr_name
  rg_name  = module.pandas_resource_group.name
  location = module.pandas_resource_group.location
}

# Log Analytics workspace to receive logs from different resources
module "pandas_log_analytics_workspace" {
   source   = "../modules/log_analytics_workspace"
   name     = var.log_analytics_workspace_name
   rg_name  = var.rg_name
   location = module.pandas_resource_group.location
}


# ASE Subnet
module "pandas_ase_subnet" {
  source          = "../modules/ase_subnet"
  subnet_name     = var.ase_subnet_name
  rg_name         = module.ent_resource_group_network.name
  vnet_name       = module.ent_virtual_network.name
  vnet_cidr       = var.vnet_cidr
  subnet_cidr     = var.ase_subnet_cidr
  subnet_nsg_name = var.ase_subnet_nsg_name
  location        = module.pandas_resource_group.location
}

# App Service Environment
module "pandas_ase" {
  source    = "../modules/app_service_environment"
  ase_name  = var.ase_name
  rg_name   = module.pandas_resource_group.name
  subnet_id = module.pandas_ase_subnet.id

  depends_on = [
    module.pandas_ase_subnet
  ]
}

# Application Service
# SSL cert installation on app service and slots is done manually
module "pandas_app_service" {
  source                          = "../modules/app_service"
  client_id                       = var.client_id
  client_secret                   = var.client_secret
  tenant_id                       = var.tenant_id
  app_name                        = var.app_name
  kind                            = var.app_kind
  rg_name                         = module.pandas_resource_group.name
  location                        = module.pandas_resource_group.location
  ase_id                          = module.pandas_ase.id
  host_name_prod                  = var.app_host_name_prod
  host_name_stage                 = var.app_host_name_stage
  host_name_dev                   = var.app_host_name_dev
  iase_host_name_prod             = var.iase_host_name_prod
  iase_host_name_stage            = var.iase_host_name_stage
  iase_host_name_dev              = var.iase_host_name_dev
  sku_tier                        = var.app_sku_config.tier
  sku_size                        = var.app_sku_config.size
  sku_capacity                    = var.app_sku_config.capacity
  docker_registry_server_url      = module.genedx_acr.login_server
  docker_registry_server_username = module.genedx_acr.admin_username
  docker_registry_server_password = module.genedx_acr.admin_password
  container_repository            = var.container_repository
  container_tag_prod              = var.container_tag_prod
  container_tag_stage             = var.container_tag_stage
  container_tag_dev               = var.container_tag_dev
  
  log_analytics_workspace_id      = module.pandas_log_analytics_workspace.id

  depends_on = [
    module.pandas_ase,
    module.genedx_acr
  ]
}

# Private DNS Zone
module "pandas_private_dns_zone" {
  source                    = "../modules/private_dns_zone"
  domain_name               = var.iase_domain_name
  subdomain_name_prod       = var.app_short_name_prod
  subdomain_name_stage      = var.app_short_name_stage
  subdomain_name_dev        = var.app_short_name_dev
  subdomain_backend_records = module.pandas_ase.internal_ip_address
  rg_name                   = module.pandas_resource_group.name
  vnet_id                   = module.ent_virtual_network.id

  depends_on = [
    module.pandas_ase
  ]
}

# Temp Application Service (For testing purposes)
module "test_app_service" {
  source                          = "../modules/app_service_temp"
  client_id                       = var.client_id
  client_secret                   = var.client_secret
  tenant_id                       = var.tenant_id
  app_name                        = "testapp"
  kind                            = "Windows"
  rg_name                         = module.pandas_resource_group.name
  location                        = module.pandas_resource_group.location
  ase_id                          = module.pandas_ase.id
}