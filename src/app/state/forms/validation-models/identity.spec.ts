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

  it('allows submissions with either email or phone', async () => {
    const phone = '212-345-9198';
    const dob = '02/02/2022';
    const email = 'person@example.com';
    const zip = '12345';

    const withPhone = await validate({ phone, dob, zip });
    const withEmail = await validate({ email, dob, zip });

    expect(withEmail).toEqual({ email, dob, zip });
    expect(withPhone).toEqual({ phone, dob, zip });
  });

  it('accepts past and future dates of birth', async () => {
    const dateToDobString = (date: Date) => {
      const year = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(
        date
      );
      const month = new Intl.DateTimeFormat('en', { month: 'numeric' }).format(
        date
      );
      const day = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(
        date
      );

      return `${year}-${month}-${day}`;
    };

    const nextYear = new Date().getFullYear() + 1;
    const lastYear = new Date().getFullYear() - 1;

    const future = await validate({
      dob: `${nextYear}-12-28`,
    });

    expect(future).not.toContainEqual({
      field: 'dob',
      message: 'forms.identity.dob.errors.future',
    });

    const past = await validate({
      dob: `${lastYear}-12-28`,
    });

    expect(past).not.toContainEqual({
      field: 'dob',
      message: 'forms.identity.dob.errors.future',
    });

    const today = await validate({
      dob: dateToDobString(new Date()),
    });

    expect(today).not.toContainEqual({
      field: 'dob',
      message: 'forms.identity.dob.errors.future',
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
