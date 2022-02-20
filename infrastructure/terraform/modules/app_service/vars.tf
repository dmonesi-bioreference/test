variable "app_name" {}
variable "rg_name" {}
variable "location" {}
variable "ase_id" {}
variable "sku_tier" {
  default = "Isolated"
}
variable "sku_size" {
  default = "I1"
}
variable "sku_capacity" {
  default = "1"
}
variable "kind" {
  default = "Windows"
}
variable "host_name_prod" {}
variable "host_name_stage" {}
variable "host_name_dev" {}
variable "iase_host_name_prod" {}
variable "iase_host_name_stage" {}
variable "iase_host_name_dev" {}
variable "docker_registry_server_url" {}
variable "docker_registry_server_username" {}
variable "docker_registry_server_password" {}
variable "container_repository" {}
variable "container_tag_prod" {}
variable "container_tag_stage" {}
variable "container_tag_dev" {}

variable "client_id" {}
variable "client_secret" {}
variable "tenant_id" {}

variable "log_analytics_workspace_id" {}


