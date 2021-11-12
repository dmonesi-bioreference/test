import capitalize from 'lodash/capitalize';

import { KeyNames } from './key-names';
import * as Models from './validation-models';

describe('KeyNames', () => {
  const assert = it.each(Models.all.map((model) => model.key));

  assert('creates a clear errors key for %s', (key) => {
    expect(KeyNames.from(key).clear).toEqual(`clear${capitalize(key)}Errors`);
  });

  assert('creates an errors key for %s', (key) => {
    expect(KeyNames.from(key).errors).toEqual(`assign${capitalize(key)}Errors`);
  });

  assert('creates a change key for %s', (key) => {
    expect(KeyNames.from(key).change).toEqual(`${key}Change`);
  });

  assert('creates an update key for %s', (key) => {
    expect(KeyNames.from(key).update).toEqual(`update${capitalize(key)}`);
  });

  assert('creates a validate key for %s', (key) => {
    expect(KeyNames.from(key).validate).toEqual(`validate${capitalize(key)}`);
  });

  assert('creates a capitalized id for %s', (key) => {
    expect(KeyNames.from(key).id).toEqual(capitalize(key));
  });

  assert('coerces into a string matching %s', (key) => {
    expect(`${KeyNames.from(key)}`).toEqual(key);
  });
});
