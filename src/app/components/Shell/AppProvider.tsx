import { useActor, useInterpret } from '@xstate/react';
import { useMemo } from 'react';

import { app, setupDispatchMap } from 'app/state';
import { getPatientInfo } from 'app/web';
import { getTests } from 'client';

import { AppEventContext, AppServiceContext } from './context';

export interface AppProviderProps {
  requests?: AppEventFnMap<RequestModelMap>;
  onSession?: AppEventFn<AuthenticatedSession>;
  onAuthenticate?: AppEventFn<unknown>;
  onIdentity?: AppEventFn<unknown>;
  onFetchTestStatusArticles?: AppEventFn<unknown>;
  onLoadTests?: AppEventFn<Test[]>;
  onAppointmentStatus?: AppEventFn<{
    appointmentStatus: 'at appointment' | 'after appointment' | undefined;
  }>;
  onReport?: AppEventFn<
    { src: string; thumbnail: string | StaticImageData } | undefined
  >;
  onFetchAllArticles?: AppEventFn<Article[]>;
  onFetchAllFAQs?: AppEventFn<FAQ[]>;
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
  requests = {},
  onAuthenticate: handleAuth = async () => undefined,
  onIdentity: handleIdentityCheck = async () => undefined,
  onLoadTests: handleLoadTests = async (context: AppContext) =>
    await getTests(context.auth.patientGuid),
  onAppointmentStatus: handleAppointmentStatus = async () => ({
    appointmentStatus: undefined,
  }),
  onReport: handleReport = async () => undefined,
  onPatientGuid: handlePatientGuid = getPatientInfo,
  onFetchAllArticles: handleFetchAllArticles = async () => {
    return [];
  },
  onFetchAllFAQs: handleFetchAllFAQs = async () => {
    return [];
  },
  onSession: handleSession = async () => emptySession,
  onRegistration: handleRegistration = async () => undefined,
}: Props<AppProviderProps>) {
  const requestHandlers = {
    handleVerifyPatientGuidRequest:
      requests.verifyPatientGuid || (async () => ({})),
  };

  const services = {
    handleAuth,
    handleIdentityCheck,
    handleSession,
    handleLoadTests,
    handleAppointmentStatus,
    handleReport,
    handleFetchAllArticles,
    handleFetchAllFAQs,
    handlePatientGuid,
    handleRegistration,
    ...requestHandlers,
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
        fetchAllFAQs: () => send('fetchAllFAQs'),
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
