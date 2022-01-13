import { isTest } from 'app/state/tests/models';
import { mockTest } from 'mocks/test';

export async function getTests(patientGuid: string): Promise<Test[]> {
  if (patientGuid === '' && process.env.NODE_ENV !== 'development')
    return [mockTest];

  const res = await (await fetch(`/api/tests/${patientGuid}`)).json();

  if (Array.isArray(res) && res.every((e) => isTest(e)))
    return Promise.resolve(res as Test[]);

  return Promise.reject();
}
