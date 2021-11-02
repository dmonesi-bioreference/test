export const auth = {
  initial: 'checkingSession' as const,
  states: {
    checkingSession: {
      invoke: {
        src: 'handleSession',
        onDone: 'knownCaregiver',
        onError: 'checkingMagicLink',
      },
    },
    knownCaregiver: {},
    verifyingIdentity: {
      on: {
        checkIdentity: [
          { target: 'checkingIdentity', cond: 'canCheckIdentity' },
          { target: 'identityUnverified' },
        ],
      },
    },
    requestingLogin: {},
    identityUnverified: {},
    checkingIdentity: {
      invoke: {
        src: 'handleIdentityCheck',
        // Not the intended done target for this.
        onDone: 'knownCaregiver',
        onError: [
          {
            target: 'verifyingIdentity',
            cond: 'canCheckIdentity',
            actions: 'reduceIdentityAttempts',
          },
          { target: 'identityUnverified' },
        ],
      },
    },
    checkingMagicLink: {
      invoke: {
        src: 'handleMagicLink',
        onDone: 'verifyingIdentity',
        onError: 'requestingLogin',
      },
    },
  },
};
