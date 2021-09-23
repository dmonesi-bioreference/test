variable subscription_id {}
variable client_id {}
variable client_secret {}
variable tenant_id {}

##### Resource Group ######
variable rg_network_name {}
variable rg_name {}

##### Virtual Network ######
variable vnet_name {}
variable vnet_cidr {}

##### Application Gateway ######
variable agw_subnet_name {}
variable agw_subnet_cidr {}
variable agw_subnet_nsg_name {}
variable agw_sku_config {}
variable agw_probe_hostname {}
variable agw_backend_pool_fqdns {}
variable agw_backend_cert_file {}
variable agw_backend_cert_name {}

##### SSL ######
variable app_ssl_cert_file {}
variable app_ssl_cert_name {}
variable app_ssl_cert_pwd {}

##### Application Service ######
variable app_name {}
variable app_host_name {}
variable iase_host_name {}
variable app_sku_config {}
variable app_kind {}
variable ase_subnet_name {}
variable ase_subnet_cidr {}
variable ase_subnet_nsg_name {}
variable ase_name {}

##### Private DNS Zone ######
variable iase_domain_name {}

##### Environment Settings ######
variable env_prefix {}
variable app_short_name {}

##### Container Registry ######
variable container_repository {}

#############################################################################
# LOCALS
#############################################################################
locals{
    env_name = lower(terraform.workspace)
}