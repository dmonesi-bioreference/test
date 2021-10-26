variable "rg_name" {}
variable "acr_name" {}
variable "location" {}
variable "sku" {
  default = "Premium"
}
variable "admin_enabled" {
  default = true
}