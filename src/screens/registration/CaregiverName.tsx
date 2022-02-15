import { motion } from 'framer-motion';
import { useEffect } from 'react';

import { CaregiverNameElements } from 'app/components/CaregiverNameElements';
import {
  useAppEvents,
  useAppState,
  useAppTranslation,
} from 'app/components/Shell';
import { Button } from 'components/Button';
import { Grid } from 'components/Grid';
import { ProcessBar } from 'components/ProcessBar';
import { Heading, Typography } from 'components/Typography';
import { slideInOut } from 'styles/animations';
import { trackSignUpFlowEvent } from 'tracking';

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
      <Grid>
        <Heading level="1" alignment="center">
          {t('sections.furtherRegistration.stepOne.title')}
        </Heading>
        <Typography type="body" level="4" alignment="center">
          {t('sections.furtherRegistration.stepOne.subTitle')}
        </Typography>
        <ProcessBar stepsAmount={4} currentStep={1} />
      </Grid>
    </motion.div>
  );
}

export function CaregiverName() {
  const t = useAppTranslation();
  const events = useAppEvents();
  const isValid = useAppState('forms.caregiverName.validation.valid');
  const submitButtonText = t('sections.furtherRegistration.next');

  useEffect(() => {
    trackSignUpFlowEvent({
      signUpStep: 'name',
      signUpButtonText: submitButtonText,
    });
  }, [submitButtonText]);

  return (
    <motion.form
      variants={slideInOut.variants}
      initial={slideInOut.states.enter}
      animate={slideInOut.states.center}
      exit={slideInOut.states.exit}
      transition={slideInOut.transition}
      onSubmit={(event) => event.preventDefault()}
    >
      <Grid>
        <CaregiverNameElements.FirstName />
        <CaregiverNameElements.LastName />

        <Button
          kind="primary"
          onClick={events.nextStep}
          submit={true}
          disabled={!isValid}
        >
          {submitButtonText}
        </Button>
      </Grid>
    </motion.form>
  );
}
