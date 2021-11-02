import { assign } from '@xstate/immer';

import { isValidationFailurePayload } from 'models';

export const assignIdentityErrors = assign(
  (context: AppContext, event: AppEvents) => {
    const data = 'data' in event ? event?.data : {};

    if (isValidationFailurePayload(data)) {
      context.forms.identity.errors = data;
    }
  }
);
