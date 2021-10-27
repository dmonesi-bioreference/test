import { SupportedLanguages } from 'localization';
import { Identity, ValidationFailure } from 'models';
import { Themes } from 'styles';

import { GetStates } from './paths';

type DispatchMap<GivenType> = {
  [Key in keyof GivenType]: (payload?: Omit<GivenType[Key], 'type'>) => void;
};

const NextStep = 'nextStep' as const;
const CheckIdentity = 'checkIdentity' as const;
const IdentityChange = 'identityChange' as const;

export interface AppEventMap {
  [NextStep]: { type: typeof NextStep };
  [CheckIdentity]: { type: typeof CheckIdentity };
  [IdentityChange]: {
    type: typeof IdentityChange;
    field: keyof Identity;
    value: string;
  };
}

interface FormDetail<GivenType extends object> {
  values: GivenType;
  errors: ValidationFailure[];
}

interface FormsContext {
  identity: FormDetail<Identity>;
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

export interface FormSchema {
  states: {
    activity: {
      states: {
        active: {};
        idle: {};
      };
    };
    validation: {
      states: {
        pristine: {};
        validating: {};
        valid: {};
        invalid: {};
      };
    };
  };
}

export interface AppSchema {
  states: {
    app: {
      states: {
        forms: {
          states: {
            identity: FormSchema;
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
