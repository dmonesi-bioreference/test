import { assign } from '@xstate/immer';
import { WritableDraft } from 'immer/dist/internal';
import { createMachine, InterpreterFrom, MachineConfig } from 'xstate';

import { validateIdentity, isValidationFailurePayload } from 'models';

import { AppEventMap, AppContext, AppEvents, AppSchema } from './types';

export const initialContext: AppContext = {
  language: 'en',
  theme: 'light',
  auth: { identityCheckAttempts: 0 },
  forms: {
    identity: {
      values: { email: '', phone: '', zip: '' },
      errors: [],
    },
  },
};

const updateIdentity = assign(
  (
    context: WritableDraft<AppContext>,
    event: AppEventMap['identityChange']
  ) => {
    context.forms.identity.values[event.field] = event.value;
  }
);

const appConfig: MachineConfig<AppContext, AppSchema, AppEvents> = {
  id: 'application',
  type: 'parallel',
  context: initialContext,
  states: {
    app: {
      type: 'parallel',
      states: {
        auth: {
          initial: 'checkingSession',
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
              on: { checkIdentity: 'checkingIdentity' },
            },
            requestingLogin: {},
            identityUnverified: {},
            checkingIdentity: {
              invoke: {
                src: 'handleIdentityCheck',
                onError: [
                  {
                    target: 'verifyingIdentity',
                    cond: (context) => context.auth.identityCheckAttempts < 5,
                    actions: [
                      assign((context) => {
                        context.auth.identityCheckAttempts++;
                      }),
                    ],
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
        },
        forms: {
          type: 'parallel',
          states: {
            identity: {
              initial: 'valid',
              states: {
                active: {
                  after: { 300: 'validating' },
                  on: {
                    identityChange: {
                      target: 'active',
                      actions: [updateIdentity],
                    },
                  },
                },
                validating: {
                  invoke: {
                    src: (context) =>
                      validateIdentity(context.forms.identity.values),
                    onDone: {
                      target: 'valid',
                      actions: assign((context) => {
                        context.forms.identity.errors = [];
                      }),
                    },
                    onError: {
                      target: 'invalid',
                      actions: assign((context, event) => {
                        if (isValidationFailurePayload(event.data)) {
                          context.forms.identity.errors = event.data;
                        }
                      }),
                    },
                  },
                },
                valid: {
                  on: {
                    identityChange: {
                      target: 'active',
                      actions: [updateIdentity],
                    },
                  },
                },
                invalid: {
                  on: {
                    identityChange: {
                      target: 'active',
                      actions: [updateIdentity],
                    },
                  },
                },
              },
            },
          },
        },
        registration: {
          initial: 'one',
          states: {
            one: { on: { nextStep: 'two' } },
            two: { on: { nextStep: 'three' } },
            three: { on: { nextStep: 'four' } },
            four: {},
          },
        },
      },
    },
  },
};

export const app = createMachine<AppContext, AppEvents>(appConfig);

export type AppService = InterpreterFrom<typeof app>;
