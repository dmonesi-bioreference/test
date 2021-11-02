/* eslint-disable @typescript-eslint/no-empty-interface */

import { SupportedLanguages } from 'localization';
import { Identity, ValidationFailure } from 'models';
import { Themes } from 'styles';

interface FormDetail<GivenType extends object> {
  values: GivenType;
  errors: ValidationFailure[];
}

declare global {
  interface AppContext {
    language: SupportedLanguages;
    theme: Themes;
    auth: { identityCheckAttempts: number };
    forms: { identity: FormDetail<Identity> };
  }
}

export const initialContext: AppContext = {
  language: 'en',
  theme: 'light',
  auth: { identityCheckAttempts: 5 },
  forms: {
    identity: {
      values: { dob: '', email: '', zip: '' },
      errors: [],
    },
  },
};
