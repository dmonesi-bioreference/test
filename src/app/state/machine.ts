import {
  AssignMeta,
  DoneInvokeEvent,
  GuardMeta,
  InterpreterFrom,
} from 'xstate';

import geneticCounselor from 'assets/images/png/geneticCounselor.png';
import { SupportedLanguages } from 'localization';

import * as auth from './auth';
import * as content from './content';
import * as forms from './forms';
import * as registration from './registration';
import * as requests from './requests';
import * as tests from './tests';
import { createAppMachine, GetStates } from './utils';

export const initialContext = {
  language: 'en' as SupportedLanguages,
  auth: auth.context,
  forms: forms.context,
  tests: tests.context,
  content: content.context,
  registration: registration.context,
  requests: requests.context,
  geneticCounselor: {
    photo: geneticCounselor,
  },
};

const { init, schema } = createAppMachine({
  id: 'app',
  type: 'parallel',
  context: initialContext,
  states: {
    auth: auth.machine,
    forms: forms.machine,
    registration: registration.machine,
    tests: tests.machine,
    requests: requests.machine,
    content: content.machine,
  },
});

export const app = init({
  actions: Object.assign(
    auth.actions,
    forms.actions,
    tests.actions,
    registration.actions,
    requests.actions,
    content.actions
  ),
  guards: Object.assign(auth.guards, registration.guards),
  services: Object.assign(forms.services),
});

declare global {
  type DispatchFn<GivenPayload> = (
    payload?: Omit<GivenPayload, 'type'>
  ) => void;

  type DispatchMap<GivenType> = {
    [Key in keyof GivenType]: DispatchFn<GivenType[Key]>;
  };

  type AppSchema = typeof schema;
  type AppStates = GetStates<AppSchema>;
  type AppService = InterpreterFrom<typeof app>;
  type AppContext = typeof initialContext;

  interface AppEventMap {}

  type AppEventTypes = keyof AppEventMap;
  type ChangeEventTypes = keyof FormDispatchMap;
  type RequestEventTypes = keyof RequestDispatchMap;

  type InternalAppEvents =
    | AppEventMap[AppEventTypes]
    | FormDispatchMap[ChangeEventTypes]
    | RequestDispatchMap[RequestEventTypes];
  type AppEvents = InternalAppEvents | DoneInvokeEvent<unknown>;
  type AppAssignMeta = AssignMeta<AppContext, AppEvents>;
  type AppGuardMeta = GuardMeta<AppContext, AppEvents>;

  type AppDispatchMap = DispatchMap<
    AppEventMap & FormDispatchMap & RequestDispatchMap
  >;

  type AppEventFn<ReturnValue = any> = (
    context: AppContext,
    event: AppEvents
  ) => Promise<ReturnValue>;

  type AppEventFnMap<GivenModelMap extends object> = {
    [Key in keyof GivenModelMap]?: AppEventFn<GivenModelMap[Key]>;
  };
}
