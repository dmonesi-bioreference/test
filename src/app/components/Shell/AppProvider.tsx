import { useActor, useInterpret } from '@xstate/react';
import { useMemo } from 'react';

import { app, setupDispatchMap } from 'app/state';
import { getPatientInfo } from 'app/web';
import { Errors } from 'client/errors';

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
  onFetchArticle?: AppEventFn<Article>;
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
  dob: new Date(),
  patient_guid: '',
  terms_timestamp: '',
  terms_given: '',
  terms_version: '',
  location: '',
  phone_number: '',
  email: '',
  email_verified: false,
  relation_to_patient: '',
  sub: '',
};

export function AppProvider({
  children,
  requests = {},
  onAuthenticate: handleAuth = async () => undefined,
  onIdentity: handleIdentityCheck = async () => undefined,
  onLoadTests: handleLoadTests = async () => [],
  onAppointmentStatus: handleAppointmentStatus = async () => ({
    appointmentStatus: undefined,
  }),
  onReport: handleReport = async () => undefined,
  onPatientGuid: handlePatientGuid = getPatientInfo,
  onFetchArticle: handleFetchArticle = async () =>
    Promise.reject('No article found'),
  onFetchAllArticles: handleFetchAllArticles = async () => [],
  onFetchAllFAQs: handleFetchAllFAQs = async () => [],
  onSession: handleSession = async () => emptySession,
  onRegistration: handleRegistration = async () => undefined,
}: Props<AppProviderProps>) {
  const requestHandlers: RequestServiceMap = {
    handleVerifyPatientInfoRequest:
      requests.verifyPatientInfo || (async () => ({})),
    handleCaregiverProfileRequest:
      requests.caregiverProfile ||
      (async () =>
        Promise.reject(Errors.api('No caregiver profile available'))),
  };

  const services = {
    handleAuth,
    handleIdentityCheck,
    handleSession,
    handleLoadTests,
    handleAppointmentStatus,
    handleReport,
    handleFetchArticle,
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
        getTestStatus: () => send('CHECK_TESTS'),
        getAppointmentStatus: () => send('GET_APPOINTMENT_STATUS'),
        viewTestResults: () => send('VIEW_TEST_RESULTS'),
        fetchSingleArticle: (payload?: { articleIdentifier: string }) =>
          send({
            type: 'FETCH_SINGLE_ARTICLE',
            articleIdentifier: payload ? payload.articleIdentifier : '',
          }),
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
