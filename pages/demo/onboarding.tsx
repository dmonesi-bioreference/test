import Head from 'next/head';

import { Onboarding } from 'screens';

export default function onboarding() {
  return (
    <>
      <Head>
        <title>GeneDX</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Onboarding />
    </>
  );
}
