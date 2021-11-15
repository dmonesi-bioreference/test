import * as yup from 'yup';

import { toErrorList } from './validation-failure';

declare global {
  interface ValidationModelMap {
    login: {
      email: string;
      password: string;
    };
  }
}

const schema = yup.object().shape({
  email: yup
    .string()
    .trim()
    .email('forms.login.email.errors.invalid')
    .required('forms.login.email.errors.required'),
  password: yup
    .string()
    .trim()
    .required('forms.login.password.errors.required'),
});

export const validateLogin = async (
  login: Partial<ValidationModelMap['login']>
) => await schema.validate(login, { abortEarly: false }).catch(toErrorList);

export const login: ValidationModels['login'] = {
  key: 'login',
  init: { email: '', password: '' },
  validate: validateLogin,
};
