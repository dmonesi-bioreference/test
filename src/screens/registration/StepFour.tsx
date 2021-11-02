import { useAppTranslation } from 'app';
import {
  Button,
  Checkbox,
  Heading,
  InformationBanner,
  PageLayout,
  PageSection,
  ProcessBar,
  StepTitle,
  Typography,
  PasswordInput,
} from 'components';
import { tokens } from 'styles';

export const StepFour = () => {
  const t = useAppTranslation();

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
              marginBottom: tokens.spacingXxLarge,
            }}
          >
            <StepTitle number="4" />
            <Heading level="4" alignment="center">
              {t('sections.furtherRegistration.stepFour.subTitle')}
            </Heading>
            <ProcessBar stepsAmount={4} currentStep={4} />
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
            <PasswordInput
              label={t('sections.furtherRegistration.form.password.label')}
              name="password"
            />
          </div>
          <PasswordInput
            label={t('sections.furtherRegistration.form.confirmPassword.label')}
            name="confirm-password"
          />
        </div>

        <div
          style={{
            marginBottom: tokens.spacingXLarge,
          }}
        >
          <Checkbox
            label={t('sections.furtherRegistration.checkbox.label')}
            name="checkbox"
            size="large"
            linkMessage={t(
              'sections.furtherRegistration.checkbox.termsAndConditionsLink'
            )}
          />
        </div>

        <Button kind="primary">{t('sections.furtherRegistration.next')}</Button>
      </PageSection>
    </PageLayout>
  );
};
