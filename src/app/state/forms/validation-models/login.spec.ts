/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { Login, validateLogin } from './login';

describe('Login validations', () => {
  const validate = async (identity: Partial<Login>) =>
    await validateLogin(identity).catch((error) => error);

  it('requires email and password', async () => {
    const result = await validate({});

    expect(result).toContainEqual({
      field: 'email',
      message: 'forms.login.email.errors.required',
    });

    expect(result).toContainEqual({
      field: 'password',
      message: 'forms.login.password.errors.required',
    });
  });

  it('rejects invalid email addresses', async () => {
    const result = await validate({
      email: 'arglebargle',
    });

    expect(result).toContainEqual({
      field: 'email',
      message: 'forms.login.email.errors.invalid',
    });
  });
});
