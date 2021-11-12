import { useAppEvents, useAppSelector } from 'app/components/Shell';

export function useLoginField(field: keyof ValidationModelMap['login']) {
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
