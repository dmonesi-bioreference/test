const NextStep = 'nextStep' as const;

declare global {
  interface AppEventMap {
    [NextStep]: { type: typeof NextStep };
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
