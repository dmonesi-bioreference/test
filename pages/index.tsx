import Head from 'next/head';

import { Home } from 'screens';

export default function Index() {
  return (
    <>
      <Head>
        <title>GeneDX</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Home />
      </main>

      <footer></footer>
    </>
  );
}
