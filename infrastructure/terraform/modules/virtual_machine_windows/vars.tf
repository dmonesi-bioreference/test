variable "vm_name" {}
variable "location" {}
variable "rg_name" {}
variable "subnet_id" {}
variable "ip_configuration_name" {
  default = "internal"
}
variable "private_ip_address_allocation" {
  default = "Dynamic"
}
variable "dns_servers" {
  type = list
  default = [
        "10.61.8.4",
        "10.61.8.5"
    ]
}
variable "vm_size" {}
variable "vm_image_reference" {}
variable "admin_username" {}
variable "admin_password" {}
variable "provision_vm_agent" {
  default = "true"
}
variable "timezone" {
  default = "Eastern Standard Time"
}
variable "datadisk_storage_account_type" {}
variable "datadisk_create_option" {
  default = "Empty"
}
variable "datadisk_size_gb" {}
variable "boot_diagnostics_storage_uri" {}










