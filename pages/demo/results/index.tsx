import Head from 'next/head';

import { TestResults } from 'screens';

export default function ResultsPage() {
  return (
    <>
      <Head>
        <title>GeneDX</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <TestResults />
      </main>

      <footer />
    </>
  );
}
