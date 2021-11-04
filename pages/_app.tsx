import type { AppProps } from 'next/app';

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
    >
      <Component {...pageProps} />
    </Shell>
  );
}
export default WebApp;
