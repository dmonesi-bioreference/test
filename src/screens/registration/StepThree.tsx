import { CaregiverRelationshipElements } from 'app/components/CaregiverRelationshipElements';
import {
  useAppEvents,
  useAppState,
  useAppTranslation,
} from 'app/components/Shell';
import { Button } from 'components/Button';
import { PageLayout } from 'components/PageLayout';
import { PageSection } from 'components/PageSection';
import { ProcessBar } from 'components/ProcessBar';
import { StepTitle } from 'components/StepTitle';
import { Heading } from 'components/Typography';
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
        <form onSubmit={(event) => event.preventDefault()}>
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
        </form>
      </PageSection>
    </PageLayout>
  );
};
