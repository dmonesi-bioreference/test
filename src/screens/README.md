# Screens

In order to power Next.js, we use the `pages/` directory. Next.js crawls that directory, using what it sees there as routes, and creating a route for each page. Practically speaking, this means we can't put tests in there - if we add a `home.spec.tsx` page, Next.js thinks we're asking it to build a route for that file, and it breaks the build.

So, in order to get a test harness around individual pages, we use the `src/screens` directory. That means that, largely, there is a 1:1 mapping between the two directories purely for test purposes, and most "top level" tests exist in here.

That also means that the "happy path" to getting a page made is to create a screen for it in here, test that screen works and does what you expect, and then place that screen in a file in `pages/`, and then you've got a new route.
