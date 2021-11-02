const CheckIdentity = 'checkIdentity' as const;

declare global {
  interface AppEventMap {
    [CheckIdentity]: { type: typeof CheckIdentity };
  }
}

export {};
