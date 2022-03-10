# The Shell-based Design

This application leverages components to create a dependency injection framework, by creating a top-level wrapper component we call the `Shell`. The shell is in charge of bootstrapping dependencies like our theme framework, and our internationalization tooling, and managing our global event-driven state and asynchrony/IO.

The shell has no-op placeholder values for all of its logical interfaces, meaning you can simply use it without any props if you like, like so:

```tsx
<Shell>
  <AnyGivenComponent />
</Shell>
```

What this means is that the logic of the application is completely split off from the interface that interacts with it. It means that composition can occur on any level, and different dependencies can be injected per environment.

This sort of design allows us to develop in hermetic isolation, creating an effective interface for an unbound number of unknown render targets. We leverage this in a number of ways:

- We can stand up an entire "empty" application in a test, inexpensively, and test against default behavior. Each test is in essence its own render target. Then, we can vary what we put in the test based on how we want that test to work - for example, injecting props which fail or succeed, or hang forever, if we want to test spinners or something like that.
- We can stand up per-page render targets, giving each page its own concept of what to inject in the shell and its own autonomy and self-determination. We use this in limited fashion, but we have leveraged it in the past to create demo pages that don't, for example, require authentication.
- We can stand up individual stories and design those in such a way that they demonstrate different behaviors from one another. In this scenario, each story is a render target of its own.
- Finally, we can reassemble the app in any configuration we like. We use this to assemble entirely distinct pages, but also different build artifacts like the auth artifact.

You can get a gander at the shell in the `src/app` package, which is where the bulk of our actual logical concretions exist.
