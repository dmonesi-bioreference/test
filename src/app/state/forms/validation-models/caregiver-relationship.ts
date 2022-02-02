import * as yup from 'yup';

import { dob } from './date-of-birth';
import { toErrorList } from './validation-failure';

const parent = 'Parent' as const;
const guardian = 'Guardian' as const;
const caregiver = 'Care Giver' as const;
const grandparent = 'Grandparent' as const;
const _self = 'Self' as const;
const spouse = 'Spouse' as const;
const child = 'Child' as const;
const grandchild = 'Grandchild' as const;
const sibling = 'Sibling' as const;
export const caregiverRelationshipValues = [parent, guardian, caregiver, grandparent, _self, spouse, child, grandchild, sibling];

declare global {
  interface ValidationModelMap {
    caregiverRelationship: {
      dob: string;
      relationship: typeof parent | typeof guardian | typeof caregiver | typeof
        grandparent | typeof _self | typeof spouse | typeof child | typeof
        grandchild | typeof sibling | '';
    };
  }
}

const schema = yup.object().shape({
  dob: dob({
    future: 'forms.caregiverRelationship.dob.errors.future',
    required: 'forms.caregiverRelationship.dob.errors.required',
  }),
  relationship: yup
    .mixed()
    .oneOf(
      caregiverRelationshipValues,
      'forms.caregiverRelationship.relationship.errors.invalid'
    )
    .required('forms.caregiverRelationship.relationship.errors.required'),
});

export const validateCaregiverRelationship = async (
  caregiverRelationship: Partial<ValidationModelMap['caregiverRelationship']>
) =>
  await schema
    .validate(caregiverRelationship, { abortEarly: false })
    .catch(toErrorList);

export const caregiverRelationship: ValidationModels['caregiverRelationship'] =
  {
    key: 'caregiverRelationship',
    init: { dob: '', relationship: 'Parent' },
    values: { relationship: caregiverRelationshipValues },
    validate: validateCaregiverRelationship,
  };
