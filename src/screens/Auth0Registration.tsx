import Head from 'next/head';

import { OnState } from 'app/components/Shell';

import { IdentityForm } from './IdentityForm';
import { LoginPage } from './LoginPage';
import { RegistrationWizard } from './registration';

export function Auth0Registration() {
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
      <OnState matches="auth.checkingIdentity">
        <IdentityForm />
      </OnState>
      <OnState matches="auth.verifyingIdentity">
        <IdentityForm />
      </OnState>
      <OnState matches="auth.registration">
        <RegistrationWizard />
      </OnState>
      <OnState matches="auth.registering">
        <RegistrationWizard />
      </OnState>
    </>
  );
}
