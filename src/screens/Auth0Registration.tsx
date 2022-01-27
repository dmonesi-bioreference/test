import { OnState } from 'app/components/Shell';

import { IdentityForm } from './IdentityForm';
import { LoginPage } from './LoginPage';
import { RegistrationWizard } from './registration';

export function Auth0Registration() {
  return (
    <>
      <OnState matches="auth.authenticating">
        <LoginPage />
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
      <OnState matches="auth.registering">
        <RegistrationWizard />
      </OnState>
    </>
  );
}
