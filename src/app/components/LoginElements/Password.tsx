import { useState } from 'react';

import { useAppTranslation } from 'app/components/Shell';
import { PasswordInput } from 'components/PasswordInput';

import { useLoginField } from './hooks';
import { AppInputProps } from './types';

export function Password({
  label: givenLabel,
  placeholder,
}: Props<AppInputProps>) {
  const t = useAppTranslation();
  const [{ value, errors }, events] = useLoginField('password');
  const [isPristine, setPristine] = useState(true);
  const label = givenLabel ? givenLabel : t('forms.login.password.label');

  return (
    <PasswordInput
      name="password"
      label={label}
      placeholder={placeholder || t('forms.login.password.placeholder')}
      invalid={errors.length > 0 && !isPristine}
      invalidMessage={errors.map(t).join(' ')}
      value={value}
      onBlur={() => setPristine(false)}
      onChange={(event) => events.update(event.target.value)}
    />
  );
}
