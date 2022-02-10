# Project Pandas Prototype

This project houses the prototyping kit for GeneDX components, a React-based
development environment for creating and demonstrating UI elements as they
are discovered.

## Installation

We use yarn for prototype work.

> `yarn`

## Testing

This project uses two kinds of test environments: a unit/integration test environment, where we make sure that components, services, and other things in `src/` are sound, and an end to end test environment, which gives us full testing of our entire app.

In order to start the server and run E2E tests:

```shell
yarn test:e2e:app
```

This will start the server, and boot up cypress itself, which will monitor tests as you make changes.

For the unit tests, in a separate tab, run:

```shell
yarn test
```

This will kick off Jest, which is a slimmer test suite that doesn't leverage the entire app and all of its backing services.

To run the cypress test suite you need a few accounts which are set up in specific states, to do this, provide the following environment variables

| Variable name                         | Purpose                       | Default |
| ------------------------------------- | ----------------------------- | ------- |
| CYPRESS_AUTH0_ROOT                    | The auth0 deployment root url |         |
| CYPRESS_AUTH0_GUID_TEST_ORDERED       | The guid of the account       |         |
| CYPRESS_AUTH0_USERNAME_TEST_ORDERED   | The username of the account   |         |
| CYPRESS_AUTH0_PASSWORD_TEST_ORDERED   | The password of the account   |         |
| CYPRESS_AUTH0_GUID_TEST_IN_LAB        | The guid of the account       |         |
| CYPRESS_AUTH0_USERNAME_TEST_IN_LAB    | The username of the account   |         |
| CYPRESS_AUTH0_PASSWORD_TEST_IN_LAB    | The password of the account   |         |
| CYPRESS_AUTH0_GUID_RESULTS_READY      | The guid of the account       |         |
| CYPRESS_AUTH0_USERNAME_RESULTS_READY  | The username of the account   |         |
| CYPRESS_AUTH0_PASSWORD_RESULTS_READY  | The password of the account   |         |
| CYPRESS_AUTH0_GUID_RESULTS_VIEWED     | The guid of the account       |         |
| CYPRESS_AUTH0_USERNAME_RESULTS_VIEWED | The username of the account   |         |
| CYPRESS_AUTH0_PASSWORD_RESULTS_VIEWED | The password of the account   |         |

You can provide these in `.env.local` when you run the app.

## Starting the Storybook Documentation Site

Much of the work done developing components is done through a Storybook environment,
in order to facilitate visual documentation, and encourage useable design. You can
run storybook with this command:

> `yarn storybook`

By default, Storybook will run at `http://localhost:9009`. It should automatically open
your browser to the given page.

## Creating a New Component

To create all files associated with a new component, run:

> `yarn plop`

You'll be prompted for a component name. All necessary files will then be
generated automatically.

## Global Styles

When importing components into your app, include the GlobalStyle component
in your root App component to ensure accurate styling:

```tsx
import GlobalStyle from '../src/styles/global';

<App>
  <GlobalStyle />
  {children}
</App>;
```

## Building the container image

In order to build the Dockerfile bundled with this project:

```sh
docker build . -t pandas:latest
```

This will create a production-ready build of the interior Next app and expose it within the docker container.
Afterwards, you can run the image with this command:

```sh
docker run -dp 80:3000 --env-file=.env pandas:latest
```

Once that loads, visit `http://localhost` to access the app.

### Troubleshooting: Build complains about a stale lockfile

This can happen sometimes if yarn's detected some dependencies which are out of sync.
You can fix it locally by running yarn and then re-attempting the above commands.

## Authentication Artifacts & Auth Deployment

This repo manages several artifacts, one of which is a smaller single-page version of the app meant for deployment into an Auth0 tenant. For Auth0 integration, we require a series of environment variables for public, private, and deploy systems to use.

| Variable name          | Purpose                          | Default                            |
| ---------------------- | -------------------------------- | ---------------------------------- |
| AUTH0_SECRET           | Encryption secret for cookies    |                                    |
| AUTH0_BASE_URL         | The current app URL              | http://localhost:3000              |
| AUTH0_ISSUER_BASE_URL  | The base URL of the tenant       | https://bioreference-dev.auth0.com |
| AUTH0_CLIENT_ID        | Our Auth0 tenant ID              |                                    |
| AUTH0_CLIENT_SECRET    | Secret for the client ID         |                                    |
| IDENTITY_CLIENT_ID     | Our Auth0 service client ID      |                                    |
| IDENTITY_CLIENT_SECRET | Secret for the service client ID |                                    |
| NEXT_PUBLIC_GTM_ID     | Google Tag Manager ID            |                                    |

You can provide these in `.env.local` when you run the app.

### Deployment

We deploy the Auth artifact with manual commands presently. Manual deployment uses the following environment variables:

| Variable name       | Public | Purpose                              | Default                    |
| ------------------- | ------ | ------------------------------------ | -------------------------- |
| AUTH0_DOMAIN        | Public | The current app URL                  | bioreference-dev.auth0.com |
| AUTH0_CLIENT_ID     | Public | Our Auth0 tenant ID                  |                            |
| AUTH0_CLIENT_SECRET | Public | Secret for the client ID             |                            |
| AUTH0_REALM         | Public | The DB realm / connection            | genedx-accounts            |
| NEXT_PUBLIC_GTM_ID  | Public | The GTM ID for ... GTM               |                            |
| PIMCORE_DOMAIN      | Public | Root URL for Pimcore provided assets |                            |

You can provide an `.env.auth` file with these values to use the commands locally.

### Deployment Scripts for Auth0

As for the new commands in yarn, we've now got two more, directly
related to the deployment and building of our single page artifact for
AUth0.

#### Deploying

Presently, we deploy the ENTIRE Auth0 tenant on every deployment, so the
actual pushing to auth0 is not described in a workflow at the time of
writing. It should be turned on as a separate workflow change PR, and be
done manually until the ramifications are more clear.

The `auth:deploy` command pulls the latest tenant state, modifies it, then
redeploys it once the login/registration pages are ready. This is
incredibly space-restricted, our pages cannot grow larger than 1000kb.
That's right - not even 1mb.

#### Build and Analyze

That leads us to our next new command, build-and-analyze. This is a way
to keep an eye on our build size, it'll report the total size of a build
artifact as we go. Just check this out every once in a while to make
sure you haven't clobbered the page size. Don't worry, if you clobber it
and don't check this command, Auth0 will gripe at you all on its own.
Then you'll wind up here trying to fix things. Oh, yes.

FYI: If you haven't deployed or built for auth0 before, you'll get an
expected `no such file or directory` error, but the provided bundle size
calculations will still be correct.

`yarn auth:build-and-analyze | head`

## Colophon & Attribution

- Documentation is powered by [Storybook](https://storybook.js.org).
- Components are written in [TypeScript](https://www.typescriptlang.org).
- Components are styled using [styled-components](https://www.styled-components.com).
- Component architecture inspired by [Shoelace](https://shoelace.style/).
- Icons are courtesy of [Heroicons](https://heroicons.com/).

## Troubleshooting

### Husky problems?

If you see the following while attempting to commit changes:

```sh
error Command husky-run not found.
```

Try running this command:

```sh
yarn husky install
```

If you need to skip husky for any reason, like committing a WIP,
you can use the flag `--no-verify`

```sh
git commit -m "wip" --no-verify
```

**Explanation:** At some point, husky changed how they managed git hooks. Since we've
used husky at a few different version levels, this can break some of us. The yarn command
above runs the husky install script manually, which should reinstall the package and run
the post-install process of changing our project git hooks.
