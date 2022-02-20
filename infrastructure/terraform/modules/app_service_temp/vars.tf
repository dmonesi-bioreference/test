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

variable "client_id" {}
variable "client_secret" {}
variable "tenant_id" {}


