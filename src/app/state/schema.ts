/* eslint-disable @typescript-eslint/no-empty-interface */

import { GetStates } from './paths';

declare global {
  type States<Keys extends string> = Record<Keys, {}>;
  type StateMap<GivenType extends object> = { states: GivenType };

  type FormSchema = StateMap<{
    activity: StateMap<States<'active' | 'idle'>>;
    validation: StateMap<
      States<'pristine' | 'validating' | 'valid' | 'invalid'>
    >;
  }>;

  interface AppSchema {
    states: {
      auth: StateMap<
        States<
          | 'checkingSession'
          | 'knownCaregiver'
          | 'checkingIdentity'
          | 'checkingMagicLink'
          | 'verifyingIdentity'
          | 'identityUnverified'
          | 'requestingLogin'
        >
      >;
      forms: StateMap<Record<'identity', FormSchema>>;
      registration: StateMap<States<'one' | 'two' | 'three' | 'four'>>;
    };
  }

  type AppStates = GetStates<AppSchema>;
}
