/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import {
  caregiverRelationshipValues,
  validateCaregiverRelationship,
} from './caregiver-relationship';

describe('caregiver relationship validations', () => {
  const validate = async (
    caregiverRelationship: Partial<ValidationModelMap['caregiverRelationship']>
  ) =>
    await validateCaregiverRelationship(caregiverRelationship).catch(
      (error) => error
    );

  it('requires date of birth, email, and zip', async () => {
    const result = await validate({});

    expect(result).toContainEqual({
      field: 'dob',
      message: 'forms.caregiverRelationship.dob.errors.required',
    });

    expect(result).toContainEqual({
      field: 'relationship',
      message: 'forms.caregiverRelationship.relationship.errors.required',
    });
  });

  describe('validating relationships', () => {
    const assertSuccesses = it.each(caregiverRelationshipValues);
    const assertFailures = it.each(['arglebargle', 'other unallowed things']);

    assertSuccesses(
      'accepts %s as a relationship value',
      async (relationship: any) => {
        const result = await validate({ relationship });

        expect(result).not.toContainEqual({
          field: 'relationship',
          message: 'forms.caregiverRelationship.relationship.errors.invalid',
        });
      }
    );

    assertFailures(
      'rejects %s as a relationship value',
      async (relationship: any) => {
        const result = await validate({ relationship });

        expect(result).toContainEqual({
          field: 'relationship',
          message: 'forms.caregiverRelationship.relationship.errors.invalid',
        });
      }
    );
  });
});
