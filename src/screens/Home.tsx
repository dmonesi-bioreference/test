import { OnState } from 'app';
import { LoginPage } from 'screens';

import { IdentityForm } from './IdentityForm';
import { LandingPage } from './LandingPage';
import { RegistrationWizard } from './registration';

export function Home() {
  return (
    <>
      <OnState matches="auth.knownCaregiver">
        <LandingPage />
      </OnState>
      <OnState matches="auth.requestingLogin">
        <LoginPage />
      </OnState>
      <OnState matches="auth.verifyingIdentity">
        <IdentityForm />
      </OnState>
      <OnState matches="auth.registration">
        <RegistrationWizard />
      </OnState>
    </>
  );
}
