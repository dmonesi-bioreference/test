/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { Consent, validateConsent } from './consent';

describe('caregiver contact validations', () => {
  const validate = async (consent: Partial<Consent>) =>
    await validateConsent(consent).catch((error) => error);

  it('is satisfied if both consent and terms are checked', async () => {
    const result = await validate({ terms: 'accepted', consent: 'given' });

    expect(result).toEqual({ terms: 'accepted', consent: 'given' });
  });

  it('requires consent', async () => {
    const result = await validate({ terms: 'accepted' });

    expect(result).toContainEqual({
      field: 'consent',
      message: 'forms.consent.consent.errors.required',
    });
  });

  it('requires terms are accepted', async () => {
    const result = await validate({ consent: 'given' });

    expect(result).toContainEqual({
      field: 'terms',
      message: 'forms.consent.terms.errors.required',
    });
  });
});
