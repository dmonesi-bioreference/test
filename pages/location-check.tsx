import Head from 'next/head';

import { LocationCheckPage } from 'screens';

export default function LocationCheck(){
  return (
    <>
      <Head>
        <title>GeneDX</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <LocationCheckPage />
      </main>

      <footer></footer>
    </>
  );
}