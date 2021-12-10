import Head from 'next/head';

import { PreResultsPause } from 'screens/PreResultsPause';

export default function PreResultsPausePage() {
  return (
    <>
      <Head>
        <title>GeneDX</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <PreResultsPause />
      </main>

      <footer></footer>
    </>
  );
}
