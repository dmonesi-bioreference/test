import {
  composeFormModels,
  createChangeDispatchMap,
} from './create-form-chart';
import * as Models from './validation-models';

const compiledModels = composeFormModels(...Models.all);
export const setupDispatchMap = createChangeDispatchMap(...Models.all);
export const actions = compiledModels.actions;
export const services = compiledModels.services;
export const context: FormContext = compiledModels.context;

export const machine = {
  type: 'parallel',
  states: compiledModels.machine,
};

export * from './validation-models';
