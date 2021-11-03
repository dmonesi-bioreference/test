import { createMachine, MachineConfig, MachineOptions } from 'xstate';

import { ProduceSchema } from './paths';

export function createAppMachine<GivenConfig>(givenConfig: GivenConfig) {
  type Schema = ProduceSchema<typeof givenConfig>;

  return {
    init: (options: Partial<MachineOptions<AppContext, AppEvents>> = {}) =>
      createMachine<AppContext, AppEvents>(
        givenConfig as MachineConfig<AppContext, Schema, AppEvents>,
        options
      ),
    schema: givenConfig as unknown as Schema,
  };
}
