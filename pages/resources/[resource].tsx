import Head from 'next/head';

import { Resources } from 'screens';

export default function ResourcesPage() {
  return (
    <>
      <Head>
        <title>GeneDX</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
          <Resources></Resources>
      </main>

      <footer></footer>
    </>
  );
}
