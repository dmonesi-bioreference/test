import { CreateDispatchEvent } from './create-dispatch-event';
import { FormKeys } from './form-keys';
import * as Models from './validation-models';

describe('CreateDispatchEvent', () => {
  const assert = it.each(
    Models.all.map((model) => [model.key, model] as const)
  );

  assert('permits sending of matched payloads for %s', async (key, model) => {
    const keyName = FormKeys.from(key);
    const fields = Object.keys(model.init);

    for (const field of fields) {
      const listener = jest.fn();
      const event = CreateDispatchEvent.from(listener);
      const payload = { type: keyName.commit, field, value: 'new value' };

      event.perform(model, payload);

      expect(listener).toHaveBeenCalledWith(payload);
    }
  });

  assert(
    'ignores payloads with the wrong fields for %s',
    async (key, model) => {
      const keyName = FormKeys.from(key);
      const listener = jest.fn();
      const event = CreateDispatchEvent.from(listener);

      event.perform(model, {
        type: keyName.commit,
        field: 'a completely mismatched field name',
        value: '',
      });

      expect(listener).not.toHaveBeenCalled();
    }
  );

  assert('ignores mismatched payloads for %s', async (key, model) => {
    const listener = jest.fn();
    const event = CreateDispatchEvent.from(listener);

    event.perform(model, { type: 'arglebargle' });

    expect(listener).not.toHaveBeenCalled();
  });
});
