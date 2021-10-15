import { OnState } from 'components';

import { LandingPage } from './LandingPage';

export function Home() {
  return (
    <OnState matches="app.auth.knownCaregiver">
      <LandingPage />
    </OnState>
  );
}
