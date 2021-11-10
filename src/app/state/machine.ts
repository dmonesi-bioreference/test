import { InterpreterFrom } from 'xstate';
import { DoneInvokeEvent } from 'xstate';

import { SupportedLanguages } from 'localization';
import { Themes } from 'styles';

import * as auth from './auth';
import * as forms from './forms';
import * as registration from './registration';
import { createAppMachine, GetStates } from './utils';

export const initialContext = {
  language: 'en' as SupportedLanguages,
  theme: 'light' as Themes,
  auth: auth.context,
  forms: forms.context,
};

const { init, schema } = createAppMachine({
  id: 'app',
  type: 'parallel',
  context: initialContext,
  states: {
    auth: auth.machine,
    forms: forms.machine,
    registration: registration.machine,
  },
});

export const app = init({
  actions: Object.assign(auth.actions, forms.actions),
  guards: Object.assign(auth.guards),
  services: Object.assign(forms.services),
});

declare global {
  type DispatchMap<GivenType> = {
    [Key in keyof GivenType]: (payload?: Omit<GivenType[Key], 'type'>) => void;
  };

  type AppSchema = typeof schema;
  type AppStates = GetStates<AppSchema>;
  type AppService = InterpreterFrom<typeof app>;
  type AppContext = typeof initialContext;

  interface AppEventMap {}

  type AppEventTypes = keyof AppEventMap;
  type ChangeEventTypes = keyof ChangeEventMap;
  type AppEvents =
    | AppEventMap[AppEventTypes]
    | ChangeEventMap[ChangeEventTypes]
    | DoneInvokeEvent<unknown>;
  type AppDispatchMap = DispatchMap<AppEventMap & ChangeEventMap>;
  type AppEventFn<ReturnValue = any> = (
    context: AppContext,
    event: AppEvents
  ) => Promise<ReturnValue>;
}
