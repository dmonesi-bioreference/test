import * as yup from 'yup';

import { PHONE } from './expressions';
import { toErrorList } from './validation-failure';

export interface CaregiverContact {
  email: string;
  phone: string;
}

declare global {
  interface ValidationModelMap {
    caregiverContact: CaregiverContact;
  }
}

const schema = yup.object().shape({
  email: yup
    .string()
    .trim()
    .email('forms.caregiverContact.email.errors.invalid')
    .required('forms.caregiverContact.email.errors.required'),
  phone: yup
    .string()
    .trim()
    .matches(PHONE, {
      message: 'forms.caregiverContact.phone.errors.invalid',
    })
    .required('forms.caregiverContact.phone.errors.required'),
});

export const validateCaregiverContact = async (
  caregiverContact: Partial<ValidationModelMap['caregiverContact']>
) =>
  await schema
    .validate(caregiverContact, { abortEarly: false })
    .catch(toErrorList);

export const caregiverContact: ValidationModels['caregiverContact'] = {
  key: 'caregiverContact',
  init: { email: '', phone: '' },
  validate: validateCaregiverContact,
};
