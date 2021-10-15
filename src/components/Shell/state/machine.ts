import { assign } from '@xstate/immer';
import { createMachine, InterpreterFrom, MachineConfig } from 'xstate';

import { AppContext, AppEvents, AppSchema } from './types';

export const initialContext: AppContext = {
  language: 'en',
  theme: 'light',
  auth: { identityCheckAttempts: 0 },
  forms: { identity: { email: '', phone: '', zip: '' } },
};

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
              on: {
                identityChange: {
                  actions: [
                    assign((context, event) => {
                      context.forms.identity[event.field] = event.value;
                    }),
                  ],
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
