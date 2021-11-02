import { useState } from 'react';

import { useAppTranslation } from 'app/components/Shell';
import { Icon } from 'components/Icon';
import { Input } from 'components/Input';

import { useIdentityForm } from './hooks';
import { AppInputProps } from './types';

export function ZipCode({
  label: givenLabel,
  placeholder,
}: Props<AppInputProps>) {
  const t = useAppTranslation();
  const [{ values, errors }, events] = useIdentityForm();
  const [isPristine, setPristine] = useState(true);
  const label = givenLabel ? givenLabel : t('forms.identity.email.label');

  return (
    <Input
      type="text"
      name="zipcode"
      label={label}
      placeholder={placeholder || t('forms.identity.zip.placeholder')}
      invalid={errors.zip.length > 0 && !isPristine}
      invalidMessage={errors.zip.map(t).join(' ')}
      prefix={<Icon name="location-marker" color="primary" />}
      value={values.zip}
      onBlur={() => setPristine(false)}
      onChange={(event) => events.update('zip', event.target.value)}
    />
  );
}
