import Head from 'next/head';

import { Main as LandingPage } from 'screens';

export default function Home() {
  return (
    <>
      <Head>
        <title>GeneDX</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <LandingPage />
      </main>

      <footer></footer>
    </>
  );
}
