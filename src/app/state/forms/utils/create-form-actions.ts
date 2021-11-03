import { assign } from '@xstate/immer';
import { capitalize } from 'lodash';

import { isValidationFailurePayload } from 'models';

type Forms = keyof AppSchema['states']['forms']['states'];

export function createFormActions<GivenForm extends Forms>(form: GivenForm) {
  const id = capitalize(form) as Capitalize<GivenForm>;
  const assignErrors = `assign${id}Errors` as const;
  const clearErrors = `clear${id}Errors` as const;
  const update = `update${id}` as const;
  const changeEvent = `${form}Change` as const;

  return {
    [assignErrors]: assign((context: AppContext, event: AppEvents) => {
      const data = 'data' in event ? event?.data : {};

      if (isValidationFailurePayload(data)) {
        context.forms[form].errors = data;
      }
    }),
    [clearErrors]: assign((context: AppContext) => {
      context.forms[form].errors = [];
    }),
    [update]: assign((context: AppContext, event: AppEvents) => {
      if (event.type === changeEvent && 'field' in event && 'value' in event) {
        context.forms[form].values[event.field] = event.value;
      }
    }),
  } as const;
}
