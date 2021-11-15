import * as yup from 'yup';

import { toErrorList } from './validation-failure';

declare global {
  interface ValidationModelMap {
    caregiverName: {
      firstName: string;
      lastName: string;
    };
  }
}

const schema = yup.object().shape({
  firstName: yup
    .string()
    .trim()
    .required('forms.caregiverName.firstName.errors.required'),
  lastName: yup
    .string()
    .trim()
    .required('forms.caregiverName.lastName.errors.required'),
});

export const validateCaregiverName = async (
  caregiverName: Partial<ValidationModelMap['caregiverName']>
) =>
  await schema
    .validate(caregiverName, { abortEarly: false })
    .catch(toErrorList);

export const caregiverName: ValidationModels['caregiverName'] = {
  key: 'caregiverName',
  init: { firstName: '', lastName: '' },
  validate: validateCaregiverName,
};
