/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import userEvents from '@testing-library/user-event';

import * as TestUtils from 'test-utils';

import { OnState } from './OnState';
import { useAppEvents, useAppSelector } from './hooks';

function LoginFormDiagnostics() {
  const states = useAppSelector((state) => state.toStrings().join(' '));

  const { values, errors } = useAppSelector(
    (state) => state.context.forms.login
  );

  const fields = Object.keys(values) as (keyof typeof values)[];
  const events = useAppEvents();

  return (
    <form>
      <div>{states}</div>
      <section>
        <OnState matches="forms.login.validation.valid">Form valid</OnState>
        <OnState matches="forms.login.validation.invalid">
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
                events.loginChange({ field, value: event.target.value })
              }
            />
            <span>{values[field]}</span>
          </label>
        ))}
      </section>
    </form>
  );
}

describe('Login form model', () => {
  const email = 'someone@example.com';
  const password = 'super secret password';

  it('recognizes valid data', async () => {
    const app = await TestUtils.renderWithShell(<LoginFormDiagnostics />);

    userEvents.type(await app.findByPlaceholderText('email'), email);
    userEvents.type(await app.findByPlaceholderText('password'), password);

    await app.findByText('Form valid');
  });

  it('recognizes invalid email addresses', async () => {
    const app = await TestUtils.renderWithShell(<LoginFormDiagnostics />);

    userEvents.type(
      await app.findByPlaceholderText('email'),
      "email addresses don't work like this"
    );
    userEvents.type(await app.findByPlaceholderText('password'), password);

    expect(await app.findAllByLabelText('error-message')).toHaveLength(1);
  });
});
