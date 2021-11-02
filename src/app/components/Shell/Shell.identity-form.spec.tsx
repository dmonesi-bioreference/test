/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import userEvents from '@testing-library/user-event';

import * as TestUtils from 'test-utils';

import { OnState } from './OnState';
import { useAppEvents, useAppSelector } from './hooks';

function IdentityFormDiagnostics() {
  const { values, errors } = useAppSelector(
    (state) => state.context.forms.identity
  );

  const fields = Object.keys(values) as (keyof typeof values)[];
  const events = useAppEvents();

  return (
    <form>
      <section>
        <OnState matches="forms.identity.validation.valid">Form valid</OnState>
        <OnState matches="forms.identity.validation.invalid">
          <header>There were some problems.</header>
          {errors.map((error) => (
            <div key={error.message} aria-label="error-message">
              {error.message}
            </div>
          ))}
        </OnState>
      </section>
      <section>
        {fields.map((field) => (
          <label key={field}>
            <input
              value={values[field]}
              placeholder={field}
              onChange={(event) =>
                events.identityChange({ field, value: event.target.value })
              }
            />
            <span>{values[field]}</span>
          </label>
        ))}
      </section>
    </form>
  );
}

describe('Identity form model', () => {
  const dob = '10/22/2021';
  const email = 'someone@example.com';
  const zip = '90210';

  it('recognizes valid data', async () => {
    const app = await TestUtils.renderWithShell(<IdentityFormDiagnostics />);

    userEvents.type(await app.findByPlaceholderText('dob'), dob);
    userEvents.type(await app.findByPlaceholderText('email'), email);
    userEvents.type(await app.findByPlaceholderText('zip'), zip);

    await app.findByText('Form valid');
  });

  it('recognizes invalid zip codes', async () => {
    const app = await TestUtils.renderWithShell(<IdentityFormDiagnostics />);

    userEvents.type(await app.findByPlaceholderText('dob'), dob);
    userEvents.type(await app.findByPlaceholderText('email'), email);
    userEvents.type(
      await app.findByPlaceholderText('zip'),
      "this isn't the right zip code format"
    );

    expect(await app.findAllByLabelText('error-message')).toHaveLength(1);
  });

  it('recognizes invalid email addresses', async () => {
    const app = await TestUtils.renderWithShell(<IdentityFormDiagnostics />);

    userEvents.type(await app.findByPlaceholderText('dob'), dob);
    userEvents.type(
      await app.findByPlaceholderText('email'),
      "email addresses don't work like this"
    );
    userEvents.type(await app.findByPlaceholderText('zip'), zip);

    expect(await app.findAllByLabelText('error-message')).toHaveLength(1);
  });
});
