/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { validatePassword } from './password';

describe('Validating passwords', () => {
  const validate = async (password: Partial<ValidationModelMap['password']>) =>
    await validatePassword(password).catch((error) => error);

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

    expect(result).toContainEqual({
      field: 'termsAndConditions',
      message: 'forms.password.termsAndConditions.errors.required',
    });
  });

  it('requires password and confirmation match, and terms and conditions is checked', async () => {
    const result = await validate({
      password: 'arglebargle',
      confirmation: 'arglemcbargle',
      termsAndConditions: '',
    });

    expect(result).toContainEqual({
      field: 'confirmation',
      message: 'forms.password.confirmation.errors.invalid',
    });

    expect(result).toContainEqual({
      field: 'termsAndConditions',
      message: 'forms.password.termsAndConditions.errors.required',
    });
  });
});
