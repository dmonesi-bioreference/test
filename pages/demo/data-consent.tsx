import Head from 'next/head';

import { DataConsent } from 'screens';

export default function dataConsent() {
  return (
    <>
      <Head>
        <title>GeneDX</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <DataConsent />
      </main>

      <footer></footer>
    </>
  );
}
