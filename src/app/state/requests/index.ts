import {
  composeRequestModels,
  createRequestDispatchMap,
} from './create-request-chart';
import * as Models from './models';

const compiledModels = composeRequestModels(...Models.all);
export const setupRequestDispatchMap = createRequestDispatchMap(...Models.all);
export const actions = compiledModels.actions;
export const context: RequestContext = compiledModels.context;

export const machine = {
  type: 'parallel',
  states: compiledModels.machine,
};

export * from './models';
export * from './request-keys';
