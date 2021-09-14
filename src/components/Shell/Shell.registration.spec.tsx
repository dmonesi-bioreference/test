/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { OnState } from './OnState';
import { Shell } from './Shell';
import { useAppSelector, useAppEvents } from './hooks';
import { initialContext } from './state';

// An eternal promise so we can control which state we land in.
const delay = (delayInMillis = 10_000_000) =>
  new Promise((resolve) => setTimeout(resolve, delayInMillis));

function RegistrationDiagnostics() {
  const states = useAppSelector((state) =>
    JSON.stringify(state.toStrings().join(' '))
  );

  const events = useAppEvents();

  return (
    <>
      <section>
        <header>Current state</header>
        <pre>{states}</pre>
        <OnState matches="app.checking">Checking identity</OnState>
        <OnState matches="app.authenticating.authenticate">
          Authenticating
        </OnState>
        <OnState matches="app.portal">Portal</OnState>
        <OnState matches="app.visiting">Visiting</OnState>

        <OnState matches="app.authenticating.onboarding">Onboarding</OnState>
        <OnState matches="app.authenticating.register">Registration</OnState>
        <OnState matches="app.authenticating.consent">
          Requesting consent
        </OnState>

        <OnState matches="app.authenticating.signup">
          <span>Signup</span>
          <span>
            <OnState matches="app.authenticating.signup.one">(step 1)</OnState>
            <OnState matches="app.authenticating.signup.two">(step 2)</OnState>
            <OnState matches="app.authenticating.signup.three">
              (step 3)
            </OnState>
            <OnState matches="app.authenticating.signup.four">(step 4)</OnState>
          </span>
        </OnState>
      </section>
      <section>
        <header>Control panel</header>
        <button onClick={events.register}>Register</button>
        <button onClick={events.confirm}>Confirm</button>
        <button onClick={events.consent}>Consent</button>
        <button onClick={events.accept}>Accept</button>
        <button onClick={events.nextStep}>Next</button>
      </section>
    </>
  );
}

describe('Registration model & components', () => {
  it('checks for identity', async () => {
    const app = render(
      <Shell>
        <RegistrationDiagnostics />
      </Shell>
    );

    await app.findByText('Checking identity');
  });

  it('calls onAuth when the shell mounts', async () => {
    let givenContext: any;

    const listener = jest.fn(async (context) => {
      givenContext = context;

      await delay();
    });

    const app = render(
      <Shell onIdentity={listener}>
        <RegistrationDiagnostics />
      </Shell>
    );

    await app.findByText('Checking identity');

    expect(givenContext).toEqual(initialContext);
    expect(listener).toHaveBeenCalled();
  });

  it('if identity checks fail, the shell transitions to a visiting state', async () => {
    const app = render(
      <Shell
        onIdentity={async () => {
          throw new Error('No identity found');
        }}
      >
        <RegistrationDiagnostics />
      </Shell>
    );

    await app.findByText('Visiting');
  });

  it('if identity check succeeds, the shell transitions to authenticating', async () => {
    const app = render(
      <Shell
        onAuthenticate={async () => {
          await delay();
        }}
      >
        <RegistrationDiagnostics />
      </Shell>
    );

    await app.findByText('Authenticating');
  });

  it('calls onAuthenticate when authenticating', async () => {
    let givenContext: any;

    const listener = jest.fn(async (context) => {
      givenContext = context;

      // An eternal promise so we can keep the target state
      await delay();
    });

    const app = render(
      <Shell onAuthenticate={listener}>
        <RegistrationDiagnostics />
      </Shell>
    );

    await app.findByText('Authenticating');

    expect(listener).toHaveBeenCalled();
    expect(givenContext).toEqual(initialContext);
  });

  it('the user to the portal on successful authentication', async () => {
    const app = render(
      <Shell>
        <RegistrationDiagnostics />
      </Shell>
    );

    await app.findByText('Portal');
  });

  it('begins the onboarding process on unsuccessful authentication', async () => {
    const app = render(
      <Shell
        onAuthenticate={async () => {
          throw new Error('401 Unauthorized');
        }}
      >
        <RegistrationDiagnostics />
      </Shell>
    );

    await app.findByText('Onboarding');
  });

  it('the onboarding process navigates the user through registration, to signup', async () => {
    const app = render(
      <Shell
        onAuthenticate={async () => {
          throw new Error('401 Unauthorized');
        }}
      >
        <RegistrationDiagnostics />
      </Shell>
    );

    userEvent.click(await app.findByText('Register'));
    await app.findByText('Registration');

    userEvent.click(await app.findByText('Confirm'));
    await app.findByText('Signup');
    await app.findByText('(step 1)');
  });

  it('signup requires all four steps to complete before requesting consent', async () => {
    const app = render(
      <Shell
        onAuthenticate={async () => {
          throw new Error('401 Unauthorized');
        }}
      >
        <RegistrationDiagnostics />
      </Shell>
    );

    userEvent.click(await app.findByText('Register'));
    userEvent.click(await app.findByText('Confirm'));

    await app.findByText('Signup');
    await app.findByText('(step 1)');

    userEvent.click(await app.findByText('Consent'));
    await app.findByText('(step 1)');

    userEvent.click(await app.findByText('Next'));
    await app.findByText('(step 2)');

    userEvent.click(await app.findByText('Next'));
    await app.findByText('(step 3)');

    userEvent.click(await app.findByText('Next'));
    await app.findByText('(step 4)');

    userEvent.click(await app.findByText('Consent'));

    await app.findByText('Requesting consent');
  });

  it('sends you to the portal after finishing signup', async () => {
    const app = render(
      <Shell
        onAuthenticate={async () => {
          throw new Error('401 Unauthorized');
        }}
      >
        <RegistrationDiagnostics />
      </Shell>
    );

    userEvent.click(await app.findByText('Register'));
    userEvent.click(await app.findByText('Confirm'));
    userEvent.click(await app.findByText('Next'));
    userEvent.click(await app.findByText('Next'));
    userEvent.click(await app.findByText('Next'));
    userEvent.click(await app.findByText('Consent'));
    userEvent.click(await app.findByText('Accept'));

    await app.findByText('Portal');
  });
});
