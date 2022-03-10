# Our Workflows

This folder informs Github about the kinds of Github Actions we run to manage the repository and its processes. There's two major domains of work that these workflows handle.

## Code validation

We validate code at the opening of a pull request in order to get some level of confidence in the code's correctness. That's done with the `check-auth-bundle.yml` and `deploy-preview.yml` workflows.

### check-auth-bundle.yml

Checking the auth bundle is a process of running the tooling around our auth artifact and evaluating its output and analyzing the metadata that output generates. Essentially, we want to make sure things don't get too big for Auth0. [More on that in the auth artifact doc.](../docs/auth_artifact.md)

There are three possible environments which can host deployed auth artifacts, and each has its own set of secrets that it injects into the final build artifact. Because these are unbound in size, we validate each potential environment with the auth bundle workflow. It takes a few seconds and it gives us at least some level of assurance that all environments are comparable.

### deploy-preview.yml

This runs our test suite, linters, and so on. This is a pretty standard check to follow the opening of a pull request. It runs every kind of test we have, and will re-run on every update to a pull request.

**Note:** We run our E2E suite here as well. This can get expensive in situations where lots of pull requests are being opened at once, because the E2E suite takes around 10 minutes or so at times, and Github actions are rated in minutes, with the free plan only granting around 2000 minutes per month.

One potential optimization here would be to decouple E2E tests into a separate workflow, and only running that at PR creation, or on a PR comment such as "!e2e".

## Deployment

Whenever `dev`, `stage`, or `main` get new commits, they initialize deployment workflows. Each environment has two workflows, that are similar in function across environments, give or take a few steps, and with slightly different configuration values. We deploy the auth artifact with the `deploy-$ENV-auth.yml` workflow, and we deploy containers (and optionally security check them) with the `deploy-$ENV-container.yml` workflow.

One major consideration with our environments is that we keep them as close as possible to one another, reducing variance wherever possible. This means that largely, the system we deploy is a black box that simply accepts different environment variables at build and deploy time. The deployment workflows know those environment variables, and they know those build process, and they know which environment they listen to.

### Adding or removing deploy environments.

This has been kept as straightforward as we can imagine keeping it for now. To add a new environment, copy each deploy workflow and aim them at a new branch, and fill them with new variables. If those variables don't presently exist in Github, you can add them and continue our existing convention: a `_$ENV` suffix at the end of the variable name.

For example, there is an `IDENTITY_CLIENT_ID` variable. For stage, we have an `IDENTITY_CLIENT_ID_STAGE` variant. For prod, we have an `IDENTITY_CLIENT_ID_PROD` variant. And so on.
