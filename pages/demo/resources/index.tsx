import Head from 'next/head';

import { ResourcesPage } from 'screens';

export default function Resources() {
  return (
    <>
      <Head>
        <title>Project Pandas</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <ResourcesPage />
      </main>

      <footer />
    </>
  );
}
