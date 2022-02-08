import { motion } from 'framer-motion';

import { CaregiverContactElements } from 'app/components/CaregiverContactElements';
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

export function CaregiverContactHeader() {
  const t = useAppTranslation();
  return (
    <motion.div
      variants={slideInOut.variants}
      initial={slideInOut.states.enter}
      animate={slideInOut.states.center}
      exit={slideInOut.states.exit}
      transition={slideInOut.transition}
    >
      <StepTitle number="2" />
      <Heading level="4" alignment="center">
        {t('sections.furtherRegistration.stepTwo.subTitle')}
      </Heading>
      <ProcessBar stepsAmount={4} currentStep={2} />
    </motion.div>
  );
}

export function CaregiverContact() {
  const t = useAppTranslation();
  const events = useAppEvents();
  const isValid = useAppState('forms.caregiverContact.validation.valid');

  return (
    <motion.form
      variants={slideInOut.variants}
      initial={slideInOut.states.enter}
      animate={slideInOut.states.center}
      exit={slideInOut.states.exit}
      transition={slideInOut.transition}
      onSubmit={(event) => event.preventDefault()}
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
    </motion.form>
  );
}
