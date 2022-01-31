import Head from 'next/head';

import { HealthProfile } from 'screens';

export default function healthProfile() {
  return (
    <>
      <Head>
        <title>Health Profile</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <HealthProfile />
    </>
  );
}
