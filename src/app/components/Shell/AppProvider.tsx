import { useActor, useInterpret } from '@xstate/react';
import { useMemo } from 'react';

import { app, setupDispatchMap } from 'app/state';

import { AppEventContext, AppServiceContext } from './context';

export interface AppProviderProps {
  onSession?: AppEventFn<unknown>;
  onAuthenticate?: AppEventFn<unknown>;
  onIdentity?: AppEventFn<unknown>;
  onMagicLink?: AppEventFn<unknown>;
}

export function AppProvider({
  children,
  onAuthenticate: handleAuth = async () => undefined,
  onIdentity: handleIdentityCheck = async () => undefined,
  onMagicLink: handleMagicLink = async () => undefined,
  onSession: handleSession = async () => undefined,
}: Props<AppProviderProps>) {
  const services = {
    handleAuth,
    handleIdentityCheck,
    handleSession,
    handleMagicLink,
  };

  const service = useInterpret(app.withConfig({ services }), {
    devTools: true,
  });
  const [, send] = useActor(service);

  const events = useMemo(
    () => {
      const appDispatchMap: AppDispatchMap = {
        ...setupDispatchMap(send),
        authenticate: () => send('authenticate'),
        checkIdentity: () => send('checkIdentity'),
        nextStep: () => send('nextStep'),
        login: () => send('login'),
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
