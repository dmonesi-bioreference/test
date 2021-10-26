variable "ase_name" {}
variable "subnet_id" {}
variable "pricing_tier" {
  default = "I1"
}
variable "front_end_scale_factor" {
  default = 15
}
variable "internal_load_balancing_mode" {
  default = "Web, Publishing"
}
