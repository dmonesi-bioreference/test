# Deployment Overview

Deployment of this application is done mainly through Github workflows, which you can find in the top-level `.github` folder. These workflows are outlined in more depth in that folder, as well.

Our approach to deployment is branch-based. In order to deploy a given environment, you simply push code to the appropriate branch, and the Github workflows will take it from there.

The branches and their deployment targets are:

| Branch | Deployment environment target |
| ------ | ----------------------------- |
| dev    | Development                   |
| stage  | Staging                       |
| main   | Production                    |

## Continuous Deployment

We deploy continuously, creating a volatile but relatively up-to-date development environment. The way this works is woven into our pull request process by default. Pull requests target the `dev` branch, meaning every successful build following a PR merge results in a development deployment.

## Deployment Artifacts

We deploy two artifacts: a Docker container which holds the entirety of our built app, and an Auth 0 specific SPA, contained in a single html file. The Docker container is sent to Azure's container registry, and an App Service then loads it and presents it to the public. The Auth0 page is sent to their system via their Deployment CLI, and is hosted on Auth0 servers.

See the root `Dockerfile` and the `infrastructure` folder for more information on our deployment topology and artifacts.

## Deploying Staging

To get staging deployed, simply merge `dev` into `stage`, and push to `stage`. The exact same processes that give us continuous dev deployment will take over and do the same with staging.

The staging deployment also performs a Netsparker security check on every deploy. This is an operation we do on non-development environments to add additional checks as things near production.

## Deploying Production

Like staging, production is deployed with a merge. This time, though, you'll merge `stage` into `main`, and push that to `main`. Again, the same processes will take over but aim for production. Also again, we run a Netsparker check shortly after deployment.

## Environment Variables

Each deployment is more or less the same (with the exception of the Netsparker check), but leverages different environment variables. Those variables are either written directly into the workflow when they aren't sensitive, or if they are, they are stored in Github secrets.

If they are stored in Github, the environment variables follow an environment naming convention, which is to name the dev environment plainly, and then for non-dev environments, suffix the environment at the end like so: `_$ENV`. For example, the `IDENTITY_CLIENT_ID` environment variable:

| Variable Name            | Environment |
| ------------------------ | ----------- |
| IDENTITY_CLIENT_ID       | Development |
| IDENTITY_CLIENT_ID_STAGE | Staging     |
| IDENTITY_CLIENT_ID_PROD  | Production  |
