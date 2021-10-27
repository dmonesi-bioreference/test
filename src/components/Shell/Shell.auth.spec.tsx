/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import userEvents from '@testing-library/user-event';

import * as TestUtils from 'test-utils';

import { OnState } from './OnState';
import { useAppEvents, useAppSelector } from './hooks';

function AuthDiagnostics(props: Props<unknown>) {
  const states = useAppSelector((state) =>
    JSON.stringify(state.toStrings().join(' '))
  );

  const attempts = useAppSelector(
    (state) => state.context.auth.identityCheckAttempts
  );

  const attemptsExhausted = attempts === 0;

  const events = useAppEvents();

  return (
    <section>
      <section>
        <header>Current state</header>
        <pre>{states}</pre>
        <div>
          <span>{attempts} attempts remaining</span>
          <span>
            {attemptsExhausted
              ? 'No more checks allowed'
              : `${attempts} attempts left`}
          </span>
        </div>
        <div>
          <OnState matches="app.auth.checkingSession">Checking session</OnState>
          <OnState matches="app.auth.knownCaregiver">Known caregiver</OnState>
          <OnState matches="app.auth.requestingLogin">Requesting login</OnState>
          <OnState matches="app.auth.identityUnverified">
            Unable to verify identity
          </OnState>
          <OnState matches="app.auth.verifyingIdentity">
            Verifying identity
          </OnState>
          <OnState matches="app.auth.checkingIdentity">
            Checking identity
          </OnState>
          <OnState matches="app.auth.checkingMagicLink">
            Checking magic link
          </OnState>
        </div>
      </section>
      <section>
        <header>Controls</header>
        <button onClick={events.checkIdentity}>Check identity</button>
      </section>
      {props.children}
    </section>
  );
}

const neverResolves = async () => {
  await TestUtils.delay(10_000_000);
  await new Promise((resolve) => setTimeout(resolve, 10_000_000));
};

const asyncSuccess = async () => undefined;

const asyncFailure = async () => {
  throw new Error('Explosions!');
};

describe('Auth model', () => {
  it('begins in a checking session state', async () => {
    const app = await TestUtils.renderWithShell(<AuthDiagnostics />, {
      onSession: neverResolves,
    });

    await app.findByText('Checking session');
  });

  it('checks the session when the app starts', async () => {
    const listener = jest.fn(async () => undefined);

    await TestUtils.renderWithShell(<AuthDiagnostics />, {
      onSession: listener,
    });

    expect(listener).toHaveBeenCalled();
  });

  it('transitions to known caregiver if the session check succeeds', async () => {
    const app = await TestUtils.renderWithShell(<AuthDiagnostics />);

    await app.findByText('Known caregiver');
  });

  it('begins checking for a magic link if the session check fails', async () => {
    const app = await TestUtils.renderWithShell(<AuthDiagnostics />, {
      onSession: asyncFailure,
      onMagicLink: neverResolves,
    });

    await app.findByText('Checking magic link');
  });

  it('calls the onMagicLink handler when checking the magic link', async () => {
    const listener = jest.fn(neverResolves);
    const app = await TestUtils.renderWithShell(<AuthDiagnostics />, {
      onSession: asyncFailure,
      onMagicLink: listener,
    });

    await app.findByText('Checking magic link');

    expect(listener).toHaveBeenCalled();
  });

  it('begins verifying identity when onMagicLink succeeds', async () => {
    const app = await TestUtils.renderWithShell(<AuthDiagnostics />, {
      onSession: asyncFailure,
      onMagicLink: async () => undefined,
    });

    await app.findByText('Verifying identity');
  });

  it('prompts for login if onMagicLink fails', async () => {
    const app = await TestUtils.renderWithShell(<AuthDiagnostics />, {
      onSession: asyncFailure,
      onMagicLink: asyncFailure,
    });

    await app.findByText('Requesting login');
  });

  describe('the identity check process', () => {
    it('calls onIdentity when an identity check occurs', async () => {
      const listener = jest.fn(asyncSuccess);

      const app = await TestUtils.renderWithShell(<AuthDiagnostics />, {
        onSession: asyncFailure,
        onMagicLink: asyncSuccess,
        onIdentity: listener,
      });

      userEvents.click(await app.findByText('Check identity'));
      await app.findByText('Checking identity');

      expect(listener).toHaveBeenCalled();
    });

    it('calls onIdentity with identity info', async () => {
      function IdentityForm() {
        const identity = useAppSelector(
          (state) => state.context.forms.identity.values
        );

        const fields = Object.keys(identity) as (keyof typeof identity)[];
        const events = useAppEvents();

        return (
          <form>
            {fields.map((field) => (
              <input
                key={field}
                value={identity[field]}
                placeholder={field}
                onChange={(event) =>
                  events.identityChange({ field, value: event.target.value })
                }
              />
            ))}
          </form>
        );
      }

      const listener = jest.fn(asyncSuccess);
      const dob = '10/22/2021';
      const email = 'someone@example.com';
      const zip = '12345';

      const app = await TestUtils.renderWithShell(
        <AuthDiagnostics>
          <IdentityForm />
        </AuthDiagnostics>,
        {
          onSession: asyncFailure,
          onMagicLink: asyncSuccess,
          onIdentity: listener,
        }
      );

      userEvents.type(await app.findByPlaceholderText('dob'), dob);
      userEvents.type(await app.findByPlaceholderText('email'), email);
      userEvents.type(await app.findByPlaceholderText('zip'), zip);

      userEvents.click(await app.findByText('Check identity'));

      await app.findByText('Checking identity');

      expect(listener).toHaveBeenCalledWith(
        expect.objectContaining({
          forms: expect.objectContaining({
            identity: expect.objectContaining({
              values: { dob, email, zip },
            }),
          }),
        }),
        expect.anything(),
        expect.anything()
      );
    });

    fit('allows five attempted identity checks', async () => {
      const app = await TestUtils.renderWithShell(<AuthDiagnostics />, {
        onSession: asyncFailure,
        onMagicLink: asyncSuccess,
        onIdentity: asyncFailure,
      });

      await app.findByText('5 attempts remaining');
      userEvents.click(await app.findByText('Check identity'));
      userEvents.click(await app.findByText('Check identity'));
      userEvents.click(await app.findByText('Check identity'));
      userEvents.click(await app.findByText('Check identity'));
      userEvents.click(await app.findByText('Check identity'));
      userEvents.click(await app.findByText('Check identity'));
      await app.findByText('0 attempts remaining');

      await app.findByText('No more checks allowed');
      await app.findByText('Unable to verify identity');
    });
  });
});
