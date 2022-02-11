import { motion } from 'framer-motion';

import { CaregiverPasswordElements } from 'app/components/CaregiverPasswordElements';
import {
  useAppEvents,
  useAppSelector,
  useAppState,
  useAppTranslation,
} from 'app/components/Shell';
import { Button } from 'components/Button';
import { Grid } from 'components/Grid';
import { InformationBanner } from 'components/InformationBanner';
import { ProcessBar } from 'components/ProcessBar';
import { StepTitle } from 'components/StepTitle';
import { Typography } from 'components/Typography';
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
      <Grid>
        <StepTitle number="4" />
        <Typography type="body" level="4" alignment="center">
          {t('sections.furtherRegistration.stepFour.subTitle')}
        </Typography>
        <ProcessBar stepsAmount={4} currentStep={4} />
      </Grid>
    </motion.div>
  );
}

export function Password() {
  const t = useAppTranslation();
  const events = useAppEvents();
  const isValid = useAppState('forms.password.validation.valid');
  const isRegistering = useAppState('auth.registering');
  const errors = useAppSelector((state) => state.context.auth.errors);
  const anyErrors = errors.length > 0;

  return (
    <>
      <motion.div style={{ marginBottom: tokens.spacingLarge }}>
        <InformationBanner
          title={t('sections.furtherRegistration.inputValidation.title')}
        >
          <ul>
            <li>
              <Typography type="list">
                {t('sections.furtherRegistration.inputValidation.characters')}
              </Typography>
            </li>
            <li>
              <Typography type="list">
                {t('sections.furtherRegistration.inputValidation.letters')}
              </Typography>
            </li>
            <li>
              <Typography type="list">
                {t(
                  'sections.furtherRegistration.inputValidation.capitalization'
                )}
              </Typography>
            </li>
            <li>
              <Typography type="list">
                {t('sections.furtherRegistration.inputValidation.numbers')}
              </Typography>
            </li>
          </ul>
        </InformationBanner>
      </motion.div>

      {anyErrors ? (
        <InformationBanner
          title={t('sections.furtherRegistration.stepFour.errors.title')}
          type="error"
        >
          <div style={{ marginBottom: tokens.spacing }}>
            {errors.map((error) => (
              <Typography type="body" key={error}>
                <strong>{error}</strong>
              </Typography>
            ))}
          </div>
        </InformationBanner>
      ) : null}
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
          disabled={!isValid || isRegistering}
        >
          {t('sections.furtherRegistration.next')}
        </Button>
      </motion.form>
    </>
  );
}
