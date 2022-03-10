# Infrastructure

Our infrastructure folder contains the definitions of our Auth and Azure topologies.

## Auth

The auth infrastructure we depend on resides in Auth0, and the `infrastructure/auth` folder defines our interactions with it. There's a handful of scripts, templates, and gitignored folders for deployment artifacts in here. Largely, you should be able to ignore this directory unless you're doing heavy auth deployment work.

## Terraform

Our Azure topology is managed through Terraform, though we do not have automation connected to this folder, it does reflect our latest state. In order to get some level of safety against disaster from running Terraform, the keys to the Azure systems defined herein are by special request only. Ask Security or Technology for Azure or service principal credentials if you need to run these.
