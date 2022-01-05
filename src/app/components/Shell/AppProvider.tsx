import { useActor, useInterpret } from '@xstate/react';
import { useMemo } from 'react';

import { app, setupDispatchMap } from 'app/state';

import { Article, mockArticle } from '../Content';

import { AppEventContext, AppServiceContext } from './context';

export interface AppProviderProps {
  onSession?: AppEventFn<unknown>;
  onAuthenticate?: AppEventFn<unknown>;
  onIdentity?: AppEventFn<unknown>;
  onMagicLink?: AppEventFn<unknown>;
  onFetchTestStatusArticles?: AppEventFn<unknown>;
  onTestStatus?: AppEventFn<{
    labStatus:
      | 'in transit'
      | 'specimen received'
      | 'hold for bi'
      | 'in lab'
      | 'finished'
      | 'report ready'
      | 'canceled';
  }>;
  onAppointmentStatus?: AppEventFn<{
    appointmentStatus: 'at appointment' | 'after appointment' | undefined;
  }>;
  onReport?: AppEventFn<{ src: string, thumbnail: string } | undefined>;
  onFetchAllArticles?: AppEventFn<Article[]>;
}

export function AppProvider({
  children,
  onAuthenticate: handleAuth = async () => undefined,
  onIdentity: handleIdentityCheck = async () => undefined,
  onMagicLink: handleMagicLink = async () => undefined,
  onSession: handleSession = async () => undefined,
  onTestStatus: handleTestStatus = async () => ({ labStatus: 'in lab' }),
  onAppointmentStatus: handleAppointmentStatus = async () => ({ appointmentStatus: undefined }),
  onReport: handleReport = async () => undefined,
  onFetchAllArticles: handleFetchAllArticles = async () => [mockArticle],
}: Props<AppProviderProps>) {
  const services = {
    handleAuth,
    handleIdentityCheck,
    handleSession,
    handleMagicLink,
    handleTestStatus,
    handleAppointmentStatus,
    handleReport,
    handleFetchAllArticles,
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
        getTestStatus: () => send('getTestStatus'),
        getAppointmentStatus: () => send('getAppointmentStatus'),
        viewTestResults: () => send('VIEW_TEST_RESULTS'),
        fetchAllArticles: () => send('fetchAllArticles'),
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
