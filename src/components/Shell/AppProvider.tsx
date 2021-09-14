import { useActor, useInterpret } from '@xstate/react';
import { useMemo } from 'react';

import { AppEventContext, AppServiceContext } from './context';
import { app, AppDispatchMap, AppEventFn } from './state';

export interface AppProviderProps {
  onAuthenticate?: AppEventFn<unknown>;
  onIdentity?: AppEventFn<unknown>;
}

export function AppProvider({
  children,
  onAuthenticate: handleAuthentication = async () => undefined,
  onIdentity: handleIdentityCheck = async () => undefined,
}: Props<AppProviderProps>) {
  const services = { handleAuthentication, handleIdentityCheck };

  const service = useInterpret(app.withConfig({ services }), {
    devTools: true,
  });
  const [, send] = useActor(service);

  const events = useMemo(
    () => {
      const appDispatchMap: AppDispatchMap = {
        register: () => send('register'),
        confirm: () => send('confirm'),
        consent: () => send('consent'),
        accept: () => send('accept'),
        nextStep: () => send('nextStep'),
      };

      return appDispatchMap;
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  return (
    <AppServiceContext.Provider value={service}>
      <AppEventContext.Provider value={events}>
        {children}
      </AppEventContext.Provider>
    </AppServiceContext.Provider>
  );
}
