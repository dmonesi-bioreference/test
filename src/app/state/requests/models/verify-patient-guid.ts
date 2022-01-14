declare global {
  interface RequestModelMap {
    verifyPatientGuid: {};
  }
}

export const verifyPatientGuid: RequestModels['verifyPatientGuid'] = {
  key: 'verifyPatientGuid',
  init: {},
};
