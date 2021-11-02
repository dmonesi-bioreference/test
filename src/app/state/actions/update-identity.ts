import { assign } from '@xstate/immer';

export const updateIdentity = assign(
  (context: AppContext, event: AppEvents) => {
    if (
      event.type === 'identityChange' &&
      'field' in event &&
      'value' in event
    ) {
      context.forms.identity.values[event.field] = event.value;
    }
  }
);
