/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { Identity, validateIdentity } from './identity';

describe('identity validations', () => {
  const validate = async (identity: Partial<Identity>) =>
    await validateIdentity(identity).catch((error) => error);

  it('allows either phone number or email', async () => {
    const phoneOnly = await validate({ phone: '1 234 567 8910' });
    const emailOnly = await validate({ email: 'person@example.com' });

    expect(phoneOnly).not.toContainEqual({
      field: 'email',
      message: 'forms.identity.email.errors.required',
    });

    expect(emailOnly).not.toContainEqual({
      field: 'phone',
      message: 'forms.identity.phone.errors.required',
    });
  });

  it('requires email, phone, and zip', async () => {
    const result = await validate({});

    expect(result).toContainEqual({
      field: 'email',
      message: 'forms.identity.email.errors.required',
    });

    expect(result).toContainEqual({
      field: 'phone',
      message: 'forms.identity.phone.errors.required',
    });

    expect(result).toContainEqual({
      field: 'zip',
      message: 'forms.identity.zip.errors.required',
    });
  });

  it('rejects invalid email addresses', async () => {
    const result = await validate({
      email: 'arglebargle',
    });

    expect(result).toContainEqual({
      field: 'email',
      message: 'forms.identity.email.errors.invalid',
    });
  });

  it('rejects invalid phone numbers', async () => {
    const result = await validate({
      phone: 'snuffalufagus',
    });

    expect(result).toContainEqual({
      field: 'phone',
      message: 'forms.identity.phone.errors.invalid',
    });
  });

  it('rejects invalid zip codes', async () => {
    const result = await validate({
      zip: 'fnarfwarfen',
    });

    expect(result).toContainEqual({
      field: 'zip',
      message: 'forms.identity.zip.errors.invalid',
    });
  });
});
