import Head from 'next/head';

import { Authenticated } from 'app/components/Authenticated';
import { TestResults } from 'screens';

export default function ResultsPage() {
  return (
    <>
      <Head>
        <title>GeneDX</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Authenticated>
        <TestResults />
      </Authenticated>
    </>
  );
}
