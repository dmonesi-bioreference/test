import { useAppState } from 'app/components/Shell';

import { LoginPage } from './LoginPage';
import { OnBoarding } from './Onboarding';
import { RegistrationWizard } from './registration';

export function Auth0Registration() {
  const isAuthenticating = useAppState('auth.authenticating');
  const isRequestingLogin = useAppState('auth.requestingLogin');

  const isCheckingIdentity = useAppState('auth.checkingIdentity');
  const isVerifyingIdentity = useAppState('auth.verifyingIdentity');

  const isInRegistration = useAppState('auth.registration');
  const isRegistering = useAppState('auth.registering');

  const inLoginForm = isAuthenticating || isRequestingLogin;
  const inOnboarding = isCheckingIdentity || isVerifyingIdentity;
  const inRegistrationWizard = isInRegistration || isRegistering;

  return (
    <>
      {inLoginForm ? <LoginPage /> : null}
      {inOnboarding ? <OnBoarding /> : null}
      {inRegistrationWizard ? <RegistrationWizard /> : null}
    </>
  );
}
