/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { Identity, validateIdentity } from './identity';

describe('identity validations', () => {
  const validate = async (identity: Partial<Identity>) =>
    await validateIdentity(identity).catch((error) => error);

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
