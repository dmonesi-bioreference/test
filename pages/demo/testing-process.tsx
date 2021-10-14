import Head from 'next/head';

import { TestingProcess } from 'screens';

export default function TestingProcessPage() {
  return (
    <>
      <Head>
        <title>GeneDX</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <TestingProcess />
      </main>

      <footer></footer>
    </>
  );
}
