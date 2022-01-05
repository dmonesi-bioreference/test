import { ValidationError } from 'yup';

declare global {
  interface ValidationFailure<Field extends string = string> {
    field: Field;
    message: string;
  }
}

export const isValidationFailurePayload = (
  candidate: unknown
): candidate is ValidationFailure[] => {
  return (
    Array.isArray(candidate) &&
    candidate.every((member) => 'field' in member && 'message' in member)
  );
};

export const isValidationError = (
  candidate: Error
): candidate is ValidationError => candidate.name === 'ValidationError';

export const toErrorList = (errors: Error) => {
  if (isValidationError(errors)) {
    return Promise.reject(
      errors.inner.map((error) => ({
        field: error.path,
        message: error.message,
      }))
    );
  }
};
