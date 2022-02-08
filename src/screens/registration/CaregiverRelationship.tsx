import { motion } from 'framer-motion';

import { CaregiverRelationshipElements } from 'app/components/CaregiverRelationshipElements';
import {
  useAppEvents,
  useAppState,
  useAppTranslation,
} from 'app/components/Shell';
import { Button } from 'components/Button';
import { ProcessBar } from 'components/ProcessBar';
import { StepTitle } from 'components/StepTitle';
import { Heading } from 'components/Typography';
import { tokens } from 'styles';
import { slideInOut } from 'styles/animations';

export function CaregiverRelationshipHeader() {
  const t = useAppTranslation();
  return (
    <motion.div
      variants={slideInOut.variants}
      initial={slideInOut.states.enter}
      animate={slideInOut.states.center}
      exit={slideInOut.states.exit}
      transition={slideInOut.transition}
    >
      <StepTitle number="3" />
      <Heading level="4" alignment="center">
        {t('sections.furtherRegistration.stepThree.subTitle')}
      </Heading>
      <ProcessBar stepsAmount={4} currentStep={3} />
    </motion.div>
  );
}

export function CaregiverRelationship() {
  const t = useAppTranslation();
  const events = useAppEvents();
  const isValid = useAppState('forms.caregiverRelationship.validation.valid');

  return (
    <motion.form
      variants={slideInOut.variants}
      initial={slideInOut.states.enter}
      animate={slideInOut.states.center}
      exit={slideInOut.states.exit}
      transition={slideInOut.transition}
      onSubmit={(event) => event.preventDefault()}
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
    </motion.form>
  );
}