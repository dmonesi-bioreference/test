import { useState } from 'react';

import { useAppTranslation } from 'app/components/Shell';
import { Checkbox } from 'components/Checkbox';

import { useConsentField } from './hooks';
import { AppInputProps } from './types';

export function Consent({ label: givenLabel }: Props<AppInputProps>) {
  const t = useAppTranslation();
  const [{ value, errors }, events] = useConsentField('consent');
  const [isPristine, setPristine] = useState(true);
  const label = givenLabel ? givenLabel : t('forms.consent.consent.label');

  return (
    <Checkbox
      label={label}
      name="consent"
      size="large"
      invalid={errors.length > 0 && !isPristine}
      invalidMessage={errors.map(t).join(' ')}
      checked={value === 'given'}
      onChange={(event) =>
        events.update(event.currentTarget.checked ? 'given' : 'not-given')
      }
      onBlur={() => setPristine(false)}
    />
  );
}
