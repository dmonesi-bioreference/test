import { createMachine, InterpreterFrom, MachineConfig } from 'xstate';

import * as actions from './actions';
import { initialContext } from './context';
import * as guards from './guards';
import * as machines from './machines';
import * as services from './services';

const config = {
  actions,
  guards,
  services,
};

const appConfig: MachineConfig<AppContext, AppSchema, AppEvents> = {
  id: 'app',
  type: 'parallel',
  context: initialContext,
  states: {
    auth: machines.auth,
    forms: machines.forms,
    registration: machines.registration,
  },
};

export const app = createMachine<AppContext, AppEvents>(appConfig, config);

export type AppService = InterpreterFrom<typeof app>;
