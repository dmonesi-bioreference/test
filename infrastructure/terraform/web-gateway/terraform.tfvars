/*
    Variables initialized for each environment
*/

rg_network_name = {
  development = "RGP-USE2-PROD-Network"
  stage       = "RGP-USE2-PROD-Network"
  production  = "RGP-USE2-PROD-Network"
}

rg_name = {
  development = "RGP-USE2-PRD-Pandas"
  stage       = "RGP-USE2-PRD-Pandas"
  production  = "RGP-USE2-PRD-Pandas"
}

vnet_name = {
  development = "VNT-USE2-BRLI-01"
  stage       = "VNT-USE2-BRLI-01"
  production  = "VNT-USE2-BRLI-01"
}

log_analytics_workspace_id = {
  development = "/subscriptions/7b6eb8ae-f42b-4435-953c-1424bfc51325/resourcegroups/rgp-use2-prd-pandas/providers/microsoft.operationalinsights/workspaces/logs-pandas"
  stage       = "/subscriptions/7b6eb8ae-f42b-4435-953c-1424bfc51325/resourcegroups/rgp-use2-prd-pandas/providers/microsoft.operationalinsights/workspaces/logs-pandas"
  production  = "/subscriptions/7b6eb8ae-f42b-4435-953c-1424bfc51325/resourcegroups/rgp-use2-prd-pandas/providers/microsoft.operationalinsights/workspaces/logs-pandas"
}

agw_subnet_name = {
  development = "SBT-USE2-DEV-PANDAS-AGW"
  stage       = "SBT-USE2-STG-PANDAS-AGW"
  production  = "SBT-USE2-PRD-PANDAS-AGW"
}

agw_subnet_cidr = {
  development = ["10.61.42.0/24"]
  stage       = ["10.61.43.0/24"]
  production  = ["10.61.44.0/24"]
}

agw_subnet_nsg_name = {
  development = "nsg-SBT-USE2-DEV-PANDAS-AGW"
  stage       = "nsg-SBT-USE2-STG-PANDAS-AGW"
  production  = "nsg-SBT-USE2-PRD-PANDAS-AGW"
}

agw_sku_config = {
  development = {
    name     = "Standard_Medium"
    tier     = "Standard"
    capacity = "1"
  }
  stage = {
    name     = "Standard_Medium"
    tier     = "Standard"
    capacity = "1"
  }
  production = {
    name     = "Standard_Medium"
    tier     = "Standard"
    capacity = "2"
  }
}

agw_probe_hostname = {
  development = "patient-dev.genedx.com"
  stage       = "patient-stage.genedx.com"
  production  = "patient.genedx.com"
}

agw_backend_pool_fqdns = {
  development = ["patient-dev.internalase.genedx.com"]
  stage       = ["patient-stage.internalase.genedx.com"]
  production  = ["patient.internalase.genedx.com"]
}

agw_backend_cert_file = {
  development = "../certs/wildcard_internalase_genedx_com.cer"
  stage       = "../certs/wildcard_internalase_genedx_com.cer"
  production  = "../certs/wildcard_internalase_genedx_com.cer"
}

agw_backend_cert_name = {
  development = "wildcard-internalase-gdx"
  stage       = "wildcard-internalase-gdx"
  production  = "wildcard-internalase-gdx"
}

app_ssl_cert_file = {
  development = "../certs/dev/patient-dev_genedx_com.pfx"
  stage       = "../certs/stage/patient-stage_genedx_com.pfx"
  production  = "../certs/prod/patient_genedx_com.pfx"
}

app_ssl_cert_name = {
  development = "patient-dev-cert"
  stage       = "patient-stage-cert"
  production  = "patient-cert"
}

app_name = {
  development = "pandas"
  stage       = "pandas"
  production  = "pandas"
}

app_short_name = {
  development = "pandas-dev"
  stage       = "pandas-stage"
  production  = "pandas"
}

env_prefix = {
  development = "dev"
  stage       = "stg"
  production  = "prd"
}
