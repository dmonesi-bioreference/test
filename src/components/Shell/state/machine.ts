import { createMachine, InterpreterFrom, MachineConfig } from 'xstate';

import { AppContext, AppEvents, AppSchema } from './types';

export const initialContext: AppContext = { language: 'en', theme: 'light' };

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
                onDone: 'validSession',
                onError: 'invalidSession',
              },
            },
            validSession: {},
            invalidSession: {},
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
