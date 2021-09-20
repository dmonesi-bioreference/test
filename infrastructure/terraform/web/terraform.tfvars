/*
    Variables initialized for each environment
*/

rg_network_name =   {
    development = "RGP-USE2-Sbx-Network"
    qa          = "RGP-USE2-PROD-Network"
    production  = ""
}

rg_name         =   {
    development = "RGP-USE2-ASE-SANDBOX"
    qa          = "RGP-USE2-Dev-Pandas"
    production  = ""
}

vnet_name       =   {
    development = "vnt-use2-sandbox01"
    qa          = "VNT-USE2-BRLI-01"
    production  = ""
}

vnet_cidr       =   {
    development = "10.62.0.0/16"
    qa          = "10.61.0.0/16"
    production  = ""
}

agw_subnet_name =   {
    development = "SBT-USE2-DEV-PANDAS-AGW"
    qa          = "SBT-USE2-QA-PANDAS-AGW"
    production  = ""
}

agw_subnet_cidr =   {
    development = ["10.62.33.0/24"]
    qa          = ["10.62.86.0/24"]
    production  = ""
}

agw_subnet_nsg_name =   {
    development = "nsg-SBT-USE2-DEV-PANDAS-AGW"
    qa          = "nsg-SBT-USE2-QA-PANDAS-AGW"
    production  = ""
}

agw_sku_config      =   {
    development =   {
        name = "Standard_Medium"
        tier = "Standard"
        capacity = "2"
    }
    qa          =   {
        name = "Standard_Medium"
        tier = "Standard"
        capacity = "2"
    }
    production  =   {
        name = ""
        tier = ""
        capacity = ""
    }
}

agw_probe_hostname =    {
    development = "patient-dev.genedx.com"
    qa          = "patient-qa.genedx.com"
    production  = ""
}

agw_backend_pool_fqdns =    {
    development = ["pandas-dev.internalase.genedx.com"]
    qa          = ["pandas-qa.internalase.genedx.com"]
    production  = ["pandas.internalase.genedx.com"]
}

agw_backend_cert_file  = {
    development = "./certs/wildcard_internalase_genedx_com.cer"
    qa          = "./certs/wildcard_internalase_genedx_com.cer"
    production  = "./certs/wildcard_internalase_genedx_com.cer"
}

agw_backend_cert_name  = {
    development = "wildcard-internalase-gdx"
    qa          = "wildcard-internalase-gdx"
    production  = ""
}

app_ssl_cert_file=  {
    development = "./certs/patient-dev_genedx_com.pfx"
    qa          = "./certs/patient-qa_genedx_com.pfx"
    production  = "./certs/patient_genedx_com.pfx"
}

app_ssl_cert_name=  {
    development = "patient-dev-cert"
    qa          = "patient-qa-cert"
    production  = "patient-cert"
}

app_name        =   {
    development = "pandas-dev"
    qa          = "pandas-qa"
    production  = "pandas"
}

app_host_name   =   {
    development = "patient-dev.genedx.com"
    qa          = "patient-qa.genedx.com"
    production  = "patient.genedx.com"
}

iase_host_name   =   {
    development = "pandas-dev.internalase.genedx.com"
    qa          = "pandas-qa.internalase.genedx.com"
    production  = "pandas.internalase.genedx.com"
}

app_sku_config  =   {
    development =   {
        tier = "Isolated"
        size = "I1"
        capacity = "1"
    }
    qa          =   {
        tier = "Isolated"
        size = "I1"
        capacity = "1"
    }
    production  =   {
        tier = ""
        size = ""
        capacity = ""
    }
}

app_kind = {
    development = "Linux"
    qa          = "Linux"
    production  = "Linux"
}

env_prefix      =   {
    development = "dev"
    qa          = "qa"
    production  = "prod"
}

app_short_name  =   {
    development = "pandas-dev"
    qa          = "pandas-qa"
    production  = "pandas"
}

ase_subnet_name = {
    development = "SBT-USE2-ASE-PANDAS-DEV"
    qa          = "SBT-USE2-ASE-PANDAS-QA"
    production  = ""
}

ase_subnet_cidr =  {
    development = "10.62.32.0/24"
    qa          = "10.61.85.0/24"
    production  = ""
}

ase_subnet_nsg_name =  {
    development = "nsg-SBT-USE2-ASE-PANDAS-DEV"
    qa          = "nsg-SBT-USE2-ASE-PANDAS-QA"
    production  = ""
}

ase_name =  {
    development = "genedx-sbx-p01"
    qa          = "genedx-p01"
    production  = ""
}

iase_domain_name = {
    development = "internalase.genedx.com"
    qa          = "internalase.genedx.com"
    production  = "internalase.genedx.com"
}

