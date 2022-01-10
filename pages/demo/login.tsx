import Head from 'next/head';
import { useEffect } from 'react';

import { useAppEvents, useAppState } from 'app';
import { LoginPage } from 'screens';

export default function Login() {
  const isVerifyingIdentity = useAppState('auth.verifyingIdentity');
  const isUnverified = useAppState('auth.identityUnverified');
  const events = useAppEvents();

  useEffect(() => {
    if (isVerifyingIdentity) {
      events.checkIdentity();
    }
  }, [events, isVerifyingIdentity]);

  useEffect(() => {
    if (isUnverified) {
      events.login();
    }
  }, [events, isUnverified]);

  return (
    <>
      <Head>
        <title>GeneDX</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <LoginPage />
      </main>

      <footer></footer>
    </>
  );
}
