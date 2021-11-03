import { ValidationFailure } from 'models';

interface FormDetail<GivenType extends object> {
  values: GivenType;
  errors: ValidationFailure[];
}

export function createFormContext<GivenModel extends ModelKeys>(
  model: ModelMap[GivenModel]
): FormDetail<ModelMap[GivenModel]> {
  return {
    values: model,
    errors: [],
  };
}
