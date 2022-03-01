import { motion } from 'framer-motion';
import { useEffect } from 'react';

import { RegistrationPageLayout } from 'app/components/AppLayout';
import { ConsentElements } from 'app/components/ConsentElements';
import { Content } from 'app/components/ContentElements/Content';
import {
  useAppEvents,
  useAppSelector,
  useAppState,
  useAppTranslation,
} from 'app/components/Shell';
import { Button } from 'components/Button';
import { Grid } from 'components/Grid';
import { ScrollArea } from 'components/ScrollArea';
import { slideInOut } from 'styles/animations';
import { trackSignUpFlowEvent } from 'tracking';

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
      <RegistrationPageLayout
        title={t('sections.furtherRegistration.consent.title')}
      >
        <ScrollArea>
          <Content withBreaks={true}>{t('forms.consent.description')}</Content>
        </ScrollArea>
        <Grid spacing="small">
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
      </RegistrationPageLayout>
    </motion.form>
  );
}
