variable "app_short_name" {}
variable "env_prefix" {}
variable "agw_name" {
  default = ""
}
variable "rg_name" {}
variable "location" {}
variable "agw_sku_name" {}
variable "agw_sku_tier" {}
variable "agw_sku_capacity" {}
variable "backend_auth_cert_name" {}
variable "backend_auth_cert" {}
variable "agw_ip_config_name" {
  default = ""
}
variable "subnet_id" {}
variable "frontend_http_port_name" {
  default = ""
}
variable "frontend_http_port" {
  default = 80
}
variable "frontend_https_port_name" {
  default = ""
}
variable "frontend_https_port" {
  default = 443
}
variable "frontend_ip_config_name" {
  default = ""
}
variable "probe_name" {
  default = ""
}
variable "probe_protocol" {
  default = "https"
}
variable "probe_host_name" {}
variable "probe_path" {
  default = "/"
}
variable "probe_timeout" {
  default = 30
}
variable "probe_interval" {
  default = 30
}
variable "probe_unhealthy_threshold" {
  default = 3
}
variable "backend_address_pool_name" {
  default = ""
}
variable "backend_pool_fqdns" {
  type = list(any)
}
variable "http_setting_name" {
  default = ""
}
variable "cookie_based_affinity" {
  default = "Disabled"
}
variable "backend_http_port" {
  default = 80
}
variable "backend_http_protocol" {
  default = "Http"
}
variable "https_setting_name" {
  default = ""
}
variable "backend_https_port" {
  default = 443
}
variable "backend_https_protocol" {
  default = "Https"
}
variable "backend_request_timeout" {
  default = 30
}
variable "ssl_policy_name" {
  default = ""
}
variable "ssl_policy_type" {
  default = "Custom"
}
variable "min_protocol_version" {
  default = "TLSv1_2"
}
variable "cipher_suites" {
  type = list(any)
  default = [
    "TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384",
    "TLS_ECDHE_ECDSA_WITH_AES_256_GCM_SHA384",
    "TLS_RSA_WITH_AES_256_CBC_SHA256",
    "TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256"
  ]
}
variable "ssl_cert_name" {}
variable "ssl_cert_file" {}
variable "ssl_cert_pwd" {}
variable "http_listener_name" {
  default = ""
}
variable "http_listener_protocol" {
  default = "Http"
}
variable "https_listener_name" {
  default = ""
}
variable "https_listener_protocol" {
  default = "Https"
}
variable "redirect_type" {
  default = "Permanent"
}
variable "redirect_include_path" {
  default = "true"
}
variable "redirect_include_query_string" {
  default = "true"
}
variable "request_http_routing_rule_name" {
  default = ""
}
variable "request_http_routing_rule_type" {
  default = "Basic"
}
variable "request_https_routing_rule_type" {
  default = "Basic"
}
