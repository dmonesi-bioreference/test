
import * as content from './content';
import { identityProfile } from './identity-profile';
import { verifyPatientInfo } from './verify-patient-info';

declare global {
  interface RequestModelMap {}

  type RequestModelKey = keyof RequestModelMap;
  type RequestModel<GivenKey extends RequestModelKey> = {
    key: GivenKey;
    init: RequestModelMap[GivenKey];
  };

  type RequestModels = { [Key in RequestModelKey]: RequestModel<Key> };

  type InitRequest<GivenKey extends RequestModelKey> = `${GivenKey}Request`;

  type RequestServiceMap = {
    [GivenKey in RequestModelKey as `handle${Capitalize<GivenKey>}Request`]: AppEventFn<
      RequestModelMap[GivenKey]
    >;
  };

  type RequestDispatchMap = {
    [Key in RequestModelKey as InitRequest<Key>]: {
      type: InitRequest<Key>;
    };
  };
}

// Add a request model to this export to incorporate it into the forms
// state chart automatically.
//
export const all = [
  identityProfile,
  verifyPatientInfo,
  ...content.all,
];
