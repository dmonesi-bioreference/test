import { getPatientInfo } from './web';

test('retrieving the patient GUID', async () => {
  const guid = '12345';
  const params = new URLSearchParams({ Guid: guid });
  const url = `/?${params}`;

  window.history.pushState({}, '', url);

  const result = await getPatientInfo();

  expect(result.guid).toEqual(guid);
});

test('retrieving the guid source', async () => {
  const source = 'Email';
  const params = new URLSearchParams({ Guid: '1234', Source: source });
  const url = `/?${params}`;

  window.history.pushState({}, '', url);

  const result = await getPatientInfo();

  expect(result.source).toEqual(source);
});

test('rejects payloads without guids', async () => {
  const source = 'Email';
  const params = new URLSearchParams({ Source: source });
  const url = `/?${params}`;

  window.history.pushState({}, '', url);

  await expect(getPatientInfo()).rejects.toEqual(undefined);
});
