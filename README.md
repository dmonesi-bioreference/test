# Project Pandas Prototype

A custom component library for a React-based prototype application.

## Installation

> `npm install`

## Starting the Storybook Documentation Site

> `npm run storybook`

By default, Storybook will run at `http://localhost:9009`.

## Creating a New Component

To create all files associated with a new component, run:

> `npm run plop`

You'll be prompted for a component name. All necessary files
will then be generated automatically.

## Global Styles

When importing components into your app, include the GlobalStyle component
in your root App component to ensure accurate styling:

```
import GlobalStyle from '../src/styles/global';

<App>
  <GlobalStyle />
  {children}
</App>
```

## Colophon & Attribution

- Documentation is powered by [Storybook](https://storybook.js.org).
- Components are written in [TypeScript](https://www.typescriptlang.org).
- Components are styled using [styled-components](https://www.styled-components.com).
- Component architecture inspired by [Shoelace](https://shoelace.style/).
- Icons are courtesy of [Heroicons](https://heroicons.com/).
- Color pallettes created by [Tailwind](https://tailwindcss.com/docs/customizing-colors).
