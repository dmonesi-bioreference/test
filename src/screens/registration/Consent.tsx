import { motion } from 'framer-motion';
import { useEffect } from 'react';

import { ConsentElements } from 'app/components/ConsentElements';
import {
  useAppEvents,
  useAppSelector,
  useAppState,
  useAppTranslation,
} from 'app/components/Shell';
import { Button } from 'components/Button';
import { Grid } from 'components/Grid';
import { Heading } from 'components/Typography';
import { slideInOut } from 'styles/animations';
import { trackSignUpFlowEvent } from 'tracking';

export function ConsentHeader() {
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
        {t('sections.furtherRegistration.consent.title')}
      </Heading>
    </motion.div>
  );
}

export function Consent() {
  const t = useAppTranslation();
  const events = useAppEvents();
  const isValid = useAppState('forms.consent.validation.valid');
  const isSms = useAppSelector(
    (state) => state.context.auth.patientSource === 'SMS'
  );
  const submitButtonText = t('sections.furtherRegistration.continue');

  useEffect(() => {
    trackSignUpFlowEvent({
      signUpStep: 'consent',
      signUpMethod: isSms ? 'SMS' : 'email',
      signUpButtonText: submitButtonText,
    });
  }, [isSms, submitButtonText]);

  return (
    <motion.form
      variants={slideInOut.variants}
      initial={slideInOut.states.enter}
      animate={slideInOut.states.center}
      exit={slideInOut.states.exit}
      transition={slideInOut.transition}
      onSubmit={(event) => event.preventDefault()}
    >
      <Grid spacing="small" verticalPadding="extraLarge">
        <ConsentElements.Terms />
        <ConsentElements.Consent />
      </Grid>
      <Button
        kind="primary"
        onClick={events.nextStep}
        submit={true}
        disabled={!isValid}
      >
        {submitButtonText}
      </Button>
    </motion.form>
  );
}
