import type { AppProps } from 'next/app';

import { Shell } from 'components/Shell';

function WebApp({ Component, pageProps }: AppProps) {
  return (
    <Shell>
      <Component {...pageProps} />
    </Shell>
  );
}
export default WebApp;
