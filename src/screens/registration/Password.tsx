import { motion } from 'framer-motion';

import { CaregiverPasswordElements } from 'app/components/CaregiverPasswordElements';
import {
  useAppEvents,
  useAppState,
  useAppTranslation,
} from 'app/components/Shell';
import { Button } from 'components/Button';
import { InformationBanner } from 'components/InformationBanner';
import { ProcessBar } from 'components/ProcessBar';
import { StepTitle } from 'components/StepTitle';
import { Heading, Typography } from 'components/Typography';
import { slideInOut } from 'styles/animations';
import { tokens } from 'styles/tokens';

export function PasswordHeader() {
  const t = useAppTranslation();

  return (
    <motion.div
      variants={slideInOut.variants}
      initial={slideInOut.states.enter}
      animate={slideInOut.states.center}
      exit={slideInOut.states.exit}
      transition={slideInOut.transition}
    >
      <StepTitle number="4" />
      <Heading level="4" alignment="center">
        {t('sections.furtherRegistration.stepFour.subTitle')}
      </Heading>
      <ProcessBar stepsAmount={4} currentStep={4} />
    </motion.div>
  );
}

export function Password() {
  const t = useAppTranslation();
  const events = useAppEvents();
  const isValid = useAppState('forms.password.validation.valid');

  return (
    <>
      <motion.div style={{ marginBottom: tokens.spacingLarge }}>
        <InformationBanner
          title={t('sections.furtherRegistration.inputValidation.title')}
        >
          <Typography type="list">
            {t('sections.furtherRegistration.inputValidation.characters')}
          </Typography>
          <Typography type="list">
            {t('sections.furtherRegistration.inputValidation.letters')}
          </Typography>
          <Typography type="list">
            {t('sections.furtherRegistration.inputValidation.capitalization')}
          </Typography>
          <Typography type="list">
            {t('sections.furtherRegistration.inputValidation.numbers')}
          </Typography>
        </InformationBanner>
      </motion.div>

      <motion.form
        variants={slideInOut.variants}
        initial={slideInOut.states.enter}
        animate={slideInOut.states.center}
        exit={slideInOut.states.exit}
        transition={slideInOut.transition}
        onSubmit={(event) => event.preventDefault()}
      >
        <div style={{ marginBottom: tokens.spacingLarge }}>
          <div style={{ marginBottom: tokens.spacing }}>
            <CaregiverPasswordElements.Password />
          </div>
          <CaregiverPasswordElements.Confirmation />
        </div>

        <Button
          kind="primary"
          onClick={events.register}
          submit={true}
          disabled={!isValid}
        >
          {t('sections.furtherRegistration.next')}
        </Button>
      </motion.form>
    </>
  );
}
