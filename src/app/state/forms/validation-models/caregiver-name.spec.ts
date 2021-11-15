/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { validateCaregiverName } from './caregiver-name';

describe('caregiver name validations', () => {
  const validate = async (
    caregiverName: Partial<ValidationModelMap['caregiverName']>
  ) => await validateCaregiverName(caregiverName).catch((error) => error);

  it('requires date of birth, email, and zip', async () => {
    const result = await validate({});

    expect(result).toContainEqual({
      field: 'firstName',
      message: 'forms.caregiverName.firstName.errors.required',
    });

    expect(result).toContainEqual({
      field: 'lastName',
      message: 'forms.caregiverName.lastName.errors.required',
    });
  });
});
