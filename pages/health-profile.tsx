import Head from 'next/head';

import { Authenticated } from 'app/components/Authenticated';
import { HealthProfile } from 'screens';

export default function healthProfile() {
  return (
    <>
      <Head>
        <title>Health Profile</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Authenticated>
        <HealthProfile />
      </Authenticated>
    </>
  );
}
