import { useAppEvents, useAppSelector } from 'app/components/Shell';

export function useCaregiverNameField(
  field: keyof ValidationModelMap['caregiverName']
) {
  const { caregiverNameChange } = useAppEvents();
  const login = useAppSelector((state) => state.context.forms.caregiverName);

  const state = {
    errors: login.errors
      .filter((error) => error.field === field)
      .map((error) => error.message),
    value: login.values[field],
  };

  const events = {
    update: (value: string) => caregiverNameChange({ field, value }),
  };

  return [state, events] as const;
}
