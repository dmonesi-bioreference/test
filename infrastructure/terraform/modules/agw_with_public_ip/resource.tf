resource "azurerm_public_ip" "main" {
  name                = "${var.app_short_name}-pip"
  resource_group_name = var.rg_name
  location            = var.location
  allocation_method   = "Dynamic"
}

resource "azurerm_application_gateway" "main" {
  name                = "agw-use2-ext-${var.env_prefix}-${var.app_short_name}-web"
  resource_group_name = var.rg_name
  location            = var.location

  sku {
    name     = var.agw_sku_name
    tier     = var.agw_sku_tier
    capacity = var.agw_sku_capacity
  }

  authentication_certificate {
    name = var.backend_auth_cert_name
    data = filebase64(var.backend_auth_cert)
  }

  gateway_ip_configuration {
    name      = "${var.app_short_name}-gateway-ip-config"
    subnet_id = var.subnet_id
  }

  frontend_port {
    name = "${var.app_short_name}-http-feport"
    port = var.frontend_http_port
  }

  frontend_port {
    name = "${var.app_short_name}-https-feport"
    port = var.frontend_https_port
  }

  frontend_ip_configuration {
    name                 = "${var.app_short_name}-feip"
    public_ip_address_id = azurerm_public_ip.main.id
  }

  probe {
    name                = "http_${var.app_short_name}"
    protocol            = var.probe_protocol
    host                = var.probe_host_name
    path                = var.probe_path
    timeout             = var.probe_timeout
    interval            = var.probe_interval
    unhealthy_threshold = var.probe_unhealthy_threshold
  }

  backend_address_pool {
    name  = "${var.app_short_name}-beap"
    fqdns = var.backend_pool_fqdns
  }

  backend_http_settings {
    name                  = "${var.app_short_name}-http"
    cookie_based_affinity = var.cookie_based_affinity
    port                  = var.backend_http_port
    protocol              = var.backend_http_protocol
    request_timeout       = var.backend_request_timeout
  }

  backend_http_settings {
    name                  = "${var.app_short_name}-https"
    cookie_based_affinity = var.cookie_based_affinity
    port                  = var.backend_https_port
    protocol              = var.backend_https_protocol
    probe_name            = "http_${var.app_short_name}"
    request_timeout       = var.backend_request_timeout

    authentication_certificate {
      name = var.backend_auth_cert_name
    }
  }

  ssl_policy {
    policy_type          = var.ssl_policy_type
    policy_name          = var.ssl_policy_name
    min_protocol_version = var.min_protocol_version
    cipher_suites        = var.cipher_suites
  }

  ssl_certificate {
    name     = var.ssl_cert_name
    data     = filebase64(var.ssl_cert_file)
    password = var.ssl_cert_pwd
  }

  http_listener {
    name                           = "${var.app_short_name}-httplstnr"
    frontend_ip_configuration_name = "${var.app_short_name}-feip"
    frontend_port_name             = "${var.app_short_name}-http-feport"
    protocol                       = var.http_listener_protocol
  }

  http_listener {
    name                           = "${var.app_short_name}-httpslstnr"
    frontend_ip_configuration_name = "${var.app_short_name}-feip"
    frontend_port_name             = "${var.app_short_name}-https-feport"
    protocol                       = var.https_listener_protocol
    ssl_certificate_name           = var.ssl_cert_name
  }

  redirect_configuration {
    name                 = "${var.app_short_name}-rdrcfg"
    redirect_type        = var.redirect_type
    target_listener_name = "${var.app_short_name}-httpslstnr"
    include_path         = var.redirect_include_path
    include_query_string = var.redirect_include_query_string
  }

  request_routing_rule {
    name                        = "${var.app_short_name}-httprqrt"
    rule_type                   = var.request_http_routing_rule_type
    http_listener_name          = "${var.app_short_name}-httplstnr"
    redirect_configuration_name = "${var.app_short_name}-rdrcfg"
  }

  request_routing_rule {
    name                       = "${var.app_short_name}-httpsrqrt"
    rule_type                  = var.request_https_routing_rule_type
    http_listener_name         = "${var.app_short_name}-httpslstnr"
    backend_address_pool_name  = "${var.app_short_name}-beap"
    backend_http_settings_name = "${var.app_short_name}-https"
  }
}

