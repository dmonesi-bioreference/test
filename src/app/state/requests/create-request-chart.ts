import { assign } from '@xstate/immer';

import { RequestKeys } from './request-keys';

/**
 * See the CreateFormChart abstract class for the meaning of this "unused"
 * abstraction. The sum of it is this: it's meant to create a type that
 * carries forward a generic to interior functions, so we can split our type
 * definitions strategically up and fill them in as we learn more about our
 * system (I.E., different functions/closures).
 *
 * @class CreateRequestChart
 */
abstract class CreateRequestChart<GivenKey extends RequestModelKey> {
  result(givenModelKey: GivenKey) {
    return createRequestMachine<GivenKey>(givenModelKey);
  }
}

declare global {
  /**
   * RequestChart is a derived type that accepts a RequestModelKey, and predicts
   * the exact schema of the request in our app chart. We use this to create type-
   * safe keypaths throughout the application, generated from request models.
   */
  type RequestChart<GivenKey extends RequestModelKey> = ReturnType<
    CreateRequestChart<GivenKey>['result']
  >;

  /**
   * RequestDetail is a repeated structure used for storing form values and validation
   * errors in the app state. It accepts a request model type and creates a
   * type-restricted wrapper that contains the data which the model guarantees, and
   * any error messages related to that request's lifecycle.
   */
  interface RequestDetail<GivenType extends RequestModelMap[RequestModelKey]> {
    values: GivenType;
    errors: string | string[];
  }

  /**
   * RequestContext is a derived type that creates a mapping of each of the request
   * models to the app context. This lets us dynamically expand selectors to include
   * data from all request models, and informs intellisense about where the context
   * is.
   *
   * RequestContext does this work in order to prevent circular references in our types.
   * In other words, we formally derive our app data here, explicitly linking it to our
   * request models, in order to prevent Typescript from running in (lengthy) circles
   * trying to infer it all.
   */
  type RequestContext = {
    [Key in RequestModelKey]: RequestDetail<RequestModelMap[Key]>;
  };

  /**
   * RequestSchema is the final derived type of the request-model family,
   * it says "here are all the form schemas you can expect". This works with our
   * state.matches() keypath types in much the same way the RequestContext does
   * with our app state selectors.
   */
  type RequestSchema = {
    [GivenKey in RequestModelKey]: RequestChart<GivenKey>;
  };
}

/**
 * createRequestActions is a type-safe factory designed to create the
 * set of actions needed for a given request model key.
 *
 * In most cases (and definitely this one), the factory function is meant
 * mostly to create a single point of change, and then govern that with
 * as strong a typing as we can manage.
 *
 * @param givenKey {RequestModelKey} - The key of a validation model from
 * the validation model map.
 * @returns - An object containing the actions needed for a form chart.
 */
export function createRequestActions<GivenKey extends RequestModelKey>(
  givenKey: GivenKey
) {
  const key = RequestKeys.from(givenKey);

  return {
    [key.error]: assign((context: AppContext, event: AppEvents) => {
      const data = 'data' in event ? event?.data : '';

      if (typeof data === 'string' || Array.isArray(data)) {
        context.requests[givenKey].errors = data;
      }
    }),
    [key.clear]: assign((context: AppContext) => {
      context.requests[givenKey].errors = [];
    }),
    [key.update]: assign((context: AppContext, event: AppEvents) => {
      const data = 'data' in event ? event?.data : {};

      if (data) {
        context.requests[givenKey].values = data as any;
      }
    }),
  } as const;
}

/**
 * createRequestContext is a thin wrapper taking a request model, and
 * returning that model in a strongly typed payload, fit for inclusion
 * in a state chart context.
 *
 * @param model {RequestModel} - A request model with at minimum
 * an `init` property with its starting values.
 * @returns A payload containing the starting values of the given model,
 * and an empty list where validation and form errors can go.
 */
export function createRequestContext<GivenKey extends RequestModelKey>(
  model: RequestModels[GivenKey]
): RequestDetail<RequestModelMap[GivenKey]> {
  return {
    values: model.init as RequestModelMap[GivenKey],
    errors: [],
  };
}

/**
 * createRequestMachine handles the actual behavior modeling of the form
 * states surrounding all of the validation models.
 *
 * These charts do the following:
 *
 *  - A request begins idle.
 *  - When an init request is fired, it begins requesting. This triggers
 *    the service it expects. (In other words, the API call.)
 *  - If the service succeeds, it goes to success.
 *  - Otherwise, failure.
 *  - At any point during the idle, success, or failure states, the request
 *    can be fired again. This clears the request error.
 *
 * All of these steps are governed by xstate, and the bulk of the logic
 * is encapsulated here. Like most of the factory functions, the main
 * purpose here is type safety amidst repetition. However, the generated
 * text for all of the functions is in the service of lining things up
 * with this function.
 *
 * If you ever need to change request logic, that journey begins here.
 *
 * @param key {RequestModelKey} - A key of the request model map
 * @returns A state chart which models out the workflows surrounding
 * the request activity of the given call.
 */
export function createRequestMachine<GivenKey extends RequestModelKey>(
  givenKey: GivenKey
) {
  const key = RequestKeys.from(givenKey);

  return {
    id: key,
    initial: 'idle',
    states: {
      idle: { on: { [key.init]: 'requesting' } },
      requesting: {
        invoke: {
          src: key.handler,
          onError: { target: 'failure', actions: [key.error] },
          onDone: { target: 'success', actions: [key.update] },
        },
      },
      success: {},
      failure: {
        on: {
          [key.init]: { target: 'requesting', actions: [key.clear] },
        },
      },
    },
  };
}

/**
 * createRequestChart is the all-in-one factory function which combines
 * all of the above factory functions into one single function call.
 * Again, the design of all of this is merely to create a typesafe
 * context and schema for the rest of the app to use, and to do so in
 * a deterministic and automated fashion.
 *
 * Given a validation model, you can produce a valid state chart using
 * this function.
 *
 * @param model {RequestModel} - A request model to use for the
 * construction of form chart content.
 * @returns A payload of objects generated by internal factory functions,
 * designed to be a typesafe thing to include in automatically generated
 * charts.
 */
export function createRequestChart<GivenKey extends RequestModelKey>(
  model: RequestModels[GivenKey]
) {
  const key = model.key as GivenKey;

  return {
    key,
    actions: createRequestActions(key),
    context: { [key]: createRequestContext(model) },
    machine: { [key]: createRequestMachine(key) },
  } as const;
}

/**
 * composeFormModels takes a list of validation models, turns each of
 * them into a form chart, and aggregates them into a single list. This
 * list can then be used to construct a full, parallel chart for each
 * validation model, as exported from the `app/state/forms` package.
 *
 * @param models {RequestModel[]} - A list of validation models
 * @returns A payload object with an actions, services, context, and
 * machine property, each as typesafe as we can manage at this point.
 */
export function composeRequestModels(
  ...models: RequestModels[RequestModelKey][]
) {
  const initial = {
    actions: {},
    context: {} as RequestContext,
    machine: {} as RequestSchema,
  };
  return models.reduce((modelChartsSoFar, currentModel) => {
    const modelChart = createRequestChart(currentModel);

    return {
      actions: { ...modelChartsSoFar.actions, ...modelChart.actions },
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
 * @param models {RequestModel[]} - A number of validation models which
 * you want to turn into a dispatch map.
 * @returns {function} A function that takes the send function of an app
 * chart actor, and returns a dispatch map of change events, auto-generated
 * from given validation models.
 */
export function createRequestDispatchMap(
  ...models: RequestModels[RequestModelKey][]
): (send: AppService['send']) => DispatchMap<RequestDispatchMap> {
  return (send) => {
    return models.reduce((dispatchMapSoFar, model) => {
      const key = RequestKeys.from(model.key);

      return Object.assign(dispatchMapSoFar, {
        [key.request]: () => send(key.init),
      });
    }, {} as DispatchMap<RequestDispatchMap>);
  };
}
