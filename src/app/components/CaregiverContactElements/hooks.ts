import { useAppEvents, useAppSelector } from 'app/components/Shell';

export function useCaregiverContactField(
  field: keyof ValidationModelMap['caregiverContact']
) {
  const { identityChange, caregiverContactChange } = useAppEvents();
  const caregiverContact = useAppSelector(
    (state) => state.context.forms.caregiverContact
  );

  const state = {
    errors: caregiverContact.errors
      .filter((error) => error.field === field)
      .map((error) => error.message),
    value: caregiverContact.values[field],
  };

  const events = {
    update: (value: string) => {
      caregiverContactChange({ field, value });
      identityChange({ field, value });
    },
  };

  return [state, events] as const;
}
