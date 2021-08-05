import { createMachine, InterpreterFrom } from 'xstate';

import { SupportedLanguages } from 'localization';
import { Themes } from 'styles';

type DispatchMap<GivenType> = {
  [Key in keyof GivenType]: (payload?: Omit<GivenType[Key], 'type'>) => void;
};

const AppReady = 'app-ready' as const;

interface AppEventMap {
  [AppReady]: { type: typeof AppReady };
}

export interface AppContext {
  language: SupportedLanguages;
  theme: Themes;
}

export type AppEventTypes = keyof AppEventMap;
export type AppEvents = AppEventMap[AppEventTypes];
export type AppService = InterpreterFrom<typeof app>;
export type AppState = AppService['state'];

export type AppDispatchMap = DispatchMap<AppEventMap>;

export const app = createMachine<AppContext, AppEvents>({
  id: 'application',
  type: 'parallel',
  context: {
    language: 'en',
    theme: 'light',
  },
  states: {
    app: {
      initial: 'idle',
      states: {
        idle: {},
      },
    },
  },
});
