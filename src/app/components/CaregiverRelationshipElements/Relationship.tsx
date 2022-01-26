import { useState } from 'react';

import { useAppTranslation } from 'app/components/Shell';
import { caregiverRelationshipValues } from 'app/state/forms/validation-models/caregiver-relationship';
import { InputHelper } from 'components/InputHelper';
import { Select } from 'components/Select';
import { ToolTip } from 'components/ToolTip';
import { Typography } from 'components/Typography';

import { useCaregiverRelationshipField } from './hooks';
import { AppInputProps } from './types';

export function Relationship({ label: givenLabel }: Props<AppInputProps>) {
  const t = useAppTranslation();
  const [{ value, errors }, events] =
    useCaregiverRelationshipField('relationship');
  const [isPristine, setPristine] = useState(true);

  const label = givenLabel
    ? givenLabel
    : t('forms.caregiverRelationship.relationship.label');

  const caregiverRelationshipOptions = caregiverRelationshipValues.map(
    (relationship) => (
      <option key={relationship} value={relationship}>
        {relationship}
      </option>
    )
  );

  return (
    <Select
      label={label}
      name="select-relationship"
      size="medium"
      labelPosition="top"
      invalid={errors.length > 0 && !isPristine}
      invalidMessage={errors.map(t).join(' ')}
      value={value}
      onBlur={() => setPristine(false)}
      onChange={(event) => events.update(event.target.value)}
      inputHelper={
        <InputHelper
          helperText={t(
            'forms.caregiverRelationship.relationship.toolTipHelperMessage'
          )}
          toolTip={
            <ToolTip
              title={t('forms.caregiverRelationship.relationship.toolTipTitle')}
              placement="bottom"
            >
              <Typography type="helper-text" color="white">
                {t('forms.caregiverRelationship.relationship.toolTipContent')}
              </Typography>
            </ToolTip>
          }
        />
      }
    >
      {caregiverRelationshipOptions}
    </Select>
  );
}
