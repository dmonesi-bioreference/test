import * as yup from 'yup';

import { toErrorList } from './validation-failure';

declare global {
  interface ValidationModelMap {
    password: {
      password: string;
      confirmation: string;
      termsAndConditions: string;
    };
  }
}

const schema = yup.object().shape({
  confirmation: yup
    .string()
    .oneOf(
      [yup.ref('password'), null],
      'forms.password.confirmation.errors.invalid'
    )
    .trim()
    .required('forms.password.confirmation.errors.required'),
  password: yup
    .string()
    .trim()
    .required('forms.password.password.errors.required'),
  termsAndConditions: yup
    .string()
    .oneOf(['accepted'], 'forms.password.termsAndConditions.errors.required')
    .required('forms.password.termsAndConditions.errors.required'),
});

export const validatePassword = async (
  login: Partial<ValidationModelMap['password']>
) => await schema.validate(login, { abortEarly: false }).catch(toErrorList);

export const password: ValidationModels['password'] = {
  key: 'password',
  init: { confirmation: '', password: '', termsAndConditions: '' },
  validate: validatePassword,
};
