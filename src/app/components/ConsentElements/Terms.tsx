import { useState } from 'react';

import { useAppTranslation } from 'app/components/Shell';
import { Checkbox } from 'components/Checkbox';

import { useConsentField } from './hooks';
import { AppInputProps } from './types';

export function Terms({ label: givenLabel }: Props<AppInputProps>) {
  const t = useAppTranslation();
  const [{ value, errors }, events] = useConsentField('terms');
  const [isPristine, setPristine] = useState(true);
  const label = givenLabel ? givenLabel : t('forms.consent.agreement.terms.label');

  return (
    <Checkbox
      label={label}
      name="terms"
      size="large"
      linkMessage={t('forms.consent.agreement.terms.link')}
      invalid={errors.length > 0 && !isPristine}
      invalidMessage={errors.map(t).join(' ')}
      checked={value === 'accepted'}
      onChange={(event) =>
        events.update(event.currentTarget.checked ? 'accepted' : 'not-accepted')
      }
      onBlur={() => setPristine(false)}
    />
  );
}
