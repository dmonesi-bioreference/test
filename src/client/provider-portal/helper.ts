import { isTestsJsonPayload, mockTest } from "app/state/tests/models";

export async function getTestsFromContext(context: AppContext): Promise<Test[]> {
  const patientGuid = context.auth.patientGuid;
  
  if (patientGuid === "" && process.env.NODE_ENV !== 'production') return [mockTest];
  
  const res = await (await fetch(`/api/tests/${patientGuid}`)).json();

  if (isTestsJsonPayload(res)) {
    return Promise.resolve(res.Data[0].Tests);
  }

  return Promise.reject(res);
}
