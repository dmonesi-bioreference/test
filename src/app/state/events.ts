/* eslint-disable @typescript-eslint/no-empty-interface */
import { DoneInvokeEvent } from 'xstate';

type DispatchMap<GivenType> = {
  [Key in keyof GivenType]: (payload?: Omit<GivenType[Key], 'type'>) => void;
};

declare global {
  interface AppEventMap {}

  type AppEventTypes = keyof AppEventMap;
  type AppEvents = AppEventMap[AppEventTypes] | DoneInvokeEvent<unknown>;
  type AppDispatchMap = DispatchMap<AppEventMap>;
  type AppEventFn<ReturnValue = any> = (
    context: AppContext,
    event: AppEvents
  ) => Promise<ReturnValue>;
}
