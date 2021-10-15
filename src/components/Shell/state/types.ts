import { SupportedLanguages } from 'localization';
import { Themes } from 'styles';

import { GetStates } from './paths';

type DispatchMap<GivenType> = {
  [Key in keyof GivenType]: (payload?: Omit<GivenType[Key], 'type'>) => void;
};

const NextStep = 'nextStep' as const;
const CheckIdentity = 'checkIdentity' as const;
const IdentityChange = 'identityChange' as const;

interface AppEventMap {
  [NextStep]: { type: typeof NextStep };
  [CheckIdentity]: { type: typeof CheckIdentity };
  [IdentityChange]: {
    type: typeof IdentityChange;
    field: keyof FormsContext['identity'];
    value: string;
  };
}

interface FormsContext {
  identity: {
    email: string;
    phone: string;
    zip: string;
  };
}

interface AuthContext {
  identityCheckAttempts: number;
}

export interface AppContext {
  language: SupportedLanguages;
  theme: Themes;
  auth: AuthContext;
  forms: FormsContext;
}

export type AppEventTypes = keyof AppEventMap;
export type AppEvents = AppEventMap[AppEventTypes];

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
        forms: {
          states: {
            identity: {};
          };
        };
        auth: {
          states: {
            checkingSession: {};
            knownCaregiver: {};
            checkingIdentity: {};
            checkingMagicLink: {};
            verifyingIdentity: {};
            identityUnverified: {};
            requestingLogin: {};
          };
        };
        registration: {
          states: {
            one: {};
            two: {};
            three: {};
            four: {};
          };
        };
      };
    };
  };
}
