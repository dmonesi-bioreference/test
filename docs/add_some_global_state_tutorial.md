# Add Some Global State

Let's say you want to get a little bit of data into the app shell. You want to store the latest notification for the purposes of populating a notification. How exactly would you go about doing that with the app shell?

## Add your state to app/state

In `src/app/state`, you'll find the index of our logical setup. We'll be putting our new file, `notifications.ts`, here. Let's add it, and fill in some basic state. We'll be using XState's actions, context, and machine features - and we'll be using our own local `AppEventMap` interface feature. Finally, we'll tie things together in the Shell, and then we'll be ready to go.

First, create the file:

```shell
touch src/app/state/notifications.ts
```

That'll leave an empty file in the state package, which we're going to export a few XState-ready configuration values out of. Here's how we'll populate it:

```ts
import { assign } from '@xstate/immer';

declare global {
  interface AppEventMap {
    notify: { type: 'notify'; content: string };
  }
}

export const actions = {
  saveNotification = assign(
    (context: AppContext, event: AppEventMap['notify']) => {}
  ),
};

export const context = {
  content: '',
};

export const machine = {
  on: {
    notify: { actions: ['saveNotification'] },
  },
};
```

Here's what we've written:

1. First, we have a global type we're extending. We're leveraging a Typescript feature called "interface merging" here. Interface merging is a behavior Typescript features wherein the type checker notices that the same interface is being declared in multiple spots. It grabs all the discovered instances of the interface, and combines them. We lean on this behavior to let each distinct file declare its own extensions to the global type, and that type is used to generate a type safe harness for the rest of the app. Basically, this connects our local types to the global types.
2. Secondly, we declare an action payload. We name all of our actions and then put them into payloads like this, because then we get the ability to override them later if we like. These actions will provide us with default behavior, in the meantime. We use an "action creator" imported from `@xstate/immer` called `assign`. This lets us do complex things with our global state without ensuring immutability. Immer handles that for us. Right now, we have one method: `saveNotification`, and it doesn't do anything. We'll come back in a bit. You'll notice that we're assigning it some arguments that tell it that it can expect to be handed an `AppContext`, and the `notify` event. We won't use those now, but in just a moment we'll try it out.
3. We create a base context. This will be where we'll store our state.
4. Finally, we set up the machine node itself. All we're doing is creating an event handler: that is, we're telling this node that it wants to listen to `notify` events, such as the one we declared above in `AppEventMap`, and when it hears one, to run the `saveNotification` action.

By itself, this file doesn't do much. Let's connect it to the app state real quick, and then we'll make it work.

## Plugging it in

For our next stop, we visit `src/app/state/machine.ts`, which is where all our code gets tied together. The integration points are kept as plain and obvious as possible (hopefully), so that it's as obvious as we can make things regarding what to do and what you can do from reading the file.

First step, let's import the configuration from the file we've just written:

```ts
import * as notifications from './notifications';
```

We'll glob it all together in a single namespace so that we can hand everything around with that `notifications` name intact.

We add the context to the context:

```ts
export const initialContext = {
  // ...others
  notifications: notifications.context,
};
```

And we add the machine to the machine config:

```ts
const { init, schema } = createAppMachine({
  id: 'app',
  type: 'parallel',
  context: initialContext,
  states: {
    // ...other machines
    notifications: notifications.machine,
  },
});
```

And we add the actions as well:

```ts
export const app = init({
  actions: Object.assign(
    // ...other action payloads
    notifications.actions
  ),
  guards: Object.assign(auth.guards, registration.guards),
  services: Object.assign(forms.services),
});
```

At this point you may notice two other collections of configuration values: `services` and `guards`. Those integrate similarly to actions, but serve slightly different purposes. Each is outlined at length in the XState docs, which we highly recommend you read and reference often. But, for the sake of being helpful, we've got a brief overview here as well.

Services are asynchronous systems that you can plug in to XState charts. They can be anything asynchronous: promises, observers (such as from Rx.js), callback handlers, and even other state charts. Naming them and externalizing them like this allows us to plug in custom values at the outermost layer. We use services heavily for our form handlers (for validation) and for our request handlers (for network IO).

Guards are similar to actions except that they return boolean results - true or false - and in so doing, they give XState control flow primitives, so that you can build charts with branching transition logic. Guards are great, and they're often just systems that ask questions about the context of the running chart.

For now, we don't need any gaurds or services, so we're done integrating our notification config.

## What's left?

Believe it or not, at this point everything works: but we have two last things to do for full integration. The first thing we ought to do is make the `saveNotification` action actually do something. Let's go back to our notifications definition and do that now.

Opening the file and looking at the `saveNotifciation` action creator, we change it from this:

```ts
export const actions = {
  saveNotification = assign(
    (context: AppContext, event: AppEventMap['notify']) => {}
  ),
};
```

To this

```ts
export const actions = {
  saveNotification = assign(
    (context: AppContext, event: AppEventMap['notify']) => {
      context.notifications.content = event.content;
    }
  ),
};
```

Since we've wired everything up, Intellisense will help in many modern editors: it should autocomplete `notifications.content` and `event.content` for you - and guarantee the types as well. That's because our integration with `AppEventMap` and the setup in `machine.ts` has connected all of our types for us, and we're now operating in a type safe context / event ecosystem.

What we've done is say this: "When we get an event, it's going to be a notify event, and we're going to save the string it gives us".

The machine fully works now, and we have only one last task: adding the `notify` event to our shell.

## Adding the Notify Event

The last stop before we're fully integrated is `src/app/components/AppProvider.tsx`. This is the `AppProvider` component, and it's in charge of bootstrapping the app chart and providing it to the entire component ecosystem. It's essentially our dependency injection point, and it's what the `Shell` delegates all dependency injection work to.

Immediately on opening the file, you ought to see a type check error. That's exactly the right behavior, don't be alarmed.

Do you remember the generated types we mentioned earlier? The ones which `AppEventMap` produces? They're fussing at us right now, because we've told `AppProvider` this: we guarantee that every event we've made in our app will be reflected in the payload we build in the `AppProvider`. Only, we've just added a new event, `notify`, and we haven't put it into the `AppProvider` yet. It noticed that it's missing an event, and it's trying to alert us.

This level of type safety is a _crucial protection_ against runtime exceptions. A lot of the state chart types are built around providing this level of guarantee - that it will guide the developer through all the integration points required to get a feature not only going, but to also get that feature built in a dependable, confidence-inspiring way.

To quash the error now, we just need to add the event. We go down to the spot where the error is, and we find an `events` map. Let's add `notify` there.

```tsx
const events = useMemo(() => {
  const appDispatchMap: AppDispatchMap = {
    ...setupDispatchMap(send),
    // ...other manual events
    notify: (payload) =>
      payload?.content
        ? send({ type: 'notify', content: payload.content })
        : null,
  };

  return appDispatchMap;
}, []);
```

And that's it. Our notification feature is fully integrated.

## How do we use it?

So now that it's in the app chart, how do we leverage it? We access that through some app-specific React hooks: `useAppSelector` and `useAppEvents`. Each are located in `src/app/components/Shell`.

_Any app component or screen can safely use these hooks, so long as they're wrapped in a `<Shell />` component._

To get to our notification:

```ts
const notification = useAppSelector(
  (state) => state.context.notifications.content
);
```

That pulls and memoizes the notification content. It's a safe operation to grab state info as much as you want: the underlying selector will subscribe to the state chart and only update consuming components when this value changes.

In order to send a notification, we leverage `useAppEvents`:

```tsx
const { notify } = useAppEvents();

return (
  <button onClick={() => notify({ content: 'Some notification message' })}>
    Send notification
  </button>
);
```

And that'll update the notification value whenever the button is clicked.

## Wrap-up

That's just about it for a lightweight notification system. Using something like this, we've given every single app component the ability to send messages to the user, and we can engineer any number of components wherever we like that can consume and work with the notification data. Each of these components can manage things differently: we could make popups or dialogs, or create headless components that log notifications in GTM, or any number of other bits of behavior.

More or less all of the logic in the app is defined in this way. You can explore components that leverage the state chart by navigating the components in `src/app/components`, most notably the form elements.

As a general recommendation, a tour of the XState docs and ecosystem can give you a lot of the rationale behind the approach we've taken, and examples of how to use it. Most of the boilerplate you write up front for these systems will pay off later - they are easy to re-read and refactor, and easy to move around and dispose of later as well.
