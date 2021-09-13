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
    development = "10.62.33.0/24"
    qa          = "10.62.86.0/24"
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
    development = "pandas-qa.genedx.com"
    qa          = "pandas-qa.genedx.com"
    production  = ""
}

# this should come from ASE
agw_backend_pool_ip =    {
    development = ["10.62.32.11"]
    qa          = ["10.61.85.0"]
    production  = ["10.61.85.0"]
}

agw_ase_ilb_cert_file  = {
    development = "./certs/ase-ilb.cer"
    qa          = "./certs/ase-ilb.cer"
    production  = ""
}

agw_ase_ilb_cert_name  = {
    development = "ase-ilb-cert"
    qa          = "ase-ilb-cert"
    production  = ""
}

app_ssl_cert_file=  {
    development = "./certs/pandas-dev_genedx_com.pfx"
    qa          = "./certs/pandas-qa_genedx_com.pfx"
    production  = ""
}

app_ssl_cert_name=  {
    development = "pandas-dev-cert"
    qa          = "pandas-qa-cert"
    production  = ""
}

app_ssl_cert_pwd=   {
    development = ""
    qa          = ""
    production  = ""
}

app_name        =   {
    development = "pandas-dev"
    qa          = "pandas-qa"
    production  = ""
}

app_host_name   =   {
    development = "pandas-dev.genedx.com"
    qa          = "pandas-qa.genedx.com"
    production  = ""
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

env_prefix      =   {
    development = "dev"
    qa          = "qa"
    production  = "prod"
}

app_short_name  =   {
    development = "pandas-dev"
    qa          = "pandas-qa"
    production  = ""
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