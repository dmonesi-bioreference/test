import { useAppEvents, useAppSelector } from 'app/components/Shell';

export function useCaregiverRelationshipField(
  field: keyof ValidationModelMap['caregiverRelationship']
) {
  const { caregiverRelationshipChange } = useAppEvents();
  const caregiverRelationship = useAppSelector(
    (state) => state.context.forms.caregiverRelationship
  );

  const state = {
    errors: caregiverRelationship.errors
      .filter((error) => error.field === field)
      .map((error) => error.message),
    value: caregiverRelationship.values[field],
  };

  const events = {
    update: (value: string) => caregiverRelationshipChange({ field, value }),
  };

  return [state, events] as const;
}
