import Head from 'next/head';

import { IdentityForm } from 'screens';

export default function IdentityFormPage() {
  return (
    <>
      <Head>
        <title>GeneDX</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <IdentityForm />
    </>
  );
}
