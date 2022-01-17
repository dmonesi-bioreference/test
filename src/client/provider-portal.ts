import { isTest, mockTest } from "app/state/tests/models";

export async function getTestsFromContext(context: AppContext): Promise<Test[]> {
  const patientGuid = context.auth.patientGuid;
  
  if (patientGuid === "" && process.env.NODE_ENV !== 'production') return [mockTest];
  
  const res = await (await fetch(`/api/tests/${patientGuid}`)).json();

  if (Array.isArray(res) && res.every(e => isTest(e))) return Promise.resolve(res as Test[]);

  return Promise.reject();
}