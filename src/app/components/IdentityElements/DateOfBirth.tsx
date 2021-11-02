import { useState } from 'react';

import { useAppTranslation } from 'app/components/Shell';
import { Input } from 'components/Input';

import { useIdentityField } from './hooks';
import { AppInputProps } from './types';

export function DateOfBirth({
  label: givenLabel,
  placeholder,
}: Props<AppInputProps>) {
  const t = useAppTranslation();
  const [{ value, errors }, events] = useIdentityField('dob');
  const [isPristine, setPristine] = useState(true);

  const label = givenLabel ? givenLabel : t('forms.identity.dob.label');

  return (
    <Input
      type="date"
      name="date"
      label={label}
      placeholder={placeholder || t('forms.identity.dob.placeholder')}
      invalid={errors.length > 0 && !isPristine}
      invalidMessage={errors.map(t).join(' ')}
      value={value}
      onBlur={() => setPristine(false)}
      onChange={(event) => events.update(event.target.value)}
    />
  );
}
