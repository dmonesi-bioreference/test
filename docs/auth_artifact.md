# Auth0 Deployments

As part of the deployment of the application, we create a small single-page application version of our app, which only contains the registration portion of the system. This single page app is what we refer to as our "auth artifact". It's sent upstream to Auth0 as part of the auth deployment workflow.

There are some things to keep in mind with this deployment.

## It's static.

The rest of the app is also, to a degree, static. However, after page load, our Next.js artifacts inject the Next.js runtime into a page, which takes over the management of some components (like links and images), and auto-loads other pages on hover intent for links. That sort of behavior doesn't exist in the auth artifact.

## It has to be a certain size.

It can't go over 1,000kb, or auth deployment will fail. That isn't a mistake: it isn't 1024kb/1mb. It is exactly 1,000kb. For the most part, we have measures in place to prevent code from accidentally bloating the auth artifact bundle. They aren't foolproof. It's worth being careful about.

## It uses a different build tool.

To get quick build times and modern tree shaking, we use esbuild. That means it's a slightly different build process, though this is mostly invisible to the development process, it's worth reminding yourself of.

## Some commands.

You can explore the auth artifact with some commands, described also in the root README of the project. They are:

```shell
yarn auth:deploy
```

This is the deployment script. It pulls the latest Auth0 deployment, edits it, and redeploys it. This should be a mostly idempotent operation, but it is destructive in the sense that if you get the secrets for Auth0, you can accidentally deploy from a volatile branch and break things. Probably best not to do this.

```shell
yarn auth:build-and-analyze
```

This one lets you see the output of the build. It'll also leave those build artifacts in `dist/` if you want to take a look first-hand. Do a bit of investigation with this command. It's verbose, so you may want to follow it up with a `| head` and just pay attention to the first few lines.

```shell
yarn auth:bundle-check
```

This script passes or flunks you based on the output size of the built artifacts. It's a much shorter, less informative counterpart to `build-and-analyze`. If you just want to know if you did something wrong and don't need any more information than that, use `bundle-check`.
