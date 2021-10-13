import Head from 'next/head';

import { LoginPage } from 'screens';

export default function Login(){
  return (
    <>
      <Head>
        <title>GeneDX</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <LoginPage />
      </main>

      <footer></footer>
    </>
  );
}