import { useEffect } from 'react';

import {
  useAppEvents,
  useAppSelector,
  useAppState,
  useAppTranslation,
} from 'app/components/Shell';
import { UserHeader } from 'components/UserHeader';

export function PatientBanner() {
  const events = useAppEvents();
  const t = useAppTranslation();
  const requesting = useAppState('requests.identityProfile.requesting');
  const name = useAppSelector(
    (state) =>
      state.context.requests.identityProfile.values.patient_name ||
      t('components.patientBanner.fetching')
  );

  useEffect(() => {
    events.identityProfileRequest();
  }, [events]);

  return (
    <div
      style={{
        opacity: requesting ? '0.4' : '1',
        transition: '0.3s ease-in-out',
      }}
    >
      <UserHeader
        title={t('components.patientBanner.label')}
        name={name}
        variant="patient"
      />
    </div>
  );
}
