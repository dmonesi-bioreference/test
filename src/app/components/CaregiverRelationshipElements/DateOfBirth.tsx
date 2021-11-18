import { useState } from 'react';

import { useAppTranslation } from 'app/components/Shell';
import { InputHelper, ToolTip, Typography } from 'components';
import { Input } from 'components/Input';

import { useCaregiverRelationshipField } from './hooks';
import { AppInputProps } from './types';

export function DateOfBirth({ label: givenLabel }: Props<AppInputProps>) {
  const t = useAppTranslation();
  const [{ value, errors }, events] = useCaregiverRelationshipField('dob');
  const [isPristine, setPristine] = useState(true);

  const label = givenLabel
    ? givenLabel
    : t('forms.caregiverRelationship.dob.label');

  return (
    <Input
      type="date"
      name="date"
      label={label}
      invalid={errors.length > 0 && !isPristine}
      invalidMessage={errors.map(t).join(' ')}
      value={value}
      onBlur={() => setPristine(false)}
      onChange={(event) => events.update(event.target.value)}
      inputHelper={
        <InputHelper
          helperText={t('forms.caregiverRelationship.dob.toolTipHelperMessage')}
          toolTip={
            <ToolTip
              title={t('forms.caregiverRelationship.dob.toolTipTitle')}
              placement="bottom"
            >
              <Typography type="helper-text" color="white">
                {t('forms.caregiverRelationship.dob.toolTipContent')}
              </Typography>
            </ToolTip>
          }
        />
      }
    />
  );
}
