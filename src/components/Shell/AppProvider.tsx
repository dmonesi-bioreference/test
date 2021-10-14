import { useActor, useInterpret } from '@xstate/react';
import { useMemo } from 'react';

import { AppEventContext, AppServiceContext } from './context';
import { app, AppDispatchMap, AppEventFn } from './state';

export interface AppProviderProps {
  onSession?: AppEventFn<unknown>;
  onAuthenticate?: AppEventFn<unknown>;
  onIdentity?: AppEventFn<unknown>;
}

export function AppProvider({
  children,
  onSession: handleSession = async () => undefined,
  onAuthenticate: handleAuth = async () => undefined,
  onIdentity: handleIdentityCheck = async () => undefined,
}: Props<AppProviderProps>) {
  const services = { handleAuth, handleIdentityCheck, handleSession };

  const service = useInterpret(app.withConfig({ services }), {
    devTools: true,
  });
  const [, send] = useActor(service);

  const events = useMemo(
    () => {
      const appDispatchMap: AppDispatchMap = {
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
