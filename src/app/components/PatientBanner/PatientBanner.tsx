import { useEffect } from 'react';

import {
  useAppEvents,
  useAppSelector,
  useAppState,
  useAppTranslation,
} from 'app/components/Shell/hooks';
import { Typography } from 'components/Typography';
import { useStyleTheme } from 'styles';

import PatientBannerStyled from './PatientBanner.styles';

export const PatientBanner: React.FC = () => {
  const theme = useStyleTheme();
  const t = useAppTranslation();
  const requesting = useAppState('requests.identityProfile.requesting');
  const name = useAppSelector(
    (state) =>
      state.context.requests.identityProfile.values.patient_name ||
      t('components.patientBanner.fetching')
  );

  const events = useAppEvents();
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
      <PatientBannerStyled>
        <div className="patient-banner__background-panel">
          <svg
            viewBox="0 0 351 79"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="115.5"
              cy="-84.5"
              r="235.5"
              fill={theme.colors.bannerForeground}
            />
          </svg>
        </div>
        <div className="patient-banner__content">
          <div className="patient-banner__label">
            <Typography type="label" labelType="display">
              {t('components.patientBanner.label')}
            </Typography>
          </div>
          <Typography type="body" level="5">
            {name}
          </Typography>
        </div>
      </PatientBannerStyled>
    </div>
  );
};

export default PatientBanner;
