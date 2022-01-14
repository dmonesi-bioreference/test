import upperFirst from 'lodash/upperFirst';

import * as Models from './models';
import { RequestKeys } from './request-keys';

describe('RequestKeys', () => {
  const assert = it.each(Models.all.map((model) => model.key));

  assert('creates a capitalized version of %s', (key) => {
    expect(RequestKeys.from(key).id).toEqual(upperFirst(key));
  });

  assert('creates a clear request errors key for %s', (key) => {
    expect(RequestKeys.from(key).clear).toEqual(`@request/clear/${key}`);
  });

  assert('creates an init request key for %s', (key) => {
    expect(RequestKeys.from(key).init).toEqual(`@request/init/${key}`);
  });

  assert('creates a handler key for %s', (key) => {
    expect(RequestKeys.from(key).handler).toEqual(
      `handle${upperFirst(key)}Request`
    );
  });

  assert('creates a request event for %s', (key) => {
    expect(RequestKeys.from(key).request).toEqual(`${key}Request`);
  });

  assert('creates an request errors key for %s', (key) => {
    expect(RequestKeys.from(key).error).toEqual(`@request/error/${key}`);
  });

  assert('creates an update request values key for %s', (key) => {
    expect(RequestKeys.from(key).update).toEqual(`@request/update/${key}`);
  });

  assert('coerces into a string matching %s', (key) => {
    expect(`${RequestKeys.from(key)}`).toEqual(key);
  });
});
