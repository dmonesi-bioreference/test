import { useActor, useInterpret } from '@xstate/react';
import { useMemo } from 'react';

import { app, setupDispatchMap } from 'app/state';
import { getPatientInfo } from 'app/web';

import { Article, mockArticle } from '../Content';

import { AppEventContext, AppServiceContext } from './context';

export interface AppProviderProps {
  onSession?: AppEventFn<AuthenticatedSession>;
  onAuthenticate?: AppEventFn<unknown>;
  onIdentity?: AppEventFn<unknown>;
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
  onReport?: AppEventFn<{ src: string; thumbnail: string } | undefined>;
  onFetchAllArticles?: AppEventFn<Article[]>;
  onPatientGuid?: AppEventFn<{ guid: string; source: string }>;
  onRegistration?: AppEventFn<unknown>;
}

const emptySession: AuthenticatedSession = {
  nickname: '',
  name: '',
  picture: '',
  updated_at: '',
  email: '',
  email_verified: false,
  sub: '',
};

export function AppProvider({
  children,
  onAuthenticate: handleAuth = async () => undefined,
  onIdentity: handleIdentityCheck = async () => undefined,
  onTestStatus: handleTestStatus = async () => ({ labStatus: 'in lab' }),
  onAppointmentStatus: handleAppointmentStatus = async () => ({
    appointmentStatus: undefined,
  }),
  onReport: handleReport = async () => undefined,
  onFetchAllArticles: handleFetchAllArticles = async () => [mockArticle],
  onPatientGuid: handlePatientGuid = getPatientInfo,
  onSession: handleSession = async () => emptySession,
  onRegistration: handleRegistration = async () => undefined,
}: Props<AppProviderProps>) {
  const services = {
    handleAuth,
    handleIdentityCheck,
    handleSession,
    handleTestStatus,
    handleAppointmentStatus,
    handleReport,
    handleFetchAllArticles,
    handlePatientGuid,
    handleRegistration,
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
        register: () => send('register'),
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
