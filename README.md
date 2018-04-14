# React UI Component Library Starter Kit

This project serves as a starter component library for new React projects.

## Powered by Storybook

This React component library is built with [Storybook](https://storybook.js.org).

## Installation

> `yarn install`

## Starting the Library

> `npm run storybook`

By default, Storybook will run at `http://localhost:9009`.

## Creating a New Component

To create all files associated with a new component, run:

> `npm run plop`

You'll be prompted for a component name. All necessary files, including SCSS,
will then be generated automatically.

## Deploying a Release

> `npm run deploy`

This command will:

* Compile all JavaScript from ES2015 to ES5.
* Compile SCSS to CSS.
* Pipe CSS through [Autoprefixer](https://github.com/postcss/autoprefixer).
* Increment the patch version number.
* Upload the release to NPM.

## Integrating the library

An example integration app is available in `example/integration-example`.

To use these components in your app, add the package via NPM or Yarn:

`yarn install @zolk/react-ui-starter-kit`

Then import components as needed:

`import { Button, Card } from '@zolk/react-ui-starter-kit';`

The necessary CSS will automatically be included.
