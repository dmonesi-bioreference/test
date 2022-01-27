import Head from 'next/head';

import { Settings } from 'screens';

export default function settings() {
  return (
    <>
      <Head>
        <title>Settings</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Settings />
    </>
  );
}
