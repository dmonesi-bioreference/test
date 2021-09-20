import { useState } from 'react';

import {
  Button,
  Checkbox,
  Heading,
  Icon,
  InformationBanner,
  Input,
  PageLayout,
  PageSection,
  StepTitle,
  Typography,
  useAppTranslation,
} from 'components';
import { tokens } from 'styles';

export const StepFour = () => {
  const t = useAppTranslation();

  const [passwordShown, setPasswordShown] = useState(false);
  const [confirmPasswordShown, setConfirmPasswordShown] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordShown((latestPasswordShownValue) => !latestPasswordShownValue);
  };
  const toggleConfirmPasswordVisibility = () => {
    setConfirmPasswordShown(
      (latestConfirmPasswordShownValue) => !latestConfirmPasswordShownValue
    );
  };
  return (
    <PageLayout>
      <PageSection
        header={
          <div
            style={{
              textAlign: 'center',
              display: 'flex',
              flexDirection: 'column',
              gap: tokens.spacingXLarge,
            }}
          >
            <StepTitle number="4" />
            <Heading level="4">
              {t('sections.furtherRegistration.stepFour.subTitle')}
            </Heading>
          </div>
        }
      >
        <div style={{ marginBottom: tokens.spacingLarge }}>
          <InformationBanner
            title={t('sections.furtherRegistration.inputValidation.title')}
          >
            <Typography type="list">
              {t('sections.furtherRegistration.inputValidation.characters')}
            </Typography>
            <Typography type="list">
              {t('sections.furtherRegistration.inputValidation.letters')}
            </Typography>
            <Typography type="list">
              {t('sections.furtherRegistration.inputValidation.numbers')}
            </Typography>
          </InformationBanner>
        </div>

        <div style={{ marginBottom: tokens.spacingLarge }}>
          <div style={{ marginBottom: tokens.spacing }}>
            <Input
              type={passwordShown ? 'text' : 'password'}
              label={t('sections.furtherRegistration.form.password.label')}
              name="password"
              suffix={
                <Button kind="small" onClick={togglePasswordVisibility}>
                  {passwordShown ? 'Hide' : 'Show'}
                </Button>
              }
              prefix={<Icon name="lock-closed" color="primary" />}
            />
          </div>

          <Input
            type={confirmPasswordShown ? 'text' : 'password'}
            label={t('sections.furtherRegistration.form.confirmPassword.label')}
            name="confirm-password"
            suffix={
              <Button kind="small" onClick={toggleConfirmPasswordVisibility}>
                {confirmPasswordShown ? 'Hide' : 'Show'}
              </Button>
            }
            prefix={<Icon name="lock-closed" color="primary" />}
          />
        </div>

        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: tokens.spacingXxxSmall,
            marginBottom: tokens.spacingXLarge,
          }}
        >
          <Checkbox
            label={t('sections.furtherRegistration.checkbox.label')}
            name="checkbox"
            size="medium"
          />
          <Button kind="small">
            {t('sections.furtherRegistration.checkbox.termsAndConditionsLink')}
          </Button>
        </div>

        <Button kind="primary">{t('sections.furtherRegistration.next')}</Button>
      </PageSection>
    </PageLayout>
  );
};
