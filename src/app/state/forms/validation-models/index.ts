/* eslint-disable @typescript-eslint/no-empty-interface */
import { caregiverName } from './caregiver-name';
import { caregiverRelationship } from './caregiver-relationship';
import { identity } from './identity';
import { login } from './login';

declare global {
  interface ModelMap {}

  type ModelKeys = keyof ModelMap;
  type Model<GivenKey extends ModelKeys> = {
    key: GivenKey;
    init: ModelMap[GivenKey];
    validate: (model: Partial<ModelMap[GivenKey]>) => PromiseLike<any>;
    values?: Partial<Record<keyof ModelMap[GivenKey], string[]>>;
  };

  type Models = { [Key in ModelKeys]: Model<Key> };

  type ChangeType<GivenKey extends ModelKeys> = `${GivenKey}Change`;

  type ChangeEventMap = {
    [Key in ModelKeys as ChangeType<Key>]: {
      type: ChangeType<Key>;
      field: keyof ModelMap[Key];
      value: string;
    };
  };
}

// Add a validation model to this export to incorporate it into the forms
// state chart automatically.
//
export const all = [caregiverName, caregiverRelationship, identity, login];

export type { Identity } from './identity';
export type { CaregiverName } from './caregiver-name';
export type { CaregiverRelationship } from './caregiver-relationship';
export type { Login } from './login';
export * from './validation-failure';
