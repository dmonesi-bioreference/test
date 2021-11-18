import * as yup from 'yup';

import { toErrorList } from './validation-failure';

const parent = 'Parent' as const;
const grandparent = 'Grandparent' as const;
const sibling = 'Sibling' as const;
export const caregiverRelationshipValues = [parent, grandparent, sibling];

declare global {
  interface ValidationModelMap {
    caregiverRelationship: {
      dob: string;
      relationship: typeof parent | typeof grandparent | typeof sibling | '';
    };
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
