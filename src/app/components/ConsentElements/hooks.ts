import { useAppEvents, useAppSelector } from 'app/components/Shell';

export function useConsentField(field: keyof ValidationModelMap['consent']) {
  const { consentChange } = useAppEvents();
  const consent = useAppSelector(({ context }) => context.forms.consent);

  const state = {
    errors: consent.errors
      .filter((error) => error.field === field)
      .map((error) => error.message),
    value: consent.values[field],
  };

  const events = {
    update: (value: string) => consentChange({ field, value }),
  };

  return [state, events] as const;
}
