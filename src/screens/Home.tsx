import { OnState } from 'app';

import { IdentityForm } from './IdentityForm';
import { LandingPage } from './LandingPage';

export function Home() {
  return (
    <OnState matches="auth.knownCaregiver" fallback={<IdentityForm />}>
      <LandingPage />
    </OnState>
  );
}
