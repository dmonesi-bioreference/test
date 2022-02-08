import type { AppProps } from 'next/app';
import Head from 'next/head';
import { useMemo } from 'react';

import { Shell } from 'app/components/Shell';
import { Api } from 'client/api';

import 'inspect';

const log = (...args: any[]) => {
  if (process.env.NODE_ENV === 'development') {
    // eslint-disable-next-line no-console
    console.log(...args);
  }
};

async function getAuth0SessionForNonDemoPages() {
  log('Checking session');

  if (
    typeof window !== 'undefined' &&
    window.location.pathname.startsWith('/demo')
  ) {
    return Promise.reject('No sessions in demo routes.');
  }

  const result = await fetch('/api/auth/me');

  if (!result.ok) {
    if (typeof window !== 'undefined') {
      window.location.href = `/api/auth/login${window.location.search}`;
      await new Promise((resolve) => setTimeout(resolve, 10_000_000));
    } else {
      throw new Error(result.status.toString());
    }
  }

  // eslint-disable-next-line @typescript-eslint/no-unsafe-return
  return (await result.json()) as AuthenticatedSession;
}

function WebApp({ Component, pageProps }: AppProps) {
  const requests = useMemo(() => {
    const requests: AppEventFnMap<RequestModelMap> = {
      identityProfile: Api.Identity.profile,
      verifyPatientInfo: Api.Identity.validate,
      singleArticle: Api.Content.article,
      allArticles: Api.Content.articles,
      singleFaq: Api.Content.faq,
      allFaqs: Api.Content.faqs,
      allAudios: Api.Content.audios,
    };

    return requests;
  }, []);

  return (
    <Shell
      requests={requests}
      onSession={getAuth0SessionForNonDemoPages}
      onAuthenticate={async () => {
        log('Authenticating');
      }}
      onAppointmentStatus={async () => {
        // API call goes here
        return { appointmentStatus: 'after appointment' };
      }}
      onIdentity={Api.Identity.validate}
      onLoadTests={Api.Tests.list}
    >
      <Head>
        <title>GeneDx</title>
        <link rel="icon" href="/favicon.ico" key="favicon" />
      </Head>
      <Component {...pageProps} />
    </Shell>
  );
}
export default WebApp;
