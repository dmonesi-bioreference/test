import { useState } from 'react';

import { useAppTranslation } from 'app/components/Shell';
import { Icon } from 'components/Icon';
import { Input } from 'components/Input';

import { useCaregiverContactField } from './hooks';
import { AppInputProps } from './types';

export function PhoneNumber({
  label: givenLabel,
  placeholder,
}: Props<AppInputProps>) {
  const t = useAppTranslation();
  const [{ value, errors }, events] = useCaregiverContactField('phone');
  const [isPristine, setPristine] = useState(true);
  const label = givenLabel
    ? givenLabel
    : t('forms.caregiverContact.phone.label');

  return (
    <Input
      type="tel"
      name="number"
      label={label}
      placeholder={placeholder || t('forms.caregiverContact.phone.placeholder')}
      prefix={<Icon name="phone" color="primary" />}
      invalid={errors.length > 0 && !isPristine}
      invalidMessage={errors.map(t).join(' ')}
      value={value}
      onBlur={() => setPristine(false)}
      onChange={(event) => events.update(event.target.value)}
    />
  );
}
