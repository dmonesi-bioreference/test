import { motion } from 'framer-motion';

import { ConsentElements } from 'app/components/ConsentElements';
import {
  useAppEvents,
  useAppState,
  useAppTranslation,
} from 'app/components/Shell';
import { Button } from 'components/Button';
import { Heading } from 'components/Typography';
import { slideInOut } from 'styles/animations';

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

  return (
    <motion.form
      variants={slideInOut.variants}
      initial={slideInOut.states.enter}
      animate={slideInOut.states.center}
      exit={slideInOut.states.exit}
      transition={slideInOut.transition}
      onSubmit={(event) => event.preventDefault()}
    >
      <ConsentElements.Terms />
      <ConsentElements.Consent />
      <Button
        kind="primary"
        onClick={events.nextStep}
        submit={true}
        disabled={!isValid}
      >
        {t('sections.furtherRegistration.continue')}
      </Button>
    </motion.form>
  );
}
