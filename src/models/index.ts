/* eslint-disable @typescript-eslint/no-empty-interface */
import { identity } from './identity';
import { login } from './login';

declare global {
  interface ModelMap {}

  type ModelKeys = keyof ModelMap;
  type Model<GivenKey extends ModelKeys> = {
    key: GivenKey;
    init: ModelMap[GivenKey];
    validate: (model: Partial<ModelMap[GivenKey]>) => PromiseLike<any>;
  };

  type Models = { [Key in ModelKeys]: Model<Key> };
}

export const all = [identity, login];

export * from './identity';
export * from './login';
export * from './validation-failure';
