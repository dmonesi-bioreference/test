import { assign } from '@xstate/immer';

const Authenticate = 'authenticate' as const;
const CheckIdentity = 'checkIdentity' as const;
const Login = 'login' as const;

declare global {
  interface AppEventMap {
    [Authenticate]: { type: typeof Authenticate };
    [CheckIdentity]: { type: typeof CheckIdentity };
    [Login]: { type: typeof Login };
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
