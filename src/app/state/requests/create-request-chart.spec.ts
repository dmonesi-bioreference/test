import {
  composeRequestModels,
  createRequestDispatchMap,
  createRequestActions,
  createRequestChart,
  createRequestContext,
} from './create-request-chart';
import * as Models from './models';
import { RequestKeys } from './request-keys';

describe('createRequestActions', () => {
  const assert = it.each(Models.all.map((model) => model.key));

  assert('returns an error assign action for %s', (key) => {
    const keyNames = RequestKeys.from(key);

    expect(createRequestActions(key)).toHaveProperty(keyNames.error);
  });

  assert('returns an clear errors action for %s', (key) => {
    const keyNames = RequestKeys.from(key);

    expect(createRequestActions(key)).toHaveProperty(keyNames.clear);
  });

  assert('returns a value update action for %s', (key) => {
    const keyNames = RequestKeys.from(key);

    expect(createRequestActions(key)).toHaveProperty(keyNames.update);
  });
});

describe('createRequestContext', () => {
  const assert = it.each(
    Models.all.map((model) => [model.key, model] as const)
  );

  assert('creates a form context for %s', (_, model) => {
    expect(createRequestContext(model)).toEqual({
      values: model.init,
      errors: [],
    });
  });
});

describe('createRequestChart', () => {
  const assert = it.each(
    Models.all.map((model) => [model.key, model] as const)
  );

  assert('preserves the given key %s', (key, model) => {
    const chart = createRequestChart(model);

    expect(chart.key).toEqual(key);
  });

  assert('bundles the actions for %s', (key, model) => {
    const chart = createRequestChart(model);
    const actions = Object.keys(createRequestActions(key));

    for (const action of actions) {
      expect(chart.actions).toHaveProperty(action);
    }
  });

  assert('bundles the context in a nested field marked %s', (key, model) => {
    const chart = createRequestChart(model);

    expect(chart.context).toHaveProperty(key);
  });

  assert(
    'bundles the state chart in a nested field marked %s',
    (key, model) => {
      const chart = createRequestChart(model);

      expect(chart.machine).toHaveProperty(key);
    }
  );
});

describe('composeRequestModels', () => {
  const [sampleModel] = Models.all;
  const modelCount = Models.all.length;
  const result = composeRequestModels(...Models.all);

  it('merges all given models into one structure', () => {
    expect(result).toEqual(
      expect.objectContaining({
        actions: expect.anything(),
        context: expect.anything(),
        machine: expect.anything(),
      })
    );
  });

  it('includes all model actions', () => {
    const actionCount = Object.keys(
      createRequestActions(sampleModel.key)
    ).length;

    expect(Object.keys(result.actions)).toHaveLength(modelCount * actionCount);
  });

  it('provides a context for each model', () => {
    expect(Object.keys(result.context)).toHaveLength(modelCount);
  });

  it('provides a machine for each model', () => {
    expect(Object.keys(result.machine)).toHaveLength(modelCount);
  });
});

describe('createRequestDispatchMap', () => {
  const requestDispatchMap = createRequestDispatchMap(...Models.all);

  const assert = it.each(
    Models.all.map((model) => [model.key, model] as const)
  );

  assert('creates handlers for %s', (key) => {
    const keyName = RequestKeys.from(key);
    const empty: any = () => undefined;
    const map = requestDispatchMap(empty);

    expect(map).toHaveProperty(keyName.request);
  });

  assert('calls init when the handler for %s is invoked', (key) => {
    const keyName = RequestKeys.from(key);
    const listener = jest.fn();
    const map = requestDispatchMap(listener);

    expect(map).toHaveProperty(keyName.request);
  });
});
