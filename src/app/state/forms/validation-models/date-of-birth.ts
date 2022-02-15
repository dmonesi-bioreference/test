import { string } from 'yup';

interface CaregiverDOBMessages {
  future: string;
  required: string;
}

export const caregiverDob = (messages: CaregiverDOBMessages) =>
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

interface PatientDOBMessages {
  required: string;
}

export const patientDob = (messages: PatientDOBMessages) =>
  string().trim().required(messages.required);
