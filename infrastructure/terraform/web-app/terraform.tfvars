/*
    Variables initialized for each environment
*/

rg_network_name = "RGP-USE2-PROD-Network"

rg_name = "RGP-USE2-PRD-Pandas"

vnet_name = "VNT-USE2-BRLI-01"

vnet_cidr = "10.61.0.0/16"

app_name = "pandas"

app_host_name_dev = "patient-dev.genedx.com"
app_host_name_stage = "patient-stage.genedx.com"
app_host_name_prod = "patient.genedx.com"

iase_host_name_dev = "patient-dev.internalase.genedx.com"
iase_host_name_stage = "patient-stage.internalase.genedx.com"
iase_host_name_prod = "patient.internalase.genedx.com"

app_sku_config = {
  tier     = "Isolated"
  size     = "I1"
  capacity = "1"
}

app_kind = "Linux"

app_short_name_dev = "patient-dev"
app_short_name_stage = "patient-stage"
app_short_name_prod = "patient"

ase_subnet_name = "SBT-USE2-ASE-PANDAS-PRD"

ase_subnet_cidr = "10.61.45.0/24"

ase_subnet_nsg_name = "nsg-SBT-USE2-ASE-PANDAS-PRD"

ase_name = "genedx-p01"

iase_domain_name = "internalase.genedx.com"

acr_name = "genedxacr"
container_repository = "genedxacr.azurecr.io/pandas"
container_tag_prod = "stage-a58b0d2f"
container_tag_stage = "stage-a58b0d2f"
container_tag_dev = "dev-a58b0d2f"

log_analytics_workspace_name = "logs-pandas"
  