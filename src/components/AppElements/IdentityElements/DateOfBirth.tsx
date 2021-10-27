import { useState } from 'react';

import { Input } from 'components/Input';
import { useAppTranslation } from 'components/Shell';

import { useIdentityForm } from './hooks';
import { AppInputProps } from './types';

export function DateOfBirth({
  label: givenLabel,
  placeholder,
}: Props<AppInputProps>) {
  const t = useAppTranslation();
  const [{ values, errors }, events] = useIdentityForm();
  const [isPristine, setPristine] = useState(true);

  const label = givenLabel ? givenLabel : t('forms.identity.dob.label');

  return (
    <Input
      type="date"
      name="date"
      label={label}
      placeholder={placeholder || t('forms.identity.dob.placeholder')}
      invalid={errors.dob.length > 0 && !isPristine}
      invalidMessage={errors.dob.map(t).join(' ')}
      value={values.dob}
      onBlur={() => setPristine(false)}
      onChange={(event) => events.update('dob', event.target.value)}
    />
  );
}
