import * as yup from 'yup';

import { dob } from './date-of-birth';
import { PHONE } from './expressions';
import { toErrorList } from './validation-failure';

declare global {
  interface ValidationModelMap {
    identity: {
      dob: string;
      email: string;
      zip: string;
      phone: string;
    };
  }
}

const US_ZIP_CODE = /(^\d{5}$)|(^\d{5}-\d{4}$)|^$/;

const zip = yup
  .string()
  .trim()
  .required('forms.identity.zip.errors.required')
  .matches(US_ZIP_CODE, { message: 'forms.identity.zip.errors.invalid' });

const email = yup
  .string()
  .trim()
  .email('forms.identity.email.errors.invalid')
  .required('forms.identity.email.errors.required');

const phone = yup
  .string()
  .trim()
  .matches(PHONE, { message: 'forms.identity.phone.errors.invalid' });

export const validateIdentity = async (
  identity: Partial<ValidationModelMap['identity']>
) => {
  const schema = identity.phone
    ? yup.object().shape({
        zip,
        dob: dob({
          future: 'forms.identity.dob.errors.future',
          required: 'forms.identity.dob.errors.required',
        }),
        phone,
      })
    : yup.object().shape({
        zip,
        dob: dob({
          future: 'forms.identity.dob.errors.future',
          required: 'forms.identity.dob.errors.required',
        }),
        email,
      });

  return await schema
    .validate(identity, { abortEarly: false })
    .catch(toErrorList);
};

export const identity: ValidationModels['identity'] = {
  key: 'identity',
  init: { dob: '', email: '', zip: '', phone: '' },
  validate: validateIdentity,
};
