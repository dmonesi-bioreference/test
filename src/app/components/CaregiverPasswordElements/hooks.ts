import { useAppEvents, useAppSelector } from 'app/components/Shell';

export function useCaregiverPasswordField(
  field: keyof ValidationModelMap['password']
) {
  const { passwordChange } = useAppEvents();
  const caregiverPassword = useAppSelector(
    (state) => state.context.forms.password
  );

  const state = {
    errors: caregiverPassword.errors
      .filter((error) => error.field === field)
      .map((error) => error.message),
    value: caregiverPassword.values[field],
  };

  const events = {
    update: (value: string) => passwordChange({ field, value }),
  };

  return [state, events] as const;
}
