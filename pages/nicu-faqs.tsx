import Head from 'next/head';

import { FAQs } from 'screens';

export default function TestingProcessPage() {
  return (
    <>
      <Head>
        <title>Project Pandas</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
          <FAQs />
      </main>

      <footer></footer>
    </>
  );
}
