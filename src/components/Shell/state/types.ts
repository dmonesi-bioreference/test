import { SupportedLanguages } from 'localization';
import { Themes } from 'styles';

import { GetStates } from './paths';

type DispatchMap<GivenType> = {
  [Key in keyof GivenType]: (payload?: Omit<GivenType[Key], 'type'>) => void;
};

const NextStep = 'nextStep' as const;

interface AppEventMap {
  [NextStep]: { type: typeof NextStep };
}

export interface AppContext {
  language: SupportedLanguages;
  theme: Themes;
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
        auth: {
          states: {
            checkingSession: {};
            validSession: {};
            invalidSession: {};
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
