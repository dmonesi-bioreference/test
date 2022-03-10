# Why Use Xstate?

For the purpose of managing logic and global state in the patient portal, because we anticipated a non-trivial amount of workflow iteration and evolution, we decided to leverage Xstate as our system state core.

## Kinds of State

One problem the majority of "state management" tools ignore entirely is that state is not simply data stored, or events dispatched. Instead, it is a broad term that covers a number of concerns: data caching, logical state, asynchronous state, and so on. A core data management tool such as Redux or Rx.js can often give you a good position on one of those states, but generally speaking they are primitives in the sense that they don't provide answers for all kinds of state.

This doesn't mean the tools themselves are bad, but it does mean that they are only a part of the puzzle, and what that means in practice is that the development team using those tools has to invent approaches to manage the remaining kinds of state. That's a point of major expense in terms of development time, and this expense is one which grows with time, as ad-hoc systems collide with other ad-hoc systems.

## What XState Brings

XState, on the other hand, embraces the problem space, and uses an old, production-ready, industry-standard specification to do it - statecharts. Statecharts have been in broad use in all kinds of applications since the first paper discussing them was published in 1987. XState is not inventing the approach - it's merely implementing it.

Leveraging state charts and data caches, in a way that firmly marries them to Javascript code, XState gives us a tool kit which lets us formally define and manage our application logic alongside our app data, and do so in a predictable way. It lets us look at the logical layer of our application and reason about it with visualizers, and it lets us move nodes of logic around as we learn new things about our problem domain.

## Integration Points

Most of the XState harness is abstracted within the application shell, which provides a set of hooks that leverage the chart events, or provide access to the logical state and the data cached within the app. Within the shell package, there is a nested `state` package, and that's where the majority of the application logic lives.

Theoretically, you could extract the entire logical layer of the app and put it in a completely different application by simply copying the `shell` package to a new project.

The chief way we speak with our XState setup is through the concept of `services`. This can be an Observer, a function, a Promise, or another state chart. XState has native knowledge of all of these. For example, it accepts a `requests` prop, which is presently a series of promises populated by our API Client. However, if we wanted to inject other state charts, or Rx.js observers, or anything like that into those slots, we could do it without any changes to the underlying system.

## The Tradeoff

The downside of XState is that it demands consideration of the processes which you model. You can't "work your way into" a feature in the same way. You have to think about things up-front a little more, and you have some boilerplate work that has to occur before you can implement a feature.

In practice, this often feels, at least at first, like a lot of work - however, it's been our experience that, as time progresses, it gradually becomes apparent that the work would need to be done anyway. The complexity in a given domain is always _there_, whether or not you consider it up-front. You cannot install a tool and remove domain complexity, or else software at large would be much simpler.

XState simply works best if you can at least make a naive mental model of the problem domain before you begin writing code.
