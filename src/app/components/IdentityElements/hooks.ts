import { useAppEvents, useAppSelector } from 'app/components/Shell';
import { Identity } from 'models';

export function useIdentityField(field: keyof Identity) {
  const { identityChange } = useAppEvents();
  const identity = useAppSelector((state) => state.context.forms.identity);

  const state = {
    errors: identity.errors
      .filter((error) => error.field === field)
      .map((error) => error.message),
    value: identity.values[field],
  };

  const events = {
    update: (value: string) => identityChange({ field, value }),
  };

  return [state, events] as const;
}
