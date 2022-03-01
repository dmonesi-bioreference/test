import { motion } from 'framer-motion';
import { useEffect } from 'react';

import { RegistrationPageLayout } from 'app/components/AppLayout';
import { CaregiverContactElements } from 'app/components/CaregiverContactElements';
import {
  useAppEvents,
  useAppState,
  useAppTranslation,
} from 'app/components/Shell';
import { Button } from 'components/Button';
import { Grid } from 'components/Grid';
import { ProcessBar } from 'components/ProcessBar';
import { slideInOut } from 'styles/animations';
import { trackSignUpFlowEvent } from 'tracking';

export function CaregiverContact() {
  const t = useAppTranslation();
  const events = useAppEvents();
  const isValid = useAppState('forms.caregiverContact.validation.valid');
  const submitButtonText = t('sections.furtherRegistration.next');

  useEffect(() => {
    trackSignUpFlowEvent({
      signUpStep: 'contact',
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
      <RegistrationPageLayout
        description={t('sections.furtherRegistration.stepTwo.subTitle')}
        subTitle="Step 2"
      >
        <ProcessBar stepsAmount={4} currentStep={2} />
        <Grid>
          <CaregiverContactElements.EmailAddress />
          <CaregiverContactElements.PhoneNumber />
        </Grid>
        <Button
          kind="primary"
          onClick={events.nextStep}
          submit={true}
          disabled={!isValid}
        >
          {submitButtonText}
        </Button>
      </RegistrationPageLayout>
    </motion.form>
  );
}
