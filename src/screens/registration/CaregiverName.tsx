import { motion } from 'framer-motion';
import { useEffect } from 'react';

import { RegistrationPageLayout } from 'app/components/AppLayout';
import { CaregiverNameElements } from 'app/components/CaregiverNameElements';
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
      <RegistrationPageLayout
        title={t('sections.furtherRegistration.stepOne.title')}
        description={t('sections.furtherRegistration.stepOne.subTitle')}
      >
        <ProcessBar stepsAmount={4} currentStep={1} />
        <Grid>
          <CaregiverNameElements.FirstName />
          <CaregiverNameElements.LastName />
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
