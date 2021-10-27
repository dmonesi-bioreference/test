import { OnState } from 'components';

import { IdentityForm } from './IdentityForm';
import { LandingPage } from './LandingPage';

export function Home() {
  return (
    <OnState matches="app.auth.knownCaregiver" fallback={<IdentityForm />}>
      <LandingPage />
    </OnState>
  );
}
