import * as yup from 'yup';

import { toErrorList } from './validation-failure';

export interface Login {
  email: string;
  password: string;
}

declare global {
  interface ModelMap {
    login: Login;
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

export const validateLogin = async (login: Partial<Login>) =>
  await schema.validate(login, { abortEarly: false }).catch(toErrorList);

export const login: Models['login'] = {
  key: 'login',
  init: { email: '', password: '' },
  validate: validateLogin,
};
