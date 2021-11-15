import {
  CaregiverContactElements,
  useAppEvents,
  useAppState,
  useAppTranslation,
} from 'app';
import {
  Button,
  Heading,
  PageLayout,
  PageSection,
  ProcessBar,
  StepTitle,
} from 'components';
import { tokens } from 'styles';

export const StepTwo = () => {
  const t = useAppTranslation();
  const events = useAppEvents();
  const isValid = useAppState('forms.caregiverContact.validation.valid');

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
            <StepTitle number="2" />
            <Heading level="4" alignment="center">
              {t('sections.furtherRegistration.stepTwo.subTitle')}
            </Heading>
            <ProcessBar stepsAmount={4} currentStep={2} />
          </div>
        }
      >
        <div style={{ marginBottom: tokens.spacingXxxLarge }}>
          <div style={{ marginBottom: tokens.spacing }}>
            <CaregiverContactElements.EmailAddress />
          </div>
          <CaregiverContactElements.PhoneNumber />
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
