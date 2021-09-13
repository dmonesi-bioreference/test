variable "managed_instance_name" {}
variable "vnet_name" {}
variable "rg_name" {}
variable "vnet_rg_name" {}

variable "subnet_name" {}
variable "mi_name" {}
variable "adminlogin" {}
variable "adminpwd" {}
variable "deployment_mode" {
    default = "Incremental"
}
variable "arm_template_file" {}

