import { useActor, useInterpret } from '@xstate/react';
import { useMemo } from 'react';

import { AppEventContext, AppServiceContext } from './context';
import { app } from './state';

export function AppProvider(props: Props<unknown>) {
  const service = useInterpret(app);
  const [, send] = useActor(service);

  const events = useMemo(
    () => ({
      'app-ready': () => send('app-ready'),
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  return (
    <AppServiceContext.Provider value={service}>
      <AppEventContext.Provider value={events}>
        {props.children}
      </AppEventContext.Provider>
    </AppServiceContext.Provider>
  );
}
