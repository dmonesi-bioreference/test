import {
  CaregiverNameElements,
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
} from 'components';
import { tokens } from 'styles';

export const StepOne = () => {
  const t = useAppTranslation();
  const events = useAppEvents();
  const isValid = useAppState('forms.caregiverName.validation.valid');

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
            <Heading level="1" alignment="center">
              {t('sections.furtherRegistration.stepOne.title')}
            </Heading>
            <Heading level="4" alignment="center">
              {t('sections.furtherRegistration.stepOne.subTitle')}
            </Heading>
            <ProcessBar stepsAmount={4} currentStep={1} />
          </div>
        }
      >
        <div style={{ marginBottom: tokens.spacingXxLarge }}>
          <div style={{ marginBottom: tokens.spacing }}>
            <CaregiverNameElements.FirstName />
          </div>
          <CaregiverNameElements.LastName />
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
