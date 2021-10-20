import { ValidationError } from 'yup';

export interface ValidationFailure {
  field: string;
  message: string;
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
