import { assign } from '@xstate/immer';

declare global {
  interface AppEventMap {
    authenticate: { type: 'authenticate' };
    checkIdentity: { type: 'checkIdentity' };
    login: { type: 'login' };
  }
}

export const actions = {
  reduceIdentityAttempts: assign((context: AppContext) => {
    context.auth.identityCheckAttempts--;
  }),
};

export const guards = {
  canCheckIdentity: (context: AppContext) =>
    context.auth.identityCheckAttempts > 0,
};

export const context = {
  identityCheckAttempts: 5,
};

export const machine = {
  initial: 'checkingSession',
  states: {
    authenticating: {
      invoke: {
        src: 'handleAuth',
        onDone: 'knownCaregiver',
        onError: 'requestingLogin',
      },
    },
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
    requestingLogin: { on: { authenticate: 'authenticating' } },
    identityUnverified: { on: { login: 'requestingLogin' } },
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
