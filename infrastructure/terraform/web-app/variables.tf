variable "subscription_id" {}
variable "client_id" {}
variable "client_secret" {}
variable "tenant_id" {}

##### Resource Group ######
variable "rg_network_name" {}
variable "rg_name" {}

##### Virtual Network ######
variable "vnet_name" {}
variable "vnet_cidr" {}

##### Application Service ######
variable "app_name" {}
variable "app_host_name_dev" {}
variable "app_host_name_stage" {}
variable "app_host_name_prod" {}
variable "iase_host_name_dev" {}
variable "iase_host_name_stage" {}
variable "iase_host_name_prod" {}
variable "app_sku_config" {}
variable "app_kind" {}
variable "ase_subnet_name" {}
variable "ase_subnet_cidr" {}
variable "ase_subnet_nsg_name" {}
variable "ase_name" {}

##### Private DNS Zone ######
variable "iase_domain_name" {}

variable "app_short_name_dev" {}
variable "app_short_name_stage" {}
variable "app_short_name_prod" {}

##### Container Registry ######
variable "acr_name" {}
variable "container_repository" {}
variable "container_tag_prod" {}
variable "container_tag_stage" {}
variable "container_tag_dev" {}
