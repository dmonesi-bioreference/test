import { capitalize } from 'lodash';

export function createFormMachine<GivenId extends ModelKeys>(id: GivenId) {
  const capitalizedId = capitalize(id);
  const validation = `#${id}.validation.validating` as const;
  const change = `${id}Change` as const;
  const update = `update${capitalizedId}` as `update${Capitalize<GivenId>}`;
  const validate =
    `validate${capitalizedId}` as `validate${Capitalize<GivenId>}`;
  const clearErrors =
    `clear${capitalizedId}Errors` as `clear${Capitalize<GivenId>}Errors`;
  const assignErrors =
    `assign${capitalizedId}Errors` as `assign${Capitalize<GivenId>}Errors`;

  return {
    id,
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
