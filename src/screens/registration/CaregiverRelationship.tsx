import { motion } from 'framer-motion';

import { CaregiverRelationshipElements } from 'app/components/CaregiverRelationshipElements';
import {
  useAppEvents,
  useAppState,
  useAppTranslation,
} from 'app/components/Shell';
import { Button } from 'components/Button';
import { Grid } from 'components/Grid';
import { ProcessBar } from 'components/ProcessBar';
import { StepTitle } from 'components/StepTitle';
import { Typography } from 'components/Typography';
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
      <Grid>
        <StepTitle number="3" />
        <Typography type="body" level="4" alignment="center">
          {t('sections.furtherRegistration.stepThree.subTitle')}
        </Typography>
        <ProcessBar stepsAmount={4} currentStep={3} />
      </Grid>
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
      <Grid verticalPadding="small">
        <CaregiverRelationshipElements.Relationship />
        <CaregiverRelationshipElements.DateOfBirth />
        <Button
          kind="primary"
          onClick={events.nextStep}
          submit={true}
          disabled={!isValid}
        >
          {t('sections.furtherRegistration.next')}
        </Button>
      </Grid>
    </motion.form>
  );
}
