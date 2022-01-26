export const Identity = {
  validate: async (context: AppContext) => {
    const { email, dob, zip, phone } = context.forms.identity.values;

    const payload = {
      email,
      dateOfBirth: dob,
      PatientUserId: context.auth.patientGuid,
      Phone: phone,
      zip,
    };

    const result = await fetch('/api/identity/validate', {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });

    if (result.ok) {
      return (await result.json()) as {};
    } else {
      return Promise.reject({});
    }
  },
};