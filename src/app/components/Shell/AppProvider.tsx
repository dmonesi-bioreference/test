import { useActor, useInterpret } from '@xstate/react';
import { useMemo } from 'react';

import { app } from 'app/state';

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
        checkIdentity: () => send('checkIdentity'),
        nextStep: () => send('nextStep'),
        identityChange: (payload) => {
          if (payload && 'field' in payload && 'value' in payload) {
            send({
              type: 'identityChange',
              field: payload.field,
              value: payload.value,
            });
          }
        },
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
