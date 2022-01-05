import { string } from 'yup';

interface Messages {
  future: string;
  required: string;
}

export const dob = (messages: Messages) =>
  string()
    .trim()
    .test(
      'is-past-date',
      messages.future,

      (value: string | undefined) => {
        try {
          return new Date() >= new Date(value || '');
        } catch (_) {
          return false;
        }
      }
    )
    .required(messages.required);
