import {
  CaregiverRelationshipElements,
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

export const StepThree = () => {
  const t = useAppTranslation();
  const events = useAppEvents();
  const isValid = useAppState('forms.caregiverRelationship.validation.valid');

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
            <StepTitle number="3" />
            <Heading level="4" alignment="center">
              {t('sections.furtherRegistration.stepThree.subTitle')}
            </Heading>
            <ProcessBar stepsAmount={4} currentStep={3} />
          </div>
        }
      >
        <div style={{ marginBottom: tokens.spacingXxSmall }}>
          <div style={{ marginBottom: tokens.spacingXxSmall }}>
            <CaregiverRelationshipElements.Relationship />
          </div>
        </div>

        <div style={{ marginBottom: tokens.spacingXxxLarge }}>
          <CaregiverRelationshipElements.DateOfBirth />
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
