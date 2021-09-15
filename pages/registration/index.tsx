import Head from 'next/head';
import { useEffect } from 'react';

import { useAppEvents, useAppState } from 'components';
import { RegistrationWizard } from 'screens';

/**
 * This hook is a pure convenience step to let us test registration's
 * setup wizard while the rest of the app is being built. It has no
 * purpose once registration itself is fully wired up.
 */
function useBeginRegistration() {
  const onboarding = useAppState('app.authenticating.onboarding');
  const events = useAppEvents();

  useEffect(() => {
    if (onboarding) {
      events.register();
      events.confirm();
    }
  }, [events, onboarding]);
}

export default function RegistrationPage() {
  // Please remove this hook once registration is fully integrated.
  useBeginRegistration();

  return (
    <>
      <Head>
        <title>GeneDX</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <RegistrationWizard />
      </main>

      <footer />
    </>
  );
}
