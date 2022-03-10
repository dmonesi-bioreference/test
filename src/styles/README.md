# Styles

The styles package is where we localize a lot, if not all, of our style configurations and decisions. While `src/components` are our generic interface building blocks, `src/styles` are the visual scaffolds we construct the interface with. Here are some regions of note:

- `Theme.tsx` provides a series of color themes to a consuming component, allowing that component to leverage small slices of the styles setup (which you can find in `themes.ts`).
- `tokens.ts` defines the actual visual styling tokens which almost everything is built with; colors, dimensions, whitespace, and so on.
- `animations/` defines a series of animation config primitives which we use to power components built with Framer Motion.
- `hooks.ts` creates a public consumable interface which interacts with `Theme`, in case you want to build new components that leverage the color themes.
