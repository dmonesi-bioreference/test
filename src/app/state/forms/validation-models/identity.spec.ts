/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { validateIdentity } from './identity';

describe('identity validations', () => {
  const validate = async (identity: Partial<ValidationModelMap['identity']>) =>
    await validateIdentity(identity).catch((error) => error);

  it('allows empty phones', async () => {
    const result = await validate({});

    expect(result).not.toContainEqual(
      expect.objectContaining({ field: 'phone' })
    );
  });

  it('requires date of birth, email, and zip', async () => {
    const result = await validate({});

    expect(result).toContainEqual({
      field: 'dob',
      message: 'forms.identity.dob.errors.required',
    });

    expect(result).toContainEqual({
      field: 'email',
      message: 'forms.identity.email.errors.required',
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
      phone: 'arglebargle',
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
