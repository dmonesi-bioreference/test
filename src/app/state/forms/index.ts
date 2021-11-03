import * as Models from 'models';

import {
  createFormActions,
  createFormContext,
  createFormMachine,
} from './utils';

const IdentityChange = 'identityChange' as const;
const LoginChange = 'loginChange' as const;

declare global {
  interface AppEventMap {
    [IdentityChange]: {
      type: typeof IdentityChange;
      field: keyof Models.Identity;
      value: string;
    };
    [LoginChange]: {
      type: typeof LoginChange;
      field: keyof Models.Login;
      value: string;
    };
  }
}

export const actions = Object.assign(
  createFormActions(Models.identity.key),
  createFormActions(Models.login.key)
);

export const services = {
  validateIdentity: (context: AppContext) =>
    Models.identity.validate(context.forms.identity.values),
  validateLogin: (context: AppContext) =>
    Models.login.validate(context.forms.login.values),
};

export const context = {
  identity: createFormContext(Models.identity.init),
  login: createFormContext(Models.login.init),
};

export const machine = {
  type: 'parallel',
  states: {
    identity: createFormMachine(Models.identity.key),
    login: createFormMachine(Models.login.key),
  },
};
