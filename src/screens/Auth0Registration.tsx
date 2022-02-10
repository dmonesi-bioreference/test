import Head from 'next/head';

import { OnState, useAppState } from 'app/components/Shell';

import { LoginPage } from './LoginPage';
import { OnBoarding } from './Onboarding';
import { RegistrationWizard } from './registration';

export function Auth0Registration() {
  const isCheckingIdentity = useAppState('auth.checkingIdentity');
  const isVerifyingIdentity = useAppState('auth.verifyingIdentity');

  const isOnboarding = isCheckingIdentity || isVerifyingIdentity;

  return (
    <>
      <Head>
        <meta
          key="viewport-scaling"
          name="viewport"
          content="width=device-width, initial-scale=1"
        />
      </Head>
      <OnState matches="auth.authenticating">
        <LoginPage />
      </OnState>
      <OnState matches="auth.requestingLogin">
        <LoginPage />
      </OnState>
      {isOnboarding ? <OnBoarding /> : null}
      <OnState matches="auth.registration">
        <RegistrationWizard />
      </OnState>
      <OnState matches="auth.registering">
        <RegistrationWizard />
      </OnState>
    </>
  );
}
