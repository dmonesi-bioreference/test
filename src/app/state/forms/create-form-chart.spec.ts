import {
  composeFormModels,
  createChangeDispatchMap,
  createFormActions,
  createFormChart,
  createFormContext,
  createFormServices,
} from './create-form-chart';
import { FormKeys } from './form-keys';
import * as Models from './validation-models';

describe('createFormActions', () => {
  const assert = it.each(Models.all.map((model) => model.key));

  assert('returns an error assign action for %s', (key) => {
    const keyNames = FormKeys.from(key);

    expect(createFormActions(key)).toHaveProperty(keyNames.errors);
  });

  assert('returns an clear errors action for %s', (key) => {
    const keyNames = FormKeys.from(key);

    expect(createFormActions(key)).toHaveProperty(keyNames.clear);
  });

  assert('returns a value update action for %s', (key) => {
    const keyNames = FormKeys.from(key);

    expect(createFormActions(key)).toHaveProperty(keyNames.update);
  });
});

describe('createFormContext', () => {
  const assert = it.each(
    Models.all.map((model) => [model.key, model] as const)
  );

  assert('creates a form context for %s', (_, model) => {
    expect(createFormContext(model)).toEqual({
      values: model.init,
      errors: [],
    });
  });
});

describe('createFormServices', () => {
  const assert = it.each(
    Models.all.map((model) => [model.key, model] as const)
  );

  assert('creates a validation service for %s', (key, model) => {
    const keyNames = FormKeys.from(key);

    expect(createFormServices(model)).toHaveProperty(keyNames.validate);
  });
});

describe('createFormChart', () => {
  const assert = it.each(
    Models.all.map((model) => [model.key, model] as const)
  );

  assert('preserves the given key %s', (key, model) => {
    const chart = createFormChart(model);

    expect(chart.key).toEqual(key);
  });

  assert('bundles the actions for %s', (key, model) => {
    const chart = createFormChart(model);
    const actions = Object.keys(createFormActions(key));

    for (const action of actions) {
      expect(chart.actions).toHaveProperty(action);
    }
  });

  assert('bundles the services for %s', (_, model) => {
    const chart = createFormChart(model);
    const services = Object.keys(createFormServices(model));

    for (const service of services) {
      expect(chart.services).toHaveProperty(service);
    }
  });

  assert('bundles the context in a nested field marked %s', (key, model) => {
    const chart = createFormChart(model);

    expect(chart.context).toHaveProperty(key);
  });

  assert(
    'bundles the state chart in a nested field marked %s',
    (key, model) => {
      const chart = createFormChart(model);

      expect(chart.machine).toHaveProperty(key);
    }
  );
});

describe('composeFormModels', () => {
  const [sampleModel] = Models.all;
  const modelCount = Models.all.length;
  const result = composeFormModels(...Models.all);

  it('merges all given models into one structure', () => {
    expect(result).toEqual(
      expect.objectContaining({
        actions: expect.anything(),
        services: expect.anything(),
        context: expect.anything(),
        machine: expect.anything(),
      })
    );
  });

  it('includes all model actions', () => {
    const actionCount = Object.keys(createFormActions(sampleModel.key)).length;

    expect(Object.keys(result.actions)).toHaveLength(modelCount * actionCount);
  });

  it('includes all model services', () => {
    const serviceCount = Object.keys(createFormServices(sampleModel)).length;

    expect(Object.keys(result.services)).toHaveLength(
      modelCount * serviceCount
    );
  });

  it('provides a context for each model', () => {
    expect(Object.keys(result.context)).toHaveLength(modelCount);
  });

  it('provides a machine for each model', () => {
    expect(Object.keys(result.machine)).toHaveLength(modelCount);
  });
});

describe('createChangeDispatchMap', () => {
  const produceMap = createChangeDispatchMap(...Models.all);

  const assert = it.each(
    Models.all.map((model) => [model.key, model] as const)
  );

  assert('creates handlers for %s', (key) => {
    const keyName = FormKeys.from(key);
    const empty: any = () => undefined;
    const map = produceMap(empty);

    expect(map).toHaveProperty(keyName.change);
  });

  assert('invokes commits for %s handlers', (key, model) => {
    const keyName = FormKeys.from(key);
    const listener = jest.fn();
    const [field] = Object.keys(model.init);
    const payload = { value: '', field };
    const map = produceMap(listener);

    map[keyName.change](payload as any);

    expect(listener).toHaveBeenCalledWith(
      Object.assign(payload, { type: keyName.commit })
    );
  });
});
