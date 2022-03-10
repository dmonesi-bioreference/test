# The components package

The components package contains generic, styled React components. The components here do not include any business logic. Components that do capture business logic live in `src/app/components`. A story file lives alongside the component file which captures the rendered state of the component. Components can then be visualised when Storybook starts, allowing for easier and faster development of isolated components.

These are the interface primitives of the application itself. They largely have little to no knowledge of the surrounding logic which employs them, and merely focus on the interactions and visuals of the program. This means they stand apart from the `src/app` systems in a significant way: they are not concretions, and have a lot of reuse potential.

Becasue they are general purpose, a lot of the systems described here lack testing. Instead, they are implementations of the interface which is put to test in the `src/screens` package, and the `src/app` package.
