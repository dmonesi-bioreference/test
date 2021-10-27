import { useAppEvents, useAppSelector } from 'components/Shell';
import { Identity } from 'models';

type Fields = keyof Identity;

export function useIdentityForm() {
  const errorMap = {} as Record<Fields, string[]>;
  const events = useAppEvents();

  const { values, errors } = useAppSelector(
    (state) => state.context.forms.identity
  );

  for (const field of Object.keys(values)) {
    errorMap[field] = errors
      .filter((error) => error.field === field)
      .map((error) => error.message);
  }

  const formEvents = {
    check: () => events.checkIdentity(),
    update: (field: Fields, value: string) =>
      events.identityChange({ field, value }),
  };

  return [{ values, errors: errorMap }, formEvents] as const;
}
