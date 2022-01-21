export const single: Test = {
  TestID: '328657',
  TestCode: 'TL45',
  ShortDescription: 'Epidermolysis Bullosa Panel Sponsored by Krystal Biotech',
  ReflexOrderingParentTestCode: '',
  DueDate: '2021-11-11T00:00:00.000',
  LabStatus: 'In Lab',
  TestCancelledBySystem: '',
  WasBi: false,
  UserEnteredSliceName: '',
  PreDefinedSliceNames: '',
  PhenotypeNames: '',
  HoldForBI: false,
  BundledBillingQualify: false,
  TestReasonText: '',
  TestReasonCode: '',
  TestIssues: [],
  CreatedDate: '2021-11-15T13:32:15.343',
  UpdatedDate: '2021-11-15T13:33:26.853',
  IsTrio: false,
  Indent: 0,
  InsuranceEnabled: true,
};

export const list: Test[] = [single];

export const create = (updates: Partial<Test> = {}) => ({
  ...single,
  ...updates,
});

export const createMany = (updates: Partial<Test> = {}) => [create(updates)];
