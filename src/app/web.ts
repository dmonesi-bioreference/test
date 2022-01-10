export async function getPatientInfo(): Promise<PatientInfo> {
  const params = new URLSearchParams(window.location.search);
  const payload = {
    guid: params.get('Guid') || '',
    source: params.get('Source') || '',
  };

  if (payload.guid) {
    return payload;
  }

  return Promise.reject();
}
