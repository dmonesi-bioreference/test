import { motion } from 'framer-motion';
import { useEffect } from 'react';

import { RegistrationPageLayout } from 'app/components/AppLayout';
import { CaregiverRelationshipElements } from 'app/components/CaregiverRelationshipElements';
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

export function CaregiverRelationship() {
  const t = useAppTranslation();
  const events = useAppEvents();
  const isValid = useAppState('forms.caregiverRelationship.validation.valid');
  const submitButtonText = t('sections.furtherRegistration.next');

  useEffect(() => {
    trackSignUpFlowEvent({
      signUpStep: 'relationship',
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
        description={t('sections.furtherRegistration.stepThree.subTitle')}
        subTitle="Step 3"
      >
        <ProcessBar stepsAmount={4} currentStep={3} />
        <Grid>
          <CaregiverRelationshipElements.Relationship />
          <CaregiverRelationshipElements.DateOfBirth />
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
