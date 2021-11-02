import { assign } from '@xstate/immer';

export const clearIdentityErrors = assign((context: AppContext) => {
  context.forms.identity.errors = [];
});
