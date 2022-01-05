/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import userEvents from '@testing-library/user-event';

import * as TestUtils from 'test-utils';

import { OnState } from './OnState';
import { useAppEvents, useAppSelector } from './hooks';

const mockSession: AuthenticatedSession = {
  nickname: '',
  name: '',
  picture: '',
  updated_at: '',
  email: 'someone@example.com',
  email_verified: false,
  sub: '',
};

function AuthDiagnostics(props: Props<unknown>) {
  const states = useAppSelector((state) =>
    JSON.stringify(state.toStrings().join(' '))
  );

  const auth = useAppSelector((state) => JSON.stringify(state.context.auth));
  const errors = useAppSelector((state) => state.context.auth.errors);

  const attempts = useAppSelector(
    (state) => state.context.auth.identityCheckAttempts
  );

  const caregiverEmail = useAppSelector(
    (state) => state.context.auth.session?.email
  );

  const patientGuid = useAppSelector((state) => state.context.auth.patientGuid);

  const attemptsExhausted = attempts === 0;

  const events = useAppEvents();

  return (
    <section>
      <section>
        <header>Current state</header>
        <pre>{states}</pre>
        <pre>{auth}</pre>
        <div>
          <span>{attempts} attempts remaining</span>
          <span>
            {attemptsExhausted
              ? 'No more checks allowed'
              : `${attempts} attempts left`}
          </span>
        </div>
        {errors.length > 0 ? (
          <div>
            <div>There were some problems.</div>
            <ul>
              {errors.map((error) => (
                <li key={error}>{error}</li>
              ))}
            </ul>
            <li></li>
          </div>
        ) : null}
        <div>Patient guid: {patientGuid}</div>
        <div>{caregiverEmail}</div>
        <div>
          <OnState matches="auth.checkingSession">Checking session</OnState>
          <OnState matches="auth.knownCaregiver">Known caregiver</OnState>
          <OnState matches="auth.requestingLogin">Requesting login</OnState>
          <OnState matches="auth.authenticating">Authenticating</OnState>
          <OnState matches="auth.identityUnverified">
            Unable to verify identity
          </OnState>
          <OnState matches="auth.verifyingIdentity">Verifying identity</OnState>
          <OnState matches="auth.checkingIdentity">Checking identity</OnState>
          <OnState matches="auth.checkingPatientGuid">
            Checking patient guid
          </OnState>
        </div>
      </section>
      <section>
        <header>Controls</header>
        <button onClick={events.checkIdentity}>Check identity</button>
        <button onClick={events.authenticate}>Login</button>
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
  it('begins by checking for a patient guid', async () => {
    const app = await TestUtils.renderWithShell(<AuthDiagnostics />, {
      onPatientGuid: neverResolves,
    });

    await app.findByText('Checking patient guid');
  });

  it('checks the patient guid when the app starts', async () => {
    const listener = jest.fn(neverResolves);
    const app = await TestUtils.renderWithShell(<AuthDiagnostics />, {
      onPatientGuid: listener,
    });

    await app.findByText('Checking patient guid');

    expect(listener).toHaveBeenCalled();
  });

  it('caches patient guid details', async () => {
    const patientGuid = '12345-45321';
    const app = await TestUtils.renderWithShell(<AuthDiagnostics />, {
      onPatientGuid: async () => patientGuid,
    });

    await app.findByText(`Patient guid: ${patientGuid}`);
  });

  it('calls the session handler after confirming a patient guid', async () => {
    const listener = jest.fn(async () => mockSession);

    await TestUtils.renderWithShell(<AuthDiagnostics />, {
      onSession: listener,
    });

    expect(listener).toHaveBeenCalled();
  });

  it('checks the session when onPatientGuid succeeds', async () => {
    const app = await TestUtils.renderWithShell(<AuthDiagnostics />, {
      onPatientGuid: asyncSuccess,
      // @ts-ignore
      onSession: neverResolves,
    });

    await app.findByText('Checking session');
  });

  it('transitions to known caregiver after a session check', async () => {
    const app = await TestUtils.renderWithShell(<AuthDiagnostics />, {
      onSession: async () => mockSession,
      onPatientGuid: asyncSuccess,
    });

    await app.findByText('Known caregiver');
  });

  it('records caregiver information from the session check', async () => {
    const app = await TestUtils.renderWithShell(<AuthDiagnostics />, {
      onSession: async () => mockSession,
      onPatientGuid: asyncSuccess,
    });

    await app.findByText(mockSession.email);
  });

  it('prompts for login if onPatientGuid fails', async () => {
    const app = await TestUtils.renderWithShell(<AuthDiagnostics />, {
      onSession: asyncFailure,
      onPatientGuid: asyncFailure,
    });

    await app.findByText('Requesting login');
  });

  describe('the identity check process', () => {
    it('calls onIdentity when an identity check occurs', async () => {
      const listener = jest.fn(asyncSuccess);

      const app = await TestUtils.renderWithShell(<AuthDiagnostics />, {
        onSession: asyncFailure,
        onPatientGuid: asyncSuccess,
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
          onPatientGuid: asyncSuccess,
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
              values: { dob, email, zip, phone: '' },
            }),
          }),
        }),
        expect.anything(),
        expect.anything()
      );
    });

    it('allows five attempted identity checks', async () => {
      const app = await TestUtils.renderWithShell(<AuthDiagnostics />, {
        onSession: asyncFailure,
        onPatientGuid: asyncSuccess,
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

  describe('the auth check process', () => {
    it('sends rejected logins back to requesting login', async () => {
      const app = await TestUtils.renderWithShell(<AuthDiagnostics />, {
        onSession: asyncFailure,
        onPatientGuid: asyncFailure,
        onAuthenticate: asyncFailure,
      });

      await app.findByText('Requesting login');

      userEvents.click(await app.findByText('Login'));

      await app.findByText('Authenticating');
      await app.findByText('Requesting login');
    });

    it('displays error messages on failed auth, but clears them', async () => {
      const onAuthenticate = jest
        .fn(async () => undefined)
        .mockRejectedValueOnce({
          error_description: 'Wrong email or password.',
        });

      const app = await TestUtils.renderWithShell(<AuthDiagnostics />, {
        onSession: asyncFailure,
        onPatientGuid: asyncFailure,
        onAuthenticate,
      });

      await app.findByText('Requesting login');

      userEvents.click(await app.findByText('Login'));

      await app.findByText('Authenticating');
      await app.findByText('Requesting login');

      await app.findByText('There were some problems.');
      await app.findByText('Wrong email or password.');

      await app.findByText('Requesting login');

      userEvents.click(await app.findByText('Login'));

      await app.findByText('Authenticating');
      await app.findByText('Known caregiver');

      expect(
        app.queryByText('There were some problems.')
      ).not.toBeInTheDocument();

      expect(
        app.queryByText('Wrong email or password.')
      ).not.toBeInTheDocument();
    });

    it('sends login credentials to onAuthenticate on login', async () => {
      function LoginForm() {
        const login = useAppSelector(
          (state) => state.context.forms.login.values
        );

        const fields = Object.keys(login) as (keyof typeof login)[];
        const events = useAppEvents();

        return (
          <form>
            {fields.map((field) => (
              <input
                key={field}
                value={login[field]}
                placeholder={field}
                onChange={(event) =>
                  events.loginChange({ field, value: event.target.value })
                }
              />
            ))}
          </form>
        );
      }

      const listener = jest.fn(asyncSuccess);

      const app = await TestUtils.renderWithShell(
        <AuthDiagnostics>
          <LoginForm />
        </AuthDiagnostics>,
        {
          onSession: asyncFailure,
          onPatientGuid: asyncFailure,
          onAuthenticate: listener,
        }
      );

      const email = 'someone@example.com';
      const password = 'super secret passphrase';

      userEvents.type(await app.findByPlaceholderText('email'), email);
      userEvents.type(await app.findByPlaceholderText('password'), password);

      await app.findByText('Requesting login');

      userEvents.click(await app.findByText('Login'));

      await app.findByText('Authenticating');

      expect(listener).toHaveBeenCalledWith(
        expect.objectContaining({
          forms: expect.objectContaining({
            login: expect.objectContaining({
              values: { email, password },
            }),
          }),
        }),
        expect.anything(),
        expect.anything()
      );
    });
  });
});
