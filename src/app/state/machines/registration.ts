export const registration = {
  initial: 'one' as const,
  states: {
    one: { on: { nextStep: 'two' } },
    two: { on: { nextStep: 'three' } },
    three: { on: { nextStep: 'four' } },
    four: {},
  },
};
