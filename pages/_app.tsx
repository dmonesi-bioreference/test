import type { AppProps } from 'next/app';

import { Shell } from 'components/Shell';

import 'inspect';

function WebApp({ Component, pageProps }: AppProps) {
  // For now, we are using an auto-failure placeholder in order to test
  // our registration flow.
  //
  const failedAuthentication = () => Promise.reject('401 Unauthorized');
  const failedSession = () => Promise.reject('No session found');

  return (
    <Shell
      onAuthenticate={failedAuthentication}
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
