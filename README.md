# React UI Component Library Starter Kit

This project serves as a starter component library for new React projects. It's built upon [create-react-app](https://github.com/facebook/create-react-app).

## Powered by Storybook & styled-components

This React component library is built with [Storybook](https://storybook.js.org). Components are written with [TypeScript](https://www.typescriptlang.org) and styled using [styled-components](https://www.styled-components.com).

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

## Global Styles

When importing components into your app, include the GlobalStyle component
in your root App component in ensure accurate styling:

```
import { GlobalStyle } from '../src/components/GlobalStyle'

<App>
  <GlobalStyle />
  {children}
</App>
```
