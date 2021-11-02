export const forms = {
  type: 'parallel' as const,
  states: {
    identity: {
      id: 'identity',
      type: 'parallel' as const,
      states: {
        activity: {
          initial: 'idle' as const,
          states: {
            idle: {
              on: {
                identityChange: {
                  target: 'active',
                  actions: 'updateIdentity',
                },
              },
            },
            active: {
              after: { 300: '#identity.validation.validating' },
              on: {
                identityChange: {
                  target: 'active',
                  actions: 'updateIdentity',
                },
              },
            },
          },
        },
        validation: {
          initial: 'pristine' as const,
          states: {
            pristine: {},
            valid: {},
            invalid: {},
            validating: {
              invoke: {
                src: 'validateIdentity',
                onDone: { target: 'valid', actions: 'clearIdentityErrors' },
                onError: { target: 'invalid', actions: 'assignIdentityErrors' },
              },
            },
          },
        },
      },
    },
  },
};
