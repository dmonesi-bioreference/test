const NextStep = 'nextStep' as const;

declare global {
  interface AppEventMap {
    [NextStep]: { type: typeof NextStep };
  }
}

export {};
