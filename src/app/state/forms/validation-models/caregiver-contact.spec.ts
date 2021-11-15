/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import {
  CaregiverContact,
  validateCaregiverContact,
} from './caregiver-contact';

describe('caregiver contact validations', () => {
  const validate = async (caregiverContact: Partial<CaregiverContact>) =>
    await validateCaregiverContact(caregiverContact).catch((error) => error);

  it('requires phone and email', async () => {
    const result = await validate({});

    expect(result).toContainEqual({
      field: 'email',
      message: 'forms.caregiverContact.email.errors.required',
    });

    expect(result).toContainEqual({
      field: 'phone',
      message: 'forms.caregiverContact.phone.errors.required',
    });
  });

  it('rejects invalid email addresses', async () => {
    const result = await validate({
      email: 'not an email address',
    });

    expect(result).toContainEqual({
      field: 'email',
      message: 'forms.caregiverContact.email.errors.invalid',
    });
  });

  it('rejects invalid phone numbers', async () => {
    const result = await validate({
      phone: 'not a phone number',
    });

    expect(result).toContainEqual({
      field: 'phone',
      message: 'forms.caregiverContact.phone.errors.invalid',
    });
  });
});
