import { assign } from '@xstate/immer';

import { CreateDispatchEvent } from './create-dispatch-event';
import { FormKeys } from './form-keys';
import { isValidationFailurePayload } from './validation-models';

/**
 * This abstract class is never instantiated or inherited. Instead, it exists
 * in order to facilitate a workaround that lets us get return types of a
 * function with a generic type parameter.
 *
 * Consider the following:
 *
 *     type FormChart<GivenKey extends ModelKeys> =
 *       ReturnType<typeof createFormChart<GivenKey>>
 *
 * The above type signature is attempting to pull the return value off of a
 * function, and passing in a generic parameter to narrow the type. This sort
 * of syntax just doesn't work (as of the time of writing, at least).
 *
 * Enter the CreateFormChart. This abstract class takes a generic parameter,
 * and then has an instance method that gives back the guaranteed return type
 * of the function we want to derive a type from.
 *
 * If at the time of reading this, the simpler type notation (or some other
 * alternative) works, feel free to throw this out.
 *
 * @class CreateFormChart
 */
abstract class CreateFormChart<GivenKey extends ValidationModelKey> {
  result(givenModelKey: GivenKey) {
    return createFormMachine<GivenKey>(givenModelKey);
  }
}

declare global {
  /**
   * FormChart is a derived type that accepts a ValidationModelKey, and predicts
   * the exact schema of the form in our app chart. We use this to create type-
   * safe keypaths throughout the application, generated from validation models.
   */
  type FormChart<GivenKey extends ValidationModelKey> = ReturnType<
    CreateFormChart<GivenKey>['result']
  >;

  /**
   * FormDetail is a repeated structure used for storing form values and validation
   * errors in the app state. It accepts a validation model type and creates a
   * type-restricted wrapper that contains the data which the model guarantees, and
   * any error messages related to that model's validation.
   */
  interface FormDetail<
    GivenType extends ValidationModelMap[ValidationModelKey]
  > {
    values: GivenType;
    errors: ValidationFailure[];
  }

  /**
   * FormContext is a derived type that creates a mapping of each of the validation
   * models to the app context. This lets us dynamically expand selectors to include
   * data from all validation models, and informs intellisense about where the context
   * is.
   *
   * FormContext does this work in order to prevent circular references in our types.
   * In other words, we formally derive our app data here, explicitly linking it to our
   * validation models, in order to prevent Typescript from running in (lengthy) circles
   * trying to infer it all.
   */
  type FormContext = {
    [Key in ValidationModelKey]: FormDetail<ValidationModelMap[Key]>;
  };

  /**
   * FormSchema is the final derived type of the validation-model-and-form family,
   * it says "here are all the form schemas you can expect". This works with our
   * state.matches() keypath types in much the same way the {FormContext} does
   * with our app state selectors.
   */
  type FormSchema = {
    [GivenKey in ValidationModelKey]: FormChart<GivenKey>;
  };
}

/**
 * createFormActions is a type-safe factory designed to create the exact
 * set of actions needed for a given validation model key. It creates
 * an error assign, an error clear, and a form value update action, and
 * produces them in an object with the correct names for the form chart
 * to consume.
 *
 * In most cases (and definitely this one), the factory function is meant
 * mostly to create a single point of change, and then govern that with
 * as strong a typing as we can manage.
 *
 * @param givenKey {ValidationModelKey} - The key of a validation model from
 * the validation model map.
 * @returns - An object containing the actions needed for a form chart.
 */
export function createFormActions<GivenKey extends ValidationModelKey>(
  givenKey: GivenKey
) {
  const key = FormKeys.from(givenKey);

  return {
    [key.errors]: assign((context: AppContext, event: AppEvents) => {
      const data = 'data' in event ? event?.data : {};

      if (isValidationFailurePayload(data)) {
        context.forms[givenKey].errors = data;
      }
    }),
    [key.clear]: assign((context: AppContext) => {
      context.forms[givenKey].errors = [];
    }),
    [key.update]: assign((context: AppContext, event: AppEvents) => {
      const empty = { field: '', value: '' };
      if (event.type === key.commit) {
        const { field, value } = { ...empty, ...event };

        context.forms[givenKey].values[field] = value;
      }
    }),
  } as const;
}

/**
 * createFormContext is a thin wrapper taking a validation model, and
 * returning that model in a strongly typed payload, fit for inclusion
 * in a state chart context.
 *
 * @param model {ValidationModel} - A validation model with at minimum
 * an `init` property with its starting values.
 * @returns A payload containing the starting values of the given model,
 * and an empty list where validation and form errors can go.
 */
export function createFormContext<GivenKey extends ValidationModelKey>(
  model: ValidationModels[GivenKey]
): FormDetail<ValidationModelMap[GivenKey]> {
  return {
    values: model.init as ValidationModelMap[GivenKey],
    errors: [],
  };
}

/**
 * createFormServices is a factory function that handles the
 * establishment of a services object, containing the validation
 * handler that the form charts use to ensure data contained is
 * ready for use.
 *
 * @param model {ValidationModel} - A validation model with a key
 * value, which must be a `ValidationModelKey`, and a validation
 * property, which must be some kind of validation function..
 * @returns An object containing a validation service, that sets
 * up the validator to execute whenever a form chart validates
 * its current values.
 */
export function createFormServices<GivenModel extends ValidationModelKey>(
  model: ValidationModels[GivenModel]
) {
  const key = FormKeys.from(model.key);

  return {
    [key.validate]: (context: AppContext) =>
      model.validate(context.forms[model.key].values),
  } as const;
}

/**
 * createFormMachine handles the actual behavior modeling of the form
 * states surrounding all of the validation models.
 *
 * These charts do the following:
 *
 *  - The chart is pristine if it has not yet been changed.
 *  - If the chart has been changed, activity.active is true.
 *  - After 300 ms, the chart attempts to validate the changes.
 *  - If the validation succeeds, the chart becomes idle and valid.
 *  - Else, the chart becomes idle and invalid.
 *
 * All of these steps are governed by xstate, and the bulk of the logic
 * is encapsulated here. Like most of the factory functions, the main
 * purpose here is type safety amidst repetition. However, the generated
 * text for all of the functions is in the service of lining things up
 * with this function.
 *
 * If you ever need to change form logic, that journey begins here.
 *
 * @param key {ValidationModelKey} - A key of the validation model map
 * @returns A state chart which models out the workflows surrounding
 * the validation and activity of the given form.
 */
export function createFormMachine<GivenKey extends ValidationModelKey>(
  givenKey: GivenKey
) {
  const key = FormKeys.from(givenKey);

  return {
    id: key,
    type: 'parallel' as const,
    states: {
      activity: {
        initial: 'idle' as const,
        states: {
          active: {
            after: { 300: `#${key}.validation.validating` },
            on: {
              [key.commit]: {
                target: 'active',
                actions: [key.update],
              },
            },
          },
          idle: {
            on: {
              [key.commit]: {
                target: 'active',
                actions: [key.update],
              },
            },
          },
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
              src: key.validate,
              onDone: { target: 'valid', actions: key.clear },
              onError: { target: 'invalid', actions: key.errors },
            },
          },
        },
      },
    },
  };
}

/**
 * createFormChart is the all-in-one factory function which combines
 * all of the above factory functions into one single function call.
 * Again, the design of all of this is merely to create a typesafe
 * context and schema for the rest of the app to use, and to do so in
 * a deterministic and automated fashion.
 *
 * Given a validation model, you can produce a valid state chart using
 * this function.
 *
 * @param model {ValidationModel} - A validation model to use for the
 * construction of form chart content.
 * @returns A payload of objects generated by internal factory functions,
 * designed to be a typesafe thing to include in automatically generated
 * charts.
 */
export function createFormChart<GivenKey extends ValidationModelKey>(
  model: ValidationModels[GivenKey]
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

/**
 * composeFormModels takes a list of validation models, turns each of
 * them into a form chart, and aggregates them into a single list. This
 * list can then be used to construct a full, parallel chart for each
 * validation model, as exported from the `app/state/forms` package.
 *
 * @param models {ValidationModel[]} - A list of validation models
 * @returns A payload object with an actions, services, context, and
 * machine property, each as typesafe as we can manage at this point.
 */
export function composeFormModels(
  ...models: ValidationModels[ValidationModelKey][]
) {
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

/**
 * createChangeDispatchMap is a wrapper around the boilerplate of creating
 * change events from validation models. In the end, these events are all
 * going to work the same, and so we can guarantee a typesafe derived set
 * of event handlers that permit the app to change form data, simply by
 * knowing a list of the models which can change.
 *
 * @param models {ValidationModel[]} - A number of validation models which
 * you want to turn into a dispatch map.
 * @returns {function} A function that takes the send function of an app
 * chart actor, and returns a dispatch map of change events, auto-generated
 * from given validation models.
 */
export function createChangeDispatchMap(
  ...models: ValidationModels[ValidationModelKey][]
): (send: AppService['send']) => DispatchMap<FormDispatchMap> {
  return (send) => {
    const event = CreateDispatchEvent.from(send);

    return models.reduce((dispatchMapSoFar, model) => {
      const key = FormKeys.from(model.key);

      return Object.assign(dispatchMapSoFar, {
        [key.change]: (payload: unknown) => {
          event.perform(model, Object.assign(payload, { type: key.commit }));
        },
      });
    }, {} as DispatchMap<FormDispatchMap>);
  };
}
