declare global {
  interface RequestModelMap {
    verifyPatientInfo: {};
  }
}

export const verifyPatientInfo: RequestModels['verifyPatientInfo'] = {
  key: 'verifyPatientInfo',
  init: {},
};
