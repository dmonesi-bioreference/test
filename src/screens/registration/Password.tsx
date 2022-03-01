import { motion } from 'framer-motion';
import { useEffect } from 'react';

import { RegistrationPageLayout } from 'app/components/AppLayout';
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
import { List } from 'components/List';
import { ProcessBar } from 'components/ProcessBar';
import { Typography } from 'components/Typography';
import { slideInOut } from 'styles/animations';
import { tokens } from 'styles/tokens';
import { trackSignUpFlowEvent } from 'tracking';

export function Password() {
  const t = useAppTranslation();
  const events = useAppEvents();
  const isValid = useAppState('forms.password.validation.valid');
  const isRegistering = useAppState('auth.registering');
  const errors = useAppSelector((state) => state.context.auth.errors);
  const anyErrors = errors.length > 0;
  const submitButtonText = t('sections.furtherRegistration.next');

  useEffect(() => {
    trackSignUpFlowEvent({
      signUpStep: 'password',
      signUpButtonText: submitButtonText,
    });
  }, [submitButtonText]);

  return (
    <>
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
        <RegistrationPageLayout
          description={t('sections.furtherRegistration.stepFour.subTitle')}
          subTitle="Step 4"
        >
          <ProcessBar stepsAmount={4} currentStep={4} />
          <Grid>
            <InformationBanner
              title={t('sections.furtherRegistration.inputValidation.title')}
            >
              <List kind="bulleted">
                <Typography type="list">
                  {t('sections.furtherRegistration.inputValidation.characters')}
                </Typography>
                <Typography type="list">
                  {t('sections.furtherRegistration.inputValidation.letters')}
                </Typography>
                <Typography type="list">
                  {t(
                    'sections.furtherRegistration.inputValidation.capitalization'
                  )}
                </Typography>
                <Typography type="list">
                  {t('sections.furtherRegistration.inputValidation.numbers')}
                </Typography>
              </List>
            </InformationBanner>

            <CaregiverPasswordElements.Password />
            <CaregiverPasswordElements.Confirmation />
          </Grid>

          <Button
            kind="primary"
            onClick={events.register}
            submit={true}
            disabled={!isValid || isRegistering}
          >
            {submitButtonText}
          </Button>
        </RegistrationPageLayout>
      </motion.form>
    </>
  );
}
