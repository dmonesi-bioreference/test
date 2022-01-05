import { assign } from '@xstate/immer';
import { send } from 'xstate';

import geneticTestReportTemplate from 'assets/images/png/geneticTestReportTemplate.png';

declare global {
  interface AppEventMap {
    getTestStatus: { type: 'getTestStatus' };
    getAppointmentStatus: { type: 'getAppointmentStatus' };
    viewTestResults: { type: 'VIEW_TEST_RESULTS' };
  }
}

export const actions = {
  mapTestStatus: send((context: AppContext, event: AppEvents) => {
    const data = ('data' in event ? event?.data : {}) as { labStatus: string };

    if (!data) return { type: 'UNKNOWN' };

    const { labStatus } = data;

    switch (labStatus) {
      case 'in transit':
      case 'specimen received':
      case 'hold for bi':
      case 'in lab':
      case 'on hold':
        return { type: 'WAITING' };
      case 'finished':
      case 'report ready':
        return { type: 'RESULTS_READY' };
      case 'canceled':
        return { type: 'CANCELED' };
      default:
        return { type: 'UNKNOWN' };
    }
  }),
  calculatePercent: assign((context: AppContext, event: AppEvents) => {
    const data = ('data' in event ? event?.data : {}) as { labStatus: string };

    if (!data) return;

    const { labStatus } = data;

    switch (labStatus) {
      case 'in transit':
        context.test.percentComplete = (100 / 6) * 1;
        break;
      case 'specimen received':
        context.test.percentComplete = (100 / 6) * 2;
        break;
      case 'hold for bi':
        context.test.percentComplete = (100 / 6) * 3;
        break;
      case 'in lab':
        context.test.percentComplete = (100 / 6) * 4;
        break;
      case 'on hold':
        context.test.percentComplete = (100 / 6) * 5;
        break;
      case 'finished':
        context.test.percentComplete = (100 / 6) * 6;
        break;
      default:
        context.test.percentComplete = 100;
    }
  }),
  getAppointmentStatus: send((context: AppContext, event: AppEvents) => {
    const data = ('data' in event ? event?.data : {}) as {
      appointmentStatus: string;
    };

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
    const data = ('data' in event ? event?.data : {}) as {
      src: string;
      thumbnail: string;
    };

    if (!data) return;

    context.test.report.src = data.src;
    context.test.report.thumbnail = data.thumbnail;
  }),
};

export const context = {
  percentComplete: 0,
  lastUpdated: '11:12am today',
  expectedResultsDate: 'Nov 11, 2022',
  report: {
    src: '',
    thumbnail: geneticTestReportTemplate as StaticImageData | string,
  },
};

export const machine = {
  initial: 'gettingUserStatus',
  states: {
    gettingUserStatus: {
      invoke: {
        src: 'handleTestStatus',
        onDone: {
          target: 'knownUserStatus',
          actions: ['mapTestStatus', 'calculatePercent'],
        },
        onError: 'unknownUserStatus',
      },
    },
    knownUserStatus: {
      on: {
        UNKNOWN: 'unknownUserStatus',
        WAITING: 'waiting',
        RESULTS_READY: {
          target: 'resultsReady',
          actions: ['getAppointmentStatus'],
        },
        CANCELED: 'canceled',
      },
    },
    unknownUserStatus: {
      on: {
        GET_USER_STATUS: 'gettingUserStatus',
      },
    },
    waiting: {},
    resultsReady: {
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
          initial: 'gettingAppointmentStatus',
          states: {
            gettingAppointmentStatus: {
              invoke: {
                src: 'handleAppointmentStatus',
                onDone: {
                  target: 'knownAppointmentStatus',
                  actions: 'getAppointmentStatus',
                },
                onError: 'unknownAppointmentStatus',
              },
            },
            knownAppointmentStatus: {
              on: {
                UNKNOWN: 'unknownAppointmentStatus',
                AT_APPOINTMENT: 'atAppointment',
                AFTER_APPOINTMENT: 'afterAppointment',
              },
            },
            unknownAppointmentStatus: {
              on: {
                GET_APPOINTMENT_STATUS: 'gettingAppointmentStatus',
              },
            },
            atAppointment: {},
            afterAppointment: {},
          },
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
                GET_REPORT: 'gettingReport',
              },
            },
          },
        },
      },
    },
    canceled: {},
  },
};
