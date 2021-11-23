import { useState } from 'react';

import { useAppTranslation } from 'app/components/Shell';
import { Checkbox } from 'components';

import { useCaregiverPasswordField } from './hooks';
import { AppInputProps } from './types';

export function TermsAndConditions({
  label: givenLabel,
}: Props<AppInputProps>) {
  const t = useAppTranslation();
  const [{ value, errors }, events] =
    useCaregiverPasswordField('termsAndConditions');
  const [isPristine, setPristine] = useState(true);
  const label = givenLabel
    ? givenLabel
    : t('forms.password.termsAndConditions.label');

  return (
    <Checkbox
      label={label}
      name="checkbox"
      size="large"
      linkMessage={t('forms.password.termsAndConditions.link')}
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
