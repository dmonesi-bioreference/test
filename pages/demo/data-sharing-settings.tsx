import Head from 'next/head';

import { DataSharingSettings } from 'screens';

export default function dataSharingSettings() {
  return (
    <>
      <Head>
        <title>GeneDX</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <DataSharingSettings />
      </main>

      <footer></footer>
    </>
  );
}
