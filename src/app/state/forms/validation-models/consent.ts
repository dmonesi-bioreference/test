import * as yup from 'yup';

import { toErrorList } from './validation-failure';

export interface Consent {
  consent: ConsentGiven;
  terms: TermsAccepted;
}

declare global {
  type ConsentGiven = 'given' | 'not-given';
  type TermsAccepted = 'accepted' | 'not-accepted';

  interface ValidationModelMap {
    consent: Consent;
  }
}

const schema = yup.object().shape({
  consent: yup
    .string()
    .oneOf(['given'], 'forms.consent.consent.errors.required')
    .required('forms.consent.consent.errors.required'),
  terms: yup
    .string()
    .oneOf(['accepted'], 'forms.consent.terms.errors.required')
    .required('forms.consent.terms.errors.required'),
});

export const validateConsent = async (
  consent: Partial<ValidationModelMap['consent']>
) => await schema.validate(consent, { abortEarly: false }).catch(toErrorList);

export const consent: ValidationModels['consent'] = {
  key: 'consent',
  init: { terms: 'not-accepted', consent: 'not-given' },
  validate: validateConsent,
};
