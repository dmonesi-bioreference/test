import { useAppEvents, useAppSelector } from 'app/components/Shell';

export function useIdentityField(field: keyof ValidationModelMap['identity']) {
  const { identityChange, caregiverContactChange } = useAppEvents();
  const identity = useAppSelector((state) => state.context.forms.identity);

  const state = {
    errors: identity.errors
      .filter((error) => error.field === field)
      .map((error) => error.message),
    value: identity.values[field],
  };

  const events = {
    update: (value: string) => {
      identityChange({ field, value });

      if (field === 'email' || field === 'phone') {
        caregiverContactChange({ field, value });
      }
    },
  };

  return [state, events] as const;
}
