import {
  CaregiverPasswordElements,
  useAppEvents,
  useAppState,
  useAppTranslation,
} from 'app';
import {
  Button,
  Heading,
  InformationBanner,
  PageLayout,
  PageSection,
  ProcessBar,
  StepTitle,
  Typography,
} from 'components';
import { tokens } from 'styles';

export const StepFour = () => {
  const t = useAppTranslation();
  const events = useAppEvents();
  const isValid = useAppState('forms.password.validation.valid');

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
            <CaregiverPasswordElements.Password />
          </div>
          <CaregiverPasswordElements.Confirmation />
        </div>

        <div
          style={{
            marginBottom: tokens.spacingXLarge,
          }}
        >
          <CaregiverPasswordElements.TermsAndConditions />
        </div>

        <Button
          kind="primary"
          onClick={events.nextStep}
          submit={true}
          disabled={!isValid}
        >
          {t('sections.furtherRegistration.next')}
        </Button>
      </PageSection>
    </PageLayout>
  );
};
