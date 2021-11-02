import { assign } from '@xstate/immer';

export const reduceIdentityAttempts = assign((context: AppContext) => {
  context.auth.identityCheckAttempts--;
});
