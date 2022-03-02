import { assign } from '@xstate/immer';
import { ActorRef, EventObject, send, spawn, State } from 'xstate';

import { Api } from 'client/api';

import testMachine, { isTestContext } from './testMachine';

declare global {
  interface AppEventMap {
    getTestStatus: { type: 'CHECK_TESTS' };
    getAppointmentStatus: { type: 'GET_APPOINTMENT_STATUS' };
    viewTestResults: { type: 'VIEW_TEST_RESULTS' };
    loadReport: {
      type: 'LOAD_REPORT';
      testId: string;
    };
  }
}

export const actions = {
  spawnTests: assign((context: AppContext, event: AppEvents) => {
    const data = ('data' in event ? event?.data : []) as Test[];

    if (!data) return;

    data.forEach((test) => {
      context.tests.actors = [
        ...context.tests.actors,
        spawn(
          testMachine
            .withConfig({ services: { fetchReport: Api.Tests.report } })
            .withContext({ test }),
          {
            name: `test-${test.TestID}`,
            sync: false,
          }
        ),
      ];
    });
  }),
  requestSyncWithActors: (context: AppContext) => {
    context.tests.actors.forEach((actor) => actor.send('SYNC_REQUEST'));
  },
  syncTests: assign((context: AppContext, event: AppEvents) => {
    if (isTestContext(event)) {
      context.tests.tests = [
        ...context.tests.tests,
        {
          id: event.test.TestID,
          percentComplete: event.percentComplete ?? 0,
          expectedResultsDate: event.expectedResultsDate,
          lastUpdated: event.lastUpdated,
        }
      ];
    }
  }),
  checkSyncComplete: send((context: AppContext) => ({
      type: context.tests.actors.length === context.tests.tests.length ? 'SYNC_COMPLETE' : ''
  })),
  getTestsPercentCompletion: send((context: AppContext) => {
    const testsCount = context.tests.actors.length;
    const testsReadyCount = context.tests.tests.filter(
      (test) => test.percentComplete == 100
    ).length;

    if (testsReadyCount === testsCount) return { type: 'READY' };
    return { type: 'NOT_READY' };
  }),
  requestReportFromActor: assign((context: AppContext, event: AppEvents) => {
    const testId =
      'testId' in event ? event?.testId : '';

    const test = context.tests.tests.find(test => test.id === testId);

    if (!test || test.report) return { type: 'REPORT_FETCHED' };

    const actor = context.tests.actors.find((actor) => actor.id === `test-${test.id}`);

    if (actor) {
      actor.send('FETCH_REPORT');
    }
  }),
  loadReportFromActor: assign((context: AppContext, event: AppEvents) => {
    if (isTestContext(event)) {
      context.tests.tests = context.tests.tests.map((test) => {
        if (test.id !== event.test.TestID) return test;
        return {
          ...test,
          report: event.report?.asset,
        }
      });
    }
  }),
  resolveAppointmentStatus: send((_, event: AppEvents) => {
    const data = ('data' in event ? event?.data : {}) as {
      appointmentStatus: string;
    };

    if (!data) return { type: 'ERROR' };

    const { appointmentStatus } = data;

    switch (appointmentStatus) {
      case 'at appointment':
        return { type: 'AT_APPOINTMENT' };
      case 'after appointment':
        return { type: 'AFTER_APPOINTMENT' };
      default:
        return { type: 'BEFORE_APPOINTMENT' };
    }
  }),
};

export const context: {
  actors: ActorRef<
    EventObject,
    State<TestContext, EventObject, any, { value: any; context: TestContext }>
  >[];
  tests: {
    id: string;
    percentComplete: number;
    expectedResultsDate?: string;
    lastUpdated?: string;
    report?: { pdf: Blob; thumbnail: string | StaticImageData } | undefined;
  }[];
} = {
  actors: [],
  tests: [],
};

export const machine = {
  initial: 'idle',
  states: {
    idle: {
      on: {
        LOAD_TESTS: 'loading',
      },
    },
    loading: {
      type: 'compound',
      initial: 'fetching',
      states: {
        fetching: {
          invoke: {
            src: 'handleFetchTests',
            onDone: {
              target: 'syncing',
              actions: ['spawnTests'],
            },
            onError: '#errorLoading',
          },
        },
        syncing: {
          entry: ['requestSyncWithActors'],
          on: {
            SYNC_RESPONSE: {
              actions: ['syncTests', 'checkSyncComplete'],
            },
            SYNC_COMPLETE: 'resolving',
          },
        },
        resolving: {
          entry: ['getTestsPercentCompletion'],
          on: {
            READY: '#allComplete',
            NOT_READY: '#notAllComplete',
          },
        },
      },
    },
    errorLoading: {
      id: 'errorLoading',
      on: {
        LOAD_TESTS: 'loading',
      },
    },
    notAllComplete: {
      id: 'notAllComplete',
      on: {
        READY: 'allComplete',
      },
    },
    allComplete: {
      id: 'allComplete',
      type: 'parallel',
      states: {
        view: {
          type: 'compound',
          initial: 'notViewed',
          states: {
            notViewed: {
              on: {
                VIEW_TEST_RESULTS: 'viewed',
              },
            },
            viewed: {},
          },
        },
        appointment: {
          type: 'compound',
          initial: 'loadingAppointmentStatus',
          states: {
            loadingAppointmentStatus: {
              invoke: {
                src: 'handleAppointmentStatus',
                onDone: {
                  target: 'knownAppointmentStatus',
                  actions: 'resolveAppointmentStatus',
                },
                onError: 'errorLoadingAppointmentStatus',
              },
            },
            knownAppointmentStatus: {
              on: {
                BEFORE_APPOINTMENT: 'beforeAppointment',
                AT_APPOINTMENT: 'atAppointment',
                AFTER_APPOINTMENT: 'afterAppointment',
                ERROR: 'errorLoadingAppointmentStatus',
              },
            },
            errorLoadingAppointmentStatus: {
              on: {
                GET_APPOINTMENT_STATUS: 'loadingAppointmentStatus',
              },
            },
            beforeAppointment: {},
            atAppointment: {},
            afterAppointment: {},
          },
        },
        report: {
          type: 'compound',
          initial: 'idle',
          states: {
            idle: {
              on: {
                LOAD_REPORT: {
                  target: 'loadingReport',
                  actions: ['requestReportFromActor'],
                }
              },
            },
            loadingReport: {
              on: {
                REPORT_FETCHED: 'idle',
                REPORT_FETCH_SUCCESS: {
                  target: 'idle',
                  actions: ['loadReportFromActor'],
                },
                REPORT_FETCH_FAILED: 'errorLoadingReport'
              },
            },
            errorLoadingReport: {
              on: {
                LOAD_REPORT: {
                  target: 'loadingReport',
                  actions: ['requestReportFromActor'],
                },
              },
            },
          },
        },
      },
    },
  },
};
