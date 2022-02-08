import * as yup from 'yup';

import { toErrorList } from './validation-failure';

declare global {
  interface ValidationModelMap {
    password: {
      password: string;
      confirmation: string;
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
    .min(8, 'forms.password.password.errors.short')
    .matches(
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/,
      'forms.password.password.errors.invalid'
    )
    .required('forms.password.password.errors.required'),
});

export const validatePassword = async (
  login: Partial<ValidationModelMap['password']>
) => await schema.validate(login, { abortEarly: false }).catch(toErrorList);

export const password: ValidationModels['password'] = {
  key: 'password',
  init: { confirmation: '', password: '' },
  validate: validatePassword,
};
