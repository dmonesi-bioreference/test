import { UserIcon } from '@heroicons/react/outline';
import { useState } from 'react';

import { useAppTranslation } from 'app/components/Shell';
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

  const formatPhoneNumber = (phone: string) => {
    phone = phone.replace(/[^\d]/g, '');
    const phoneNumberLength = phone.length;
    if (phoneNumberLength < 4) return phone;
    if (phoneNumberLength < 7) {
      return `(${phone.slice(0, 3)}) ${phone.slice(3)}`;
    }
    if (phoneNumberLength > 6) {
      return `(${phone.slice(0, 3)}) ${phone.slice(3, 6)}-${phone.slice(
        6,
        10
      )}`;
    }
    return phone;
  };

  return (
    <Input
      type="tel"
      name="number"
      label={label}
      placeholder={placeholder || t('forms.caregiverContact.phone.placeholder')}
      prefix={<UserIcon className="input__icon--primary" />}
      invalid={errors.length > 0 && !isPristine}
      invalidMessage={errors.map(t).join(' ')}
      value={formatPhoneNumber(value)}
      onBlur={() => setPristine(false)}
      onChange={(event) => events.update(event.target.value)}
    />
  );
}
