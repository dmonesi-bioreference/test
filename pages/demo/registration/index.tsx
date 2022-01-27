import Head from 'next/head';

import { RegistrationWizard } from 'screens';

export default function RegistrationPage() {
  return (
    <>
      <Head>
        <title>GeneDX</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <RegistrationWizard />
    </>
  );
}
