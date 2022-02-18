import { useAppEvents, useAppSelector } from 'app/components/Shell';

export function useCaregiverContactField(
  field: keyof ValidationModelMap['caregiverContact']
) {
  const { caregiverContactChange } = useAppEvents();
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
    },
  };

  return [state, events] as const;
}
