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
  Typography,
  ToolTip,
  useAppTranslation,
} from 'components';

import { tokens } from '../styles';

export const FurtherRegistration = () => {
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
              gap: tokens.spacingMedium,
              marginBottom: tokens.spacing,
            }}
          >
            <Heading level="1">
              {t('sections.furtherRegistration.title')}
            </Heading>
            <Heading level="4">
              {t('sections.furtherRegistration.firstSubTitle')}
            </Heading>
          </div>
        }
      >
        <div
          style={{ textAlign: 'center', marginBottom: tokens.spacingXLarge }}
        >
          <Heading level="4">
            {t('sections.furtherRegistration.secondSubTitle')}
          </Heading>
        </div>

        <div style={{ marginBottom: tokens.spacingXxLarge }}>
          <div style={{ marginBottom: tokens.spacing }}>
            <Input
              type="text"
              label={t('sections.furtherRegistration.form.firstName.label')}
              name="first-name"
              placeholder={t(
                'sections.furtherRegistration.form.firstName.placeholder'
              )}
              prefix={<Icon name="user" color="primary" />}
            />
          </div>
          <Input
            type="text"
            label={t('sections.furtherRegistration.form.lastName.label')}
            name="last-name"
            placeholder={t(
              'sections.furtherRegistration.form.lastName.placeholder'
            )}
            prefix={<Icon name="user" color="primary" />}
          />
        </div>

        <div style={{ marginBottom: tokens.spacingXxSmall }}>
          <div style={{ marginBottom: tokens.spacing }}>
            <Input
              type="email"
              label={t('sections.furtherRegistration.form.email.label')}
              name="email"
              prefix={<Icon name="mail" color="primary" />}
              placeholder={t(
                'sections.furtherRegistration.form.email.placeholder'
              )}
            />
          </div>

          <Input
            type="number"
            label={t('sections.furtherRegistration.form.number.label')}
            name="mobile"
            placeholder={t(
              'sections.furtherRegistration.form.number.placeholder'
            )}
            prefix={<Icon name="phone" color="primary" />}
          />
        </div>

        <div style={{ marginBottom: tokens.spacingXxLarge }}>
          <ToolTip
            helperMessage={t(
              'sections.furtherRegistration.form.number.toolTipHelperMessage'
            )}
            title={t('sections.furtherRegistration.form.number.toolTipTitle')}
          >
            <Typography type="helper-text" color="white">
              {t('sections.furtherRegistration.form.number.toolTipContent')}
            </Typography>
            <Button kind="small" color="light">
              {t('sections.furtherRegistration.form.number.toolTipLink')}
            </Button>
          </ToolTip>
        </div>

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

        <Button kind="primary">
          {t('sections.furtherRegistration.setUpAccount')}
        </Button>
      </PageSection>
    </PageLayout>
  );
};
