/* eslint-disable @typescript-eslint/no-empty-interface */
import { caregiverContact } from './caregiver-contact';
import { caregiverName } from './caregiver-name';
import { caregiverRelationship } from './caregiver-relationship';
import { identity } from './identity';
import { login } from './login';
import { password } from './password';

declare global {
  interface ValidationModelMap {}

  type ValidationModelKey = keyof ValidationModelMap;
  type ValidationModel<GivenKey extends ValidationModelKey> = {
    key: GivenKey;
    init: ValidationModelMap[GivenKey];
    validate: (
      model: Partial<ValidationModelMap[GivenKey]>
    ) => PromiseLike<any>;
    values?: Partial<Record<keyof ValidationModelMap[GivenKey], string[]>>;
  };

  type ValidationModels = { [Key in ValidationModelKey]: ValidationModel<Key> };

  type ChangeType<GivenKey extends ValidationModelKey> = `${GivenKey}Change`;

  type ChangeEventMap = {
    [Key in ValidationModelKey as ChangeType<Key>]: {
      type: ChangeType<Key>;
      field: keyof ValidationModelMap[Key];
      value: string;
    };
  };
}

// Add a validation model to this export to incorporate it into the forms
// state chart automatically.
//
export const all = [
  caregiverName,
  caregiverRelationship,
  identity,
  login,
  password,
  caregiverContact,
];

export * from './validation-failure';
