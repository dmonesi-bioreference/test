import * as yup from 'yup';

import { toErrorList } from './validation-failure';

const parent = 'parent' as const;
const grandparent = 'grandparent' as const;
const sibling = 'sibling' as const;
export const caregiverRelationshipValues = [parent, grandparent, sibling];

export interface CaregiverRelationship {
  dob: string;
  relationship: typeof parent | typeof grandparent | typeof sibling | '';
}

declare global {
  interface ValidationModelMap {
    caregiverRelationship: CaregiverRelationship;
  }
}

const schema = yup.object().shape({
  dob: yup
    .string()
    .trim()
    .required('forms.caregiverRelationship.dob.errors.required'),
  relationship: yup
    .mixed()
    .oneOf(
      caregiverRelationshipValues,
      'forms.caregiverRelationship.relationship.errors.invalid'
    )
    .required('forms.caregiverRelationship.relationship.errors.required'),
});

export const validateCaregiverRelationship = async (
  caregiverRelationship: Partial<CaregiverRelationship>
) =>
  await schema
    .validate(caregiverRelationship, { abortEarly: false })
    .catch(toErrorList);

export const caregiverRelationship: ValidationModels['caregiverRelationship'] =
  {
    key: 'caregiverRelationship',
    init: { dob: '', relationship: '' },
    values: { relationship: caregiverRelationshipValues },
    validate: validateCaregiverRelationship,
  };
