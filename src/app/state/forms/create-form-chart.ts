import { assign } from '@xstate/immer';
import capitalize from 'lodash/capitalize';

import {
  isValidationFailurePayload,
  ValidationFailure,
} from './validation-models';

// What follows is a convolution of types that results from Typescript not
// presently offering support for this notation:
//
//     type FormChart<GivenKey extends ModelKeys> =
//       ReturnType<typeof createFormChart<GivenKey>>
//
// (Try it out yourself, if it works, you can use that instead of the following.)
//
// We create an intermediate class type to serve as a function wrapper, or else
// we can't get an inference on the return type off of our function.
//
// This is never actually invoked, it's simply to inform Typescript's checker.
//
class CreateFormChart<GivenKey extends ModelKeys> {
  result(givenModelKey: GivenKey) {
    return createFormMachine<GivenKey>(givenModelKey);
  }
}

declare global {
  // Now that we're putting the type in a spot where we know Typescript offers
  // type syntax, we can get a derived generic.
  type FormChart<GivenKey extends ModelKeys> = ReturnType<
    CreateFormChart<GivenKey>['result']
  >;

  // This one is simple enough: A repeated structure we use for all form contexts.
  // No type wizardry here.
  //
  interface FormDetail<GivenType extends object> {
    values: GivenType;
    errors: ValidationFailure[];
  }

  // We formally declare our form context shape. Every time we add a validator
  // model to the system, it expands our context type to anticipate the
  // inclusion of that model.
  //
  type FormContext = {
    [Key in ModelKeys]: FormDetail<ModelMap[Key]>;
  };

  // The machine type payoff: a derived type that tells us what the form schema
  // ought to be, without a circular reference. This lets us automate things
  // enough elsewhere to allow for us to spit out new form models in a small
  // loop.
  //
  type FormSchema = {
    [GivenKey in ModelKeys]: FormChart<GivenKey>;
  };
}

function createFormActions<GivenKey extends ModelKeys>(key: GivenKey) {
  const id = capitalize(key) as Capitalize<GivenKey>;

  const assignErrors = `assign${id}Errors` as const;
  const clearErrors = `clear${id}Errors` as const;
  const update = `update${id}` as const;
  const changeEvent = `${key}Change` as const;

  return {
    [assignErrors]: assign((context: AppContext, event: AppEvents) => {
      const data = 'data' in event ? event?.data : {};

      if (isValidationFailurePayload(data)) {
        context.forms[key].errors = data;
      }
    }),
    [clearErrors]: assign((context: AppContext) => {
      context.forms[key].errors = [];
    }),
    [update]: assign((context: AppContext, event: AppEvents) => {
      if (event.type === changeEvent && 'field' in event && 'value' in event) {
        context.forms[key].values[event.field] = event.value;
      }
    }),
  } as const;
}

function createFormContext<GivenModel extends ModelKeys>(
  model: Models[GivenModel]
): FormDetail<ModelMap[GivenModel]> {
  return {
    values: model.init as ModelMap[GivenModel],
    errors: [],
  };
}

function createFormServices<GivenModel extends ModelKeys>(
  model: Models[GivenModel]
) {
  const key = model.key as GivenModel;
  const validateKey = `validate${capitalize(
    key
  )}` as `validate${Capitalize<GivenModel>}`;

  return {
    [validateKey]: (context: AppContext) =>
      model.validate(context.forms[key].values),
  } as const;
}

export function createFormMachine<GivenKey extends ModelKeys>(key: GivenKey) {
  const id = capitalize(key);
  const validation = `#${key}.validation.validating` as const;
  const change = `${key}Change` as const;
  const update = `update${id}` as `update${Capitalize<GivenKey>}`;
  const validate = `validate${id}` as `validate${Capitalize<GivenKey>}`;
  const clearErrors =
    `clear${id}Errors` as `clear${Capitalize<GivenKey>}Errors`;
  const assignErrors =
    `assign${id}Errors` as `assign${Capitalize<GivenKey>}Errors`;

  return {
    id: key,
    type: 'parallel' as const,
    states: {
      activity: {
        initial: 'idle' as const,
        states: {
          active: {
            after: { 300: validation },
            on: { [change]: { target: 'active', actions: update } },
          },
          idle: { on: { [change]: { target: 'active', actions: update } } },
        },
      },
      validation: {
        initial: 'pristine' as const,
        states: {
          pristine: {},
          valid: {},
          invalid: {},
          validating: {
            invoke: {
              src: validate,
              onDone: { target: 'valid', actions: clearErrors },
              onError: { target: 'invalid', actions: assignErrors },
            },
          },
        },
      },
    },
  };
}

export function createFormChart<GivenKey extends ModelKeys>(
  model: Models[GivenKey]
) {
  const key = model.key as GivenKey;

  return {
    key,
    actions: createFormActions(key),
    services: createFormServices(model),
    context: { [key]: createFormContext(model) },
    machine: { [key]: createFormMachine(key) },
  } as const;
}

export function composeFormModels(...models: Models[ModelKeys][]) {
  const initial = {
    actions: {},
    services: {},
    context: {} as FormContext,
    machine: {} as FormSchema,
  };
  return models.reduce((modelChartsSoFar, currentModel) => {
    const modelChart = createFormChart(currentModel);

    return {
      actions: { ...modelChartsSoFar.actions, ...modelChart.actions },
      services: { ...modelChartsSoFar.services, ...modelChart.services },
      context: { ...modelChartsSoFar.context, ...modelChart.context },
      machine: { ...modelChartsSoFar.machine, ...modelChart.machine },
    };
  }, initial);
}
