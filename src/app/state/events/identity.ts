import { Identity } from 'models';

const IdentityChange = 'identityChange' as const;

declare global {
  interface AppEventMap {
    [IdentityChange]: {
      type: typeof IdentityChange;
      field: keyof Identity;
      value: string;
    };
  }
}
