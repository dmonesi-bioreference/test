/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { validatePassword } from './password';

describe('Validating passwords', () => {
  const validate = async (password: Partial<ValidationModelMap['password']>) =>
    await validatePassword(password).catch((error) => error);

  it('requires passwords of length 8 or more', async () => {
    const invalid = await validate({
      password: 'argle',
    });

    expect(invalid).toContainEqual({
      field: 'password',
      message: 'forms.password.password.errors.short',
    });

    const valid = await validate({
      password: 'arglebargle',
    });

    expect(valid).not.toContainEqual({
      field: 'password',
      message: 'forms.password.password.errors.short',
    });
  });

  it('requires a number, lowercase & uppercase letter, and a special character', async () => {
    const invalid = await validate({
      password: 'arglebargle',
    });

    expect(invalid).toContainEqual({
      field: 'password',
      message: 'forms.password.password.errors.invalid',
    });

    const valid = await validate({
      password: '1Arglebargle!',
    });

    expect(valid).not.toContainEqual({
      field: 'password',
      message: 'forms.password.password.errors.invalid',
    });
  });

  it('requires password and password confirmation', async () => {
    const result = await validate({});

    expect(result).toContainEqual({
      field: 'confirmation',
      message: 'forms.password.confirmation.errors.required',
    });

    expect(result).toContainEqual({
      field: 'password',
      message: 'forms.password.password.errors.required',
    });
  });

  it('requires password and confirmation match', async () => {
    const result = await validate({
      password: 'arglebargle',
      confirmation: 'arglemcbargle',
    });

    expect(result).toContainEqual({
      field: 'confirmation',
      message: 'forms.password.confirmation.errors.invalid',
    });
  });
});
