import Head from 'next/head';

import { AuthenticationForm } from 'screens';

export default function AuthenticationFormPage() {
  return (
    <>
      <Head>
        <title>GeneDX</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <AuthenticationForm />
      </main>

      <footer></footer>
    </>
  );
}
