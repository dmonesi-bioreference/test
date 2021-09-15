import type { AppProps } from 'next/app';

import { Shell } from 'components/Shell';

import 'inspect';
function WebApp({ Component, pageProps }: AppProps) {
  // For now, we are using an auto-failure placeholder in order to test
  // our registration flow.
  //
  const failedAuthentication = async () => {
    throw new Error('401 Unauthorized');
  };

  return (
    <Shell onAuthenticate={failedAuthentication}>
      <Component {...pageProps} />
    </Shell>
  );
}
export default WebApp;
