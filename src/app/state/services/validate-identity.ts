import { validateIdentity as validateIdentityModel } from 'models';

export const validateIdentity = (context: AppContext) =>
  validateIdentityModel(context.forms.identity.values);
