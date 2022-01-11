import { assign } from '@xstate/immer';
import { send } from 'xstate';

import { isAuthenticatedSession, isPatientInfo } from './models';

declare global {
  interface AppEventMap {
    authenticate: { type: 'authenticate' };
    checkIdentity: { type: 'checkIdentity' };
    login: { type: 'login' };
    register: { type: 'register' };
  }

  interface AuthenticatedSession {
    nickname: string;
    name: string;
    picture: string;
    updated_at: string;
    email: string;
    email_verified: boolean;
    sub: string;
  }
}

export const actions = {
  reduceIdentityAttempts: assign((context: AppContext) => {
    context.auth.identityCheckAttempts--;
  }),
  collectPatientGuidDetails: assign((context: AppContext, event: AppEvents) => {
    const data = 'data' in event ? event?.data : {};

    if (isPatientInfo(data)) {
      context.auth.patientGuid = data.guid;
      context.auth.patientSource = data.source;
    }
  }),
  clearAuthErrors: assign((context: AppContext) => {
    context.auth.errors = [];
  }),
  collectLoginErrors: assign((context: AppContext, event: AppEvents) => {
    const data = 'data' in event ? (event?.data as {}) : {};

    if ('description' in data) {
      context.auth.errors = [data['description'] as string];
    }

    if ('error_description' in data) {
      context.auth.errors = [data['error_description'] as string];
    }
  }),
  collectSession: assign((context: AppContext, event: AppEvents) => {
    const data = 'data' in event ? event?.data : {};

    if (isAuthenticatedSession(data)) {
      context.auth.session = data;
    }
  }),
};

export const guards = {
  canCheckIdentity: (context: AppContext) =>
    context.auth.identityCheckAttempts > 0,
};

export const context = {
  identityCheckAttempts: 5,
  patientGuid: '',
  patientSource: '',
  session: null as AuthenticatedSession | null,
  errors: [] as string[],
};

export const machine = {
  initial: 'checkingPatientGuid',
  states: {
    checkingPatientGuid: {
      invoke: {
        src: 'handlePatientGuid',
        onDone: {
          target: 'checkingSession',
          actions: 'collectPatientGuidDetails',
        },
        onError: 'requestingLogin',
      },
    },
    requestingLogin: {
      on: {
        authenticate: { target: 'authenticating', actions: 'clearAuthErrors' },
      },
    },
    authenticating: {
      invoke: {
        src: 'handleAuth',
        onDone: { target: 'knownCaregiver', actions: 'clearAuthErrors' },
        onError: { target: 'requestingLogin', actions: 'collectLoginErrors' },
      },
    },

    checkingSession: {
      invoke: {
        src: 'handleSession',
        onDone: { target: 'knownCaregiver', actions: 'collectSession' },
        onError: 'verifyingIdentity',
      },
    },
    knownCaregiver: {
      entry: [send('LOAD_TESTS')],
    },
    verifyingIdentity: {
      on: {
        checkIdentity: [
          { target: 'checkingIdentity', cond: 'canCheckIdentity' },
          { target: 'identityUnverified' },
        ],
      },
    },
    checkingIdentity: {
      invoke: {
        src: 'handleIdentityCheck',
        onDone: 'registration',
        onError: [
          {
            target: 'verifyingIdentity',
            cond: 'canCheckIdentity',
            actions: 'reduceIdentityAttempts',
          },
          { target: 'identityUnverified' },
        ],
      },
    },
    registration: { on: { register: 'registering' } },
    registering: {
      invoke: {
        src: 'handleRegistration',
        onDone: 'knownCaregiver',
        onError: {
          target: 'registration',
        },
      },
    },
    identityUnverified: { on: { login: 'requestingLogin' } },
  },
};
