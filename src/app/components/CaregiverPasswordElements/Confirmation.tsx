import { useState } from 'react';

import { useAppTranslation } from 'app/components/Shell';
import { PasswordInput } from 'components/PasswordInput';

import { useCaregiverPasswordField } from './hooks';
import { AppInputProps } from './types';

export function Confirmation({ label: givenLabel }: Props<AppInputProps>) {
  const t = useAppTranslation();
  const [{ value, errors }, events] = useCaregiverPasswordField('confirmation');
  const [isPristine, setPristine] = useState(true);
  const label = givenLabel
    ? givenLabel
    : t('forms.password.confirmation.label');

  return (
    <PasswordInput
      name="password"
      label={label}
      invalid={errors.length > 0 && !isPristine}
      invalidMessage={errors.map(t).join(' ')}
      value={value}
      onBlur={() => setPristine(false)}
      onChange={(event) => events.update(event.target.value)}
    />
  );
}
