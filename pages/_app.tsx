import type { AppProps } from 'next/app';

import { mockArticle } from 'app';
import { Shell } from 'app/components/Shell';
import 'inspect';

function WebApp({ Component, pageProps }: AppProps) {
  // For now, we are using an auto-failure placeholder in order to test
  // our registration flow.
  //
  const failedSession = () => Promise.reject('No session found');

  return (
    <Shell
      onAuthenticate={async () => {
        await new Promise((resolve) => setTimeout(resolve, 2000));
        return Promise.reject('401 Unauthorized');
      }}
      onSession={failedSession}
      onIdentity={async () => {
        await new Promise((resolve) => setTimeout(resolve, 2000));
        return Promise.reject('Explosions!');
      }}
      onTestStatus={async () => {
        // API call goes here
        return { labStatus: 'in lab' };
      }}
      onAppointmentStatus={async () => {
        // API call goes here
        return { appointmentStatus: 'after appointment' };
      }}
      onFetchAllArticles={async () => {
        return [mockArticle];
      }}
    >
      <Component {...pageProps} />
    </Shell>
  );
}
export default WebApp;
