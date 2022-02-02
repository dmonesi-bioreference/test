import Head from 'next/head';

import { Authenticated } from 'app/components/Authenticated';
import { Settings } from 'screens';

export default function settings() {
  return (
    <>
      <Head>
        <title>Settings</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Authenticated>
        <Settings />
      </Authenticated>
    </>
  );
}
