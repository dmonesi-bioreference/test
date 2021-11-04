import { useAppEvents, useAppSelector } from 'app/components/Shell';
import { Login } from 'models';

export function useLoginField(field: keyof Login) {
  const { loginChange } = useAppEvents();
  const login = useAppSelector((state) => state.context.forms.login);

  const state = {
    errors: login.errors
      .filter((error) => error.field === field)
      .map((error) => error.message),
    value: login.values[field],
  };

  const events = {
    update: (value: string) => loginChange({ field, value }),
  };

  return [state, events] as const;
}
