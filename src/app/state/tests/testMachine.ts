import { assign, createMachine, send, sendParent } from 'xstate';

declare global {
  interface Test {
    TestID: string;
    TestCode: string;
    ShortDescription: string;
    ReflexOrderingParentTestCode: string;
    StartDate?: string;
    DueDate?: string;
    LabStatus:
      | 'In Transit'
      | 'Specimen Received'
      | 'Hold For BI'
      | 'In Lab'
      | 'On Hold'
      | 'Canceled'
      | 'Finished'
      | 'Report Ready'
      | 'Updated Report';
    LabAccessionId?: string;
    LabStatusUpdateDate?: string;
    TestCancelledBySystem: string;
    WasBi: boolean;
    UserEnteredSliceName: string;
    PreDefinedSliceNames: string;
    PhenotypeNames: string;
    LastBiRunDate?: string;
    BIStatus?: string;
    HoldForBI: boolean;
    BundledBillingQualify: boolean;
    ReportedDate?: string;
    ReportUpdatedDate?: string;
    TestReasonText: string;
    TestReasonCode: string;
    TestIssues: string[];
    CreatedDate: string;
    UpdatedDate: string;
    IsTrio: boolean;
    TestFinishedDate?: string;
    RevisedDueDate?: string;
    Indent: number;
    InsuranceEnabled: boolean;
  }

  interface TestsJsonPayload {
    Data: WithWildCards<{ Tests: Test[] }>[];
    IsSuccess: boolean;
    ValidationResult: {
      IsValid: boolean;
      Errors: unknown;
    };
  }
}

export type TestContext = {
  test: Test;
  percentComplete?: number;
  expectedResultsDate?: string;
  lastUpdated?: string;
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
  ];

  return Object.keys(candidate as object).every((key) => props.includes(key));
}

const testMachine = createMachine(
  {
    id: 'child',
    initial: 'starting',
    states: {
      starting: {
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
      resultsReady: {},
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
