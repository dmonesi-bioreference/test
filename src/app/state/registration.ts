declare global {
  interface AppEventMap {
    nextStep: { type: 'nextStep' };
  }
}

export const machine = {
  initial: 'one',
  states: {
    one: { on: { nextStep: 'two' } },
    two: { on: { nextStep: 'three' } },
    three: { on: { nextStep: 'four' } },
    four: {},
  },
};

export {};
