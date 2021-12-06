export const LabStates = [
  "in transit",
  "specimen received",
  "hold for bi",
  "in lab",
  "on hold",
  "canceled",
  "finished",
  "report ready",
  "updated report"
] as const;

type LabStatesType = typeof LabStates[number];

export interface TestStatusProps {
  labState: LabStatesType;
  lastUpdated?: string;
  expectedResultsDate?: string;
}