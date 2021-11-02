export const canCheckIdentity = (context: AppContext) =>
  context.auth.identityCheckAttempts > 0;
