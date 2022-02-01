import Head from 'next/head';

import { FAQsPage } from 'screens';

export default function FAQs() {
  return (
    <>
      <Head>
        <title>Project Pandas</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <FAQsPage />
    </>
  );
}
