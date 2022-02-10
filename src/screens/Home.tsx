import { OnState } from 'app/components/Shell';
import { LoginPage } from 'screens/LoginPage';
import { OnBoarding } from 'screens/Onboarding';

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
        <OnBoarding />
      </OnState>
      <OnState matches="auth.registration">
        <RegistrationWizard />
      </OnState>
    </>
  );
}
