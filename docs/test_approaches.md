# Our Test Approach

We have three major kinds of test which we employ: E2E tests, interface tests, and unit tests. In most cases, we follow the Testing Library ethos of testing things by asserting interactions with the software, rather than how the software is implemented. This means that the central virtues of our tests are confidence in our code, and characterization of our features. We try to make sure that we don't need to change the tests too often, and we try to make sure that we can change how we build our code without breaking anything.

## E2E

Our E2E suite works through a tool called Cypress, but we leverage Testing Library in order to interact with it. Cypress is an in-depth, but heavyweight tool, and we tend to characterize things at the outermost layer only as a result. These tests can take a long time, but they are the most apparent canary to instances when something has slipped past other tests. Generally speaking, whenever a regression occurs, fixing it through an E2E test will provide the most solid guarantee that the regression will not reoccur.

Our E2E suite is located in the `cypress` directory, and can be triggered by running `yarn test:e2e`.

## Interface Tests

The sheer bulk of our test suite is written as tests of components. These pass through several black box systems: JSDOM, React itself, and our state implementation. As such, they are de-facto integration tests, and focus on proving or disproving things only through the rendering of components.

In many cases, this limiting factor can constrain the freedom of tests. In those cases, we employ things we call `Diagnostic` components. Diagnostic components exist only in the test which uses them, and exist purely to augment that test and its ability to interact with components or application state.

Our interface tests are located throughout the `src/` directory, and have the `spec.tsx` suffix. You can run them by running Jest, with the `yarn test` command.

## Unit Tests

These are the rarest tests in the codebase, because most of our application exists in the component space. However, there are some unit tests which test pure logic. Those typically coexist with our interface tests, near the system under test, with a slight difference in the file extension: `spec.ts`; they are also run with the `yarn test` command.
