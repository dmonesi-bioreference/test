import { UserIcon } from '@heroicons/react/outline';
import { useState } from 'react';

import { useAppTranslation } from 'app/components/Shell';
import { Input } from 'components/Input';

import { useCaregiverNameField } from './hooks';
import { AppInputProps } from './types';

export function LastName({
  label: givenLabel,
  placeholder,
}: Props<AppInputProps>) {
  const t = useAppTranslation();
  const [{ value, errors }, events] = useCaregiverNameField('lastName');
  const [isPristine, setPristine] = useState(true);
  const label = givenLabel
    ? givenLabel
    : t('forms.caregiverName.lastName.label');

  return (
    <Input
      type="text"
      name="lastName"
      label={label}
      placeholder={placeholder || t('forms.caregiverName.lastName.placeholder')}
      prefix={<UserIcon className="input__icon--primary" />}
      invalid={errors.length > 0 && !isPristine}
      invalidMessage={errors.map(t).join(' ')}
      value={value}
      onBlur={() => setPristine(false)}
      onChange={(event) => events.update(event.target.value)}
    />
  );
}
