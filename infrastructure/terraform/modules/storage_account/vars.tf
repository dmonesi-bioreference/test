variable "storage_account_name" {}
variable "rg_name" {}
variable "location" {}
variable "storage_account_tier" {
  default = "Standard"
}
variable "storage_account_replication_type" {
  default = "GRS"
}

