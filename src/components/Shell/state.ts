import { createMachine, InterpreterFrom, MachineConfig } from 'xstate';

import { SupportedLanguages } from 'localization';
import { Themes } from 'styles';

import { GetStates } from './paths';

type DispatchMap<GivenType> = {
  [Key in keyof GivenType]: (payload?: Omit<GivenType[Key], 'type'>) => void;
};

const Register = 'register' as const;
const Confirm = 'confirm' as const;
const NextStep = 'nextStep' as const;
const Consent = 'consent' as const;
const Accept = 'accept' as const;

interface AppEventMap {
  [Register]: { type: typeof Register };
  [Confirm]: { type: typeof Confirm };
  [NextStep]: { type: typeof NextStep };
  [Consent]: { type: typeof Consent };
  [Accept]: { type: typeof Accept };
}

export interface AppContext {
  language: SupportedLanguages;
  theme: Themes;
}

export type AppEventTypes = keyof AppEventMap;
export type AppEvents = AppEventMap[AppEventTypes];
export type AppService = InterpreterFrom<typeof app>;

export type AppDispatchMap = DispatchMap<AppEventMap>;
export type AppEventFn<ReturnValue = any> = (
  context: AppContext,
  event: AppEvents
) => Promise<ReturnValue>;

export type AppStates = GetStates<AppSchema>;

export interface AppSchema {
  states: {
    app: {
      states: {
        authenticating: {
          states: {
            authenticate: {};
            onboarding: {
              states: {
                one: {};
                two: {};
                three: {};
              };
            };
            register: {
              states: {
                dob: {};
                zip: {};
                email: {};
              };
            };
            signup: {
              states: {
                one: {
                  states: {
                    first: {};
                    last: {};
                  };
                };
                two: {
                  states: {
                    email: {};
                    mobile: {};
                  };
                };
                three: {
                  states: {
                    relationship: {};
                    dob: {};
                  };
                };
                four: {
                  states: {
                    password: {};
                    confirm: {};
                  };
                };
              };
            };
            consent: {
              states: {
                minimal: {};
                personalized: {};
              };
            };
          };
        };
        visiting: {};
        portal: {};
        checking: {};
      };
    };
  };
}

export const initialContext: AppContext = { language: 'en', theme: 'light' };

const appConfig: MachineConfig<AppContext, AppSchema, AppEvents> = {
  id: 'application',
  type: 'parallel',
  context: initialContext,
  states: {
    app: {
      initial: 'checking',
      states: {
        checking: {
          invoke: {
            src: 'handleIdentityCheck',
            onDone: 'authenticating',
            onError: 'visiting',
          },
        },
        authenticating: {
          initial: 'authenticate',
          states: {
            authenticate: {
              invoke: {
                src: 'handleAuthentication',
                onDone: '#portal',
                onError: 'onboarding',
              },
            },
            onboarding: {
              initial: 'one',
              on: { register: 'register' },
              states: {
                one: {},
                two: {},
                three: {},
              },
            },
            register: {
              type: 'parallel',
              states: {
                dob: {},
                zip: {},
                email: {},
              },
              on: { confirm: 'signup' },
            },
            signup: {
              initial: 'one',
              states: {
                one: {
                  type: 'parallel',
                  states: {
                    first: {},
                    last: {},
                  },
                  on: { nextStep: 'two' },
                },
                two: {
                  type: 'parallel',
                  states: {
                    email: {},
                    mobile: {},
                  },
                  on: { nextStep: 'three' },
                },
                three: {
                  type: 'parallel',
                  states: {
                    relationship: {},
                    dob: {},
                  },
                  on: { nextStep: 'four' },
                },
                four: {
                  type: 'parallel',
                  states: {
                    password: {},
                    confirm: {},
                  },
                  on: {
                    consent: '#consent',
                  },
                },
              },
            },
            consent: {
              id: 'consent',
              initial: 'personalized',
              on: { accept: '#portal' },
              states: {
                minimal: {},
                personalized: {},
              },
            },
          },
        },
        portal: {
          id: 'portal',
        },
        visiting: {},
      },
    },
  },
};

export const app = createMachine<AppContext, AppEvents>(appConfig);
