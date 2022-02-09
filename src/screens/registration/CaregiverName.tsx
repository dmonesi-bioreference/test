import { motion } from 'framer-motion';

import { CaregiverNameElements } from 'app/components/CaregiverNameElements';
import {
  useAppEvents,
  useAppState,
  useAppTranslation,
} from 'app/components/Shell';
import { Button } from 'components/Button';
import { ProcessBar } from 'components/ProcessBar';
import { Heading } from 'components/Typography';
import { slideInOut } from 'styles/animations';
import { tokens } from 'styles/tokens';

export function CaregiverNameHeader() {
  const t = useAppTranslation();

  return (
    <motion.div
      variants={slideInOut.variants}
      initial={slideInOut.states.enter}
      animate={slideInOut.states.center}
      exit={slideInOut.states.exit}
      transition={slideInOut.transition}
    >
      <Heading level="1" alignment="center">
        {t('sections.furtherRegistration.stepOne.title')}
      </Heading>
      <Heading level="4" alignment="center">
        {t('sections.furtherRegistration.stepOne.subTitle')}
      </Heading>
      <ProcessBar stepsAmount={4} currentStep={1} />
    </motion.div>
  );
}

export function CaregiverName() {
  const t = useAppTranslation();
  const events = useAppEvents();
  const isValid = useAppState('forms.caregiverName.validation.valid');

  return (
    <motion.form
      variants={slideInOut.variants}
      initial={slideInOut.states.enter}
      animate={slideInOut.states.center}
      exit={slideInOut.states.exit}
      transition={slideInOut.transition}
      onSubmit={(event) => event.preventDefault()}
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
    </motion.form>
  );
}
