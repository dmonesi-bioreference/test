import { assign } from '@xstate/immer';
import { ActorRef, EventObject, send, spawn, State } from 'xstate';

import geneticTestReportTemplate from 'assets/images/png/geneticTestReportTemplate.png';

import testMachine, { isTestContext, TestContext } from './testMachine';

declare global {
  interface AppEventMap {
    getTestStatus: { type: 'CHECK_TESTS' };
    getAppointmentStatus: { type: 'GET_APPOINTMENT_STATUS' };
    viewTestResults: { type: 'VIEW_TEST_RESULTS' };
  }
}

export const actions = {
  spawnTests: assign((context: AppContext, event: AppEvents) => {
    const data = ('data' in event ? event?.data : []) as Test[];

    if (!data) return;

    data.forEach(test => {
      context.tests.actors = [
        ...context.tests.actors,
        spawn(
          testMachine.withContext({ test, percentComplete: 0, expectedResultsDate: '', lastUpdated: '' }),
          { name: `test-${test.TestID}`, sync: false }
        )
      ];
      context.tests.tests = [
        ...context.tests.tests,
        {
          id: test.TestID,
          percentComplete: 0,
          expectedResultsDate: '',
          lastUpdated: ''
        }
      ];
    });
  }),
  syncTests: assign((context: AppContext, event: AppEvents) => {
    if (isTestContext(event)) {
      context.tests.tests = context.tests.tests.map(test => {
        if (test.id === event.test.TestID) {
          return {
            id: test.id,
            percentComplete: event.percentComplete ?? 0,
            expectedResultsDate: event.expectedResultsDate ?? '',
            lastUpdated: event.lastUpdated ?? ''
          }
        }
        return test;
      });
    }
  }),
  checkTestsReady: send((context: AppContext) => {
    const testsCount = context.tests.actors.length;
    const testsReadyCount = context.tests.tests.filter(test => test.percentComplete == 100).length;

    if (testsReadyCount === testsCount) return { type: 'READY' };
    return { type: 'NOT_READY' };
  }),
  resolveAppointmentStatus: send((_, event: AppEvents) => {
    const data = ('data' in event ? event?.data : {}) as { appointmentStatus: string };

    if (!data) return { type: 'UNKNOWN' };
    
    const { appointmentStatus } = data;

    switch (appointmentStatus) {
      case 'at appointment':
        return { type: 'AT_APPOINTMENT' };
      case 'after appointment':
        return { type: 'AFTER_APPOINTMENT' };
      default:
        return { type: 'UNKNOWN' };
    }
  }),
  resolveReport: assign((context: AppContext, event: AppEvents) => {
    const data = ('data' in event ? event?.data : {}) as { src: string, thumbnail: string };

    if (!data) return;

    context.tests.report.src = data.src;
    context.tests.report.thumbnail = data.thumbnail;
  })
};

export const context: {
  actors: ActorRef<EventObject, State<TestContext, EventObject, any, { value: any; context: TestContext; }>>[],
  tests: { id: string, percentComplete: number, expectedResultsDate: string, lastUpdated: string }[],
  report: { src: string, thumbnail: string },
} = {
  actors: [],
  tests: [],
  report: {
    src: '',
    thumbnail: geneticTestReportTemplate
  },
}

export const machine = {
  initial: 'testsNotLoaded',
  states: {
    loadingTests: {
      invoke: {
        src: 'handleLoadTests',
        onDone: {
          target: 'syncingTests',
          actions: ['spawnTests'],
        },
        onError: 'testsNotLoaded',
      },
    },
    testsNotLoaded: {
      on: {
        LOAD_TESTS: 'loadingTests'
      },
    },
    syncingTests: {
      entry: [
        (context: AppContext) => context.tests.actors.forEach(actor => actor.send('SYNC_REQUEST')),
      ],
      on: {
        SYNC_RESPONSE: {
          target: 'checkingTests',
          actions: ['syncTests'],
        },
      },
    },
    checkingTests: {
      entry: ['checkTestsReady'],
      on: {
        READY: 'testsReady',
        NOT_READY: 'waitingOnTests'
      },
    },
    waitingOnTests: {
      on: {
        READY: 'testsReady'
      },
    },
    testsReady: {
      type: 'parallel',
      states: {
        view: {
          type: 'compound',
          initial: 'notViewed',
          states: {
            notViewed: {
              on: {
                VIEW_TEST_RESULTS: 'viewed'
              }
            },
            viewed: {}
          }
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
                  actions: 'resolveAppointmentStatus'
                },
                onError: 'unknownAppointmentStatus',
              }
            },
            knownAppointmentStatus: {
              on: {
                UNKNOWN: 'unknownAppointmentStatus',
                AT_APPOINTMENT: 'atAppointment',
                AFTER_APPOINTMENT: 'afterAppointment'
              }
            },
            unknownAppointmentStatus: {
              on: {
                GET_APPOINTMENT_STATUS: 'loadingAppointmentStatus'
              }
            },
            atAppointment: {},
            afterAppointment: {}
          }
        },
        report: {
          type: 'compound',
          initial: 'gettingReport',
          states: {
            gettingReport: {
              invoke: {
                src: 'handleReport',
                onDone: {
                  target: 'reportLoaded',
                  actions: 'resolveReport',
                },
                onError: 'reportNotLoaded',
              },
            },
            reportLoaded: {},
            reportNotLoaded: {
              on: {
                GET_REPORT: 'gettingReport'
              },
            },
          },
        },
      }
    },
  },
};
