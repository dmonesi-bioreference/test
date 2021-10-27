import * as yup from 'yup';

import { isValidationError } from './validation-failure';

const US_ZIP_CODE = /(^\d{5}$)|(^\d{5}-\d{4}$)|^$/;
const schema = yup.object().shape({
  zip: yup
    .string()
    .trim()
    .required('forms.identity.zip.errors.required')
    .matches(US_ZIP_CODE, { message: 'forms.identity.zip.errors.invalid' }),
  dob: yup.string().trim().required('forms.identity.dob.errors.required'),
  email: yup
    .string()
    .trim()
    .email('forms.identity.email.errors.invalid')
    .required('forms.identity.email.errors.required'),
});

export interface Identity {
  dob: string;
  email: string;
  zip: string;
}

export const validateIdentity = async (identity: Partial<Identity>) =>
  await schema
    .validate(identity, { abortEarly: false })
    .catch((errors: Error) => {
      if (isValidationError(errors)) {
        return Promise.reject(
          errors.inner.map((error) => ({
            field: error.path,
            message: error.message,
          }))
        );
      }
    });
