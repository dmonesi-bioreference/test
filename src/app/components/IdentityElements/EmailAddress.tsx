import { useState } from 'react';

import { useAppTranslation } from 'app/components/Shell';
import { Icon } from 'components/Icon';
import { Input } from 'components/Input';

import { useIdentityField } from './hooks';
import { AppInputProps } from './types';

export function EmailAddress({
  label: givenLabel,
  placeholder,
}: Props<AppInputProps>) {
  const t = useAppTranslation();
  const [{ value, errors }, events] = useIdentityField('email');
  const [isPristine, setPristine] = useState(true);
  const label = givenLabel ? givenLabel : t('forms.identity.email.label');

  return (
    <Input
      type="email"
      name="email"
      label={label}
      placeholder={placeholder || t('forms.identity.email.placeholder')}
      prefix={<Icon name="user" color="primary" />}
      invalid={errors.length > 0 && !isPristine}
      invalidMessage={errors.map(t).join(' ')}
      value={value}
      onBlur={() => setPristine(false)}
      onChange={(event) => events.update(event.target.value)}
    />
  );
}
