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
  onLoadTests: handleFetchTests = async () => [],
  onAppointmentStatus: handleAppointmentStatus = async () => ({
    appointmentStatus: undefined,
  }),
  onReport: handleReport = async () => undefined,
  onPatientGuid: handlePatientGuid = getPatientInfo,
  onSession: handleSession = async () => emptySession,
  onRegistration: handleRegistration = async () => undefined,
}: Props<AppProviderProps>) {
  const requestHandlers: RequestServiceMap = {
    handleVerifyPatientInfoRequest:
      requests.verifyPatientInfo || (async () => ({})),
    handleIdentityProfileRequest:
      requests.identityProfile ||
      (async () =>
        Promise.reject(Errors.api('No caregiver profile available'))),
    handleSingleArticleRequest:
      requests.singleArticle ||
      (async () => Promise.reject(Errors.api('No article available'))),
    handleAllArticlesRequest:
      requests.allArticles ||
      (async () => Promise.reject(Errors.api('No articles available'))),
    handleSingleFaqRequest:
      requests.singleFaq ||
      (async () => Promise.reject(Errors.api('No faq found'))),
    handleAllFaqsRequest:
      requests.allFaqs ||
      (async () => Promise.reject(Errors.api('No faqs found'))),
    handleAllInternalLinkCardsRequest:
      requests.allInternalLinkCards ||
      (async () => Promise.reject(Errors.api('No internal link cards found'))),
    handleAllAudiosRequest:
      requests?.allAudios ||
      (async () => Promise.reject(Errors.api('No audios available'))),
  };

  const services = {
    handleAuth,
    handleIdentityCheck,
    handleSession,
    handleFetchTests,
    handleAppointmentStatus,
    handleReport,
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
        visitStep: (payload) =>
          payload?.step
            ? send({ type: 'visitStep', step: payload.step })
            : null,
        login: () => send('login'),
        getTestStatus: () => send('CHECK_TESTS'),
        getAppointmentStatus: () => send('GET_APPOINTMENT_STATUS'),
        viewTestResults: () => send('VIEW_TEST_RESULTS'),
        setArticleIdentifier: (payload?: { articleIdentifier: string }) =>
          send({
            type: 'SET_ARTICLE_IDENTIFIER',
            articleIdentifier: payload ? payload.articleIdentifier : '',
          }),
        setFaqSlug: (payload?: { FAQSlug: string }) =>
          send({
            type: 'SET_FAQ_SLUG',
            FAQSlug: payload ? payload.FAQSlug : '',
          }),
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
