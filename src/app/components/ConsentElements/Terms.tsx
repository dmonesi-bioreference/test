import { useState } from 'react';

import { useAppEvents, useAppTranslation } from 'app/components/Shell';
import { ActionGroup } from 'components/ActionGroup';
import { Button } from 'components/Button';
import { Checkbox } from 'components/Checkbox';
import { Grid } from 'components/Grid';
import { Modal } from 'components/Modal';
import { ScrollArea } from 'components/ScrollArea';
import { Heading } from 'components/Typography';
import { TermsAndConditionsContent } from 'screens/TermsAndConditions/TermsAndConditionsContent';

import { useConsentField } from './hooks';
import { AppInputProps } from './types';

export function Terms({ label: givenLabel }: Props<AppInputProps>) {
  const t = useAppTranslation();
  const [{ value, errors }, events] = useConsentField('terms');
  const [isPristine, setPristine] = useState(true);
  const label = givenLabel
    ? givenLabel
    : t('forms.consent.agreement.terms.label');

  const [isTermsVisible, setTermsVisible] = useState(false);

  const { consentChange } = useAppEvents();
  function setAcceptTerms() {
    consentChange({ field: 'terms', value: 'accepted' });
  }

  const TermsAndConditionsModal = (
    <Modal
      opened={isTermsVisible}
      onClose={() => setTermsVisible(false)}
      fullscreen
    >
      <Grid>
        <Heading>Terms and Conditions</Heading>
        <ScrollArea>
          <TermsAndConditionsContent />
        </ScrollArea>

        <ActionGroup>
          <Button
            onClick={() => {
              setTermsVisible(false);
              setAcceptTerms();
            }}
            kind="primary"
          >
            {t('forms.consent.agreement.termsModal.agree')}
          </Button>
          <Button href="https://genedx.com" kind="link-medium">
            {t('forms.consent.agreement.termsModal.disagree')}
          </Button>
        </ActionGroup>
      </Grid>
    </Modal>
  );

  return (
    <>
      {isTermsVisible && TermsAndConditionsModal}
      <Checkbox
        label={label}
        name="terms"
        size="large"
        linkMessage={t('forms.consent.agreement.terms.link')}
        onLinkClick={() => setTermsVisible(true)}
        invalid={errors.length > 0 && !isPristine}
        invalidMessage={errors.map(t).join(' ')}
        checked={value === 'accepted'}
        onChange={(event) =>
          events.update(
            event.currentTarget.checked ? 'accepted' : 'not-accepted'
          )
        }
        onBlur={() => setPristine(false)}
      />
    </>
  );
}
