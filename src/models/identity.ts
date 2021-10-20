import * as yup from 'yup';
import 'yup-phone';

import { isValidationError } from './validation-failure';

const US_ZIP_CODE = /(^\d{5}$)|(^\d{5}-\d{4}$)/;
const schema = yup.object().shape(
  {
    phone: yup
      .string()
      .phone('US', false, 'forms.identity.phone.errors.invalid')
      .when('email', {
        is: (email: string) => !email || email.length === 0,
        then: yup
          .string()
          .trim()
          .required('forms.identity.phone.errors.required'),
      }),
    zip: yup
      .string()
      .trim()
      .required('forms.identity.zip.errors.required')
      .matches(US_ZIP_CODE, { message: 'forms.identity.zip.errors.invalid' }),
    email: yup
      .string()
      .email('forms.identity.email.errors.invalid')
      .when('phone', {
        is: (phone: string) => !phone || phone.length === 0,
        then: yup
          .string()
          .trim()
          .required('forms.identity.email.errors.required'),
      }),
  },
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  ['email', 'phone']
);

export interface Identity {
  email: string;
  phone: string;
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
