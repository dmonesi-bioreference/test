# React UI Component Library Starter Kit

This project serves as a starter component library for new React projects.

## Powered by Storybook

This React component library is built with [Storybook](https://storybook.js.org).

## Installation

> `yarn install`

## Starting the Library

> `yarn storybook`

By default, Storybook will run at `http://localhost:9009`.

## Creating a New Component

To create all files associated with a new component, run:

> `yarn plop`

You'll be prompted for a component name. All necessary files
will then be generated automatically.

## Deploying a Release

> `yarn deploy`

This command will:

- Compile all JavaScript from ES2015 to ES5.
- Increment the patch version number.
- Upload the release to NPM.
- Tag the release on GitHub.

## Integrating the Library

An example integration app is available in `example/integration-example`.

To use these components in your app, add the package via NPM or Yarn:

> `yarn install @zolk/react-ui-starter-kit`

Then import components as needed:

```
import { Button, Card } from '@zolk/react-ui-starter-kit';
```

It is also highly recommend that you include the GlobalStyle component
in your root App component:

```
import { GlobalStyle } from '@zolk/react-ui-starter-kit';

<App>
  <GlobalStyle />
  {children}
</App>
```
