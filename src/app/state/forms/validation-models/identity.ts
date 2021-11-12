import * as yup from 'yup';
import 'yup-phone';

import { toErrorList } from './validation-failure';

export interface Identity {
  dob: string;
  email: string;
  zip: string;
  phone: string;
}

declare global {
  interface ValidationModelMap {
    identity: Identity;
  }
}

const US_ZIP_CODE = /(^\d{5}$)|(^\d{5}-\d{4}$)|^$/;

const zip = yup
  .string()
  .trim()
  .required('forms.identity.zip.errors.required')
  .matches(US_ZIP_CODE, { message: 'forms.identity.zip.errors.invalid' });

const dob = yup.string().trim().required('forms.identity.dob.errors.required');
const email = yup
  .string()
  .trim()
  .email('forms.identity.email.errors.invalid')
  .required('forms.identity.email.errors.required');

const phone = yup
  .string()
  .trim()
  .phone('US', false, 'forms.identity.phone.errors.invalid');

export const validateIdentity = async (identity: Partial<Identity>) => {
  const schema = identity.phone
    ? yup.object().shape({ zip, dob, email, phone })
    : yup.object().shape({ zip, dob, email });

  return await schema
    .validate(identity, { abortEarly: false })
    .catch(toErrorList);
};

export const identity: ValidationModels['identity'] = {
  key: 'identity',
  init: { dob: '', email: '', zip: '', phone: '' },
  validate: validateIdentity,
};
