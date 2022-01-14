import capitalize from 'lodash/capitalize';

import { FormKeys } from './form-keys';
import * as Models from './validation-models';

describe('FormKeys', () => {
  const assert = it.each(Models.all.map((model) => model.key));

  assert('creates a clear errors key for %s', (key) => {
    expect(FormKeys.from(key).clear).toEqual(`@forms/clear/${key}`);
  });

  assert('creates an errors key for %s', (key) => {
    expect(FormKeys.from(key).errors).toEqual(`@forms/error/${key}`);
  });

  assert('creates a commit key for %s', (key) => {
    expect(FormKeys.from(key).commit).toEqual(`@forms/commit/${key}`);
  });

  assert('creates a change key for %s', (key) => {
    expect(FormKeys.from(key).change).toEqual(`${key}Change`);
  });

  assert('creates an update key for %s', (key) => {
    expect(FormKeys.from(key).update).toEqual(`@forms/update/${key}`);
  });

  assert('creates a validate key for %s', (key) => {
    expect(FormKeys.from(key).validate).toEqual(`@forms/validate/${key}`);
  });

  assert('creates a capitalized id for %s', (key) => {
    expect(FormKeys.from(key).id).toEqual(capitalize(key));
  });

  assert('coerces into a string matching %s', (key) => {
    expect(`${FormKeys.from(key)}`).toEqual(key);
  });
});
