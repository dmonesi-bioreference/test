import Head from 'next/head';

import { AuthenticationToken } from 'screens';

export default function dataConsent() {
  return (
    <>
      <Head>
        <title>GeneDX</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <AuthenticationToken />
      </main>

      <footer></footer>
    </>
  );
}
