# Create Network Interface
resource "azurerm_network_interface" "main" {
  name                = "${var.vm_name}-nic"
  location            = var.location
  resource_group_name = var.rg_name

  ip_configuration {
    name                          = var.ip_configuration_name
    subnet_id                     = var.subnet_id
    private_ip_address_allocation = var.private_ip_address_allocation
  }
  dns_servers = var.dns_servers
}

# Create Virtual Machine
resource "azurerm_virtual_machine" "main" {
  name                  = var.vm_name
  location              = var.location
  resource_group_name   = var.rg_name
  vm_size               = var.vm_size
  network_interface_ids = [azurerm_network_interface.main.id]


  storage_image_reference {
    id = var.vm_image_reference
  }

  storage_os_disk {
    name          = "${var.vm_name}-osdisk1"
    os_type       = "Windows"
    caching       = "ReadWrite"
    create_option = "FromImage"
  }

  boot_diagnostics {
    enabled     = true
    storage_uri = var.boot_diagnostics_storage_uri
  }

  os_profile {
    computer_name  = var.vm_name
    admin_username = var.admin_username
    admin_password = var.admin_password
  }

  os_profile_windows_config {
    provision_vm_agent = var.provision_vm_agent
    timezone           = var.timezone
  }
}

# Create Managed Data Disk
resource "azurerm_managed_disk" "main" {
  name                 = "${var.vm_name}-datadisk0"
  location             = var.location
  resource_group_name  = var.rg_name
  storage_account_type = var.datadisk_storage_account_type
  create_option        = var.datadisk_create_option
  disk_size_gb         = var.datadisk_size_gb
}

# Attach Data Disk to Virtual Machine
resource "azurerm_virtual_machine_data_disk_attachment" "main" {
  managed_disk_id    = azurerm_managed_disk.main.id
  virtual_machine_id = azurerm_virtual_machine.main.id
  lun                = "0"
  caching            = "ReadWrite"
}