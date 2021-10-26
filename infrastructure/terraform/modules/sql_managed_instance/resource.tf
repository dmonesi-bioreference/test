resource "azurerm_template_deployment" "main" {
  name                = var.managed_instance_name
  resource_group_name = var.rg_name

  template_body = file(var.arm_template_file)
  parameters = {
    "sqlManagedInstanceAdminLogin" = var.adminlogin   #"dbkeeper",
    "sqlManagedInstancePassword"   = var.adminpwd     #"B2rp;#zU#.$@_R!d"
    "vnetResourceName"             = var.vnet_name    #"VNT-USE2-BRLI-01"
    "vnetResourceGroupName"        = var.vnet_rg_name #"RGP-USE2-PROD-Network"
    "managedInstanceSubnetName"    = var.subnet_name  #"SBT-USE2-PRD-BackEndMI-NWM"
    "sqlManagedInstanceName"       = var.mi_name      #"sminwmprddb"
  }
  deployment_mode = var.deployment_mode #"Incremental"
}