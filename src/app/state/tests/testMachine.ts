import { assign, createMachine, DoneInvokeEvent, send, sendParent } from 'xstate';

import geneticTestReportTemplate from 'assets/images/png/geneticTestReportTemplate.png';

declare global {
  type TestContext = {
    test: Test;
    percentComplete?: number;
    expectedResultsDate?: string;
    lastUpdated?: string;
    report?: {
      id: string;
      asset: { pdf: Blob; thumbnail: string | StaticImageData } | undefined;
    }
  }
};

export function isTestContext(
  candidate: unknown
): candidate is { type: string } & TestContext {
  const props = [
    'type',
    'test',
    'percentComplete',
    'expectedResultsDate',
    'lastUpdated',
    'report',
  ];

  return Object.keys(candidate as object).every((key) => props.includes(key));
}

const testMachine = createMachine(
  {
    id: 'child',
    initial: 'resolving',
    states: {
      resolving: {
        entry: [
          'resolveTestStatus',
          'calculatePercent',
          'getExpectedResultsDate',
          'getLastUpdatedDate',
        ],
        on: {
          WAITING: 'waiting',
          RESULTS_READY: 'resultsReady',
          CANCELED: 'canceled',
          UNKNOWN: 'unknown',
        },
      },
      waiting: {},
      resultsReady: {
        type: 'parallel',
        states: {
          report: {
            type: 'compound',
            initial: 'idle',
            states: {
              idle: {
                on: {
                  FETCH_REPORT: 'fetchingReport',
                },
              },
              fetchingReport: {
                invoke: {
                  src: 'fetchReport',
                  onDone: {
                    target: 'reportFetched',
                    actions: [
                      assign((context: TestContext, event: DoneInvokeEvent<Blob>) => {
                        const data = ('data' in event ? event?.data : undefined) as Blob;
                
                        if (!data) return context;
                
                        return {
                          ...context,
                          report: {
                            ...context.report,
                            asset: {
                              pdf: data,
                              thumbnail: geneticTestReportTemplate,
                            },
                          },
                        } as TestContext;
                      }),
                    ],
                  },
                  onError: 'errorFetchingReport',
                },
              },
              reportFetched: {
                entry: [
                  sendParent((context: TestContext) => ({
                    ...context,
                    type: 'REPORT_FETCH_SUCCESS',
                  }))
                ],
              },
              errorFetchingReport: {
                entry: [
                  sendParent((context: TestContext) => ({
                    ...context,
                    type: 'REPORT_FETCH_FAILED',
                  }))
                ],
                on: {
                  FETCH_REPORT: 'fetchingReport',
                },
              },
            },
          },
        },
      },
      canceled: {},
      unknown: {},
    },
    on: {
      SYNC_REQUEST: {
        actions: [
          sendParent((context: TestContext) => ({
            ...context,
            type: 'SYNC_RESPONSE',
          })),
        ],
      },
    },
  },
  {
    actions: {
      resolveTestStatus: send((context: TestContext) => {
        if (!context.test) return { type: 'UNKNOWN' };

        const { LabStatus } = context.test;

        switch (LabStatus) {
          case 'In Transit':
          case 'Specimen Received':
          case 'Hold For BI':
          case 'In Lab':
          case 'On Hold':
            return { type: 'WAITING' };
          case 'Finished':
          case 'Report Ready':
            return { type: 'RESULTS_READY' };
          case 'Canceled':
            return { type: 'CANCELED' };
          default:
            return { type: 'UNKNOWN' };
        }
      }),
      calculatePercent: assign((context: TestContext) => {
        if (!context.test) return { ...context };

        const { LabStatus } = context.test;

        let { percentComplete } = context;

        switch (LabStatus) {
          case 'In Transit':
            percentComplete = (100 / 6) * 1;
            break;
          case 'Specimen Received':
            percentComplete = (100 / 6) * 2;
            break;
          case 'Hold For BI':
            percentComplete = (100 / 6) * 3;
            break;
          case 'In Lab':
            percentComplete = (100 / 6) * 4;
            break;
          case 'On Hold':
            percentComplete = (100 / 6) * 5;
            break;
          case 'Finished':
            percentComplete = (100 / 6) * 6;
            break;
          default:
            percentComplete = 100;
        }

        return { ...context, percentComplete };
      }),
      getExpectedResultsDate: assign((context: TestContext) => {
        if (!context.test) return { ...context };

        const { DueDate } = context.test;

        const date = new Date(DueDate ?? '');
        return {
          ...context,
          expectedResultsDate:
            DueDate && date
              ? `${date.toLocaleString('default', {
                  month: 'short',
                })} ${date.getDate()}, ${date.getFullYear()}`
              : undefined,
        };
      }),
      getLastUpdatedDate: assign((context: TestContext) => {
        if (!context.test) return { ...context };

        const { UpdatedDate } = context.test;

        const date = new Date(UpdatedDate ?? '');
        const today = new Date();

        if (!date) return { ...context };

        const isToday =
          date.getDate() === today.getDate() &&
          date.getMonth() === today.getMonth() &&
          date.getFullYear() === today.getFullYear();

        const day = isToday
          ? 'today'
          : `${date.toLocaleString('default', {
              month: 'short',
            })} ${date.getDate()}, ${date.getFullYear()}`;

        return {
          ...context,
          lastUpdated: `${date.getHours()}:${date.getMinutes()}${
            date.getHours() > 12 ? 'pm' : 'am'
          } ${day}`,
        };
      }),
    },
  }
);

export default testMachine;
