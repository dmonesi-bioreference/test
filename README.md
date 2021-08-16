# Project Pandas Prototype

This project houses the prototyping kit for GeneDX components, a React-based
development environment for creating and demonstrating UI elements as they
are discovered.

## Installation

We use yarn for prototype work.

> `yarn`

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

## Colophon & Attribution

- Documentation is powered by [Storybook](https://storybook.js.org).
- Components are written in [TypeScript](https://www.typescriptlang.org).
- Components are styled using [styled-components](https://www.styled-components.com).
- Component architecture inspired by [Shoelace](https://shoelace.style/).
- Icons are courtesy of [Heroicons](https://heroicons.com/).
- Color pallettes created by [Tailwind](https://tailwindcss.com/docs/customizing-colors).

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

**Explanation:** At some point, husky changed how they managed git hooks. Since we've
used husky at a few different version levels, this can break some of us. The yarn command
above runs the husky install script manually, which should reinstall the package and run
the post-install process of changing our project git hooks.
