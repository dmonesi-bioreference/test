import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { OnState } from './OnState';
import { Shell } from './Shell';
import { useAppSelector, useAppEvents } from './hooks';

function RegistrationDiagnostics() {
  const states = useAppSelector((state) =>
    JSON.stringify(state.toStrings().join(' '))
  );

  const steps = useAppSelector((state) =>
    state.context.registration.steps.join(', ')
  );
  const events = useAppEvents();

  return (
    <>
      <section>
        <header>Current state</header>
        <pre>{states}</pre>
        <div>Steps visited: {steps}</div>
        <div>
          <OnState matches="registration.consent">Consent</OnState>
          <OnState matches="registration.name">Name</OnState>
          <OnState matches="registration.contact">Contact</OnState>
          <OnState matches="registration.relationship">Relationship</OnState>
          <OnState matches="registration.password">Password</OnState>
        </div>
      </section>
      <section>
        <nav>
          <ul>
            <li>
              <button onClick={() => events.visitStep({ step: 'name' })}>
                Visit name step
              </button>
            </li>
            <li>
              <button onClick={() => events.visitStep({ step: 'contact' })}>
                Visit contact step
              </button>
            </li>
            <li>
              <button
                onClick={() => events.visitStep({ step: 'relationship' })}
              >
                Visit relationship step
              </button>
            </li>
            <li>
              <button onClick={() => events.visitStep({ step: 'password' })}>
                Visit password step
              </button>
            </li>
          </ul>
        </nav>
        <header>Control panel</header>
        <button onClick={events.nextStep}>Next</button>
      </section>
    </>
  );
}

describe('Registration model', () => {
  it('Begins with a request for consent', async () => {
    const app = render(
      <Shell>
        <RegistrationDiagnostics />
      </Shell>
    );

    await app.findByText('Consent');
  });

  it('has five steps', async () => {
    const app = render(
      <Shell>
        <RegistrationDiagnostics />
      </Shell>
    );

    await app.findByText('Consent');

    userEvent.click(await app.findByText('Next'));
    await app.findByText('Name');

    userEvent.click(await app.findByText('Next'));
    await app.findByText('Contact');

    userEvent.click(await app.findByText('Next'));
    await app.findByText('Relationship');

    userEvent.click(await app.findByText('Next'));
    await app.findByText('Password');

    userEvent.click(await app.findByText('Next'));
    await app.findByText('Password');
  });

  it('tracks each step taken', async () => {
    const app = render(
      <Shell>
        <RegistrationDiagnostics />
      </Shell>
    );

    await app.findByText('Steps visited: consent');

    userEvent.click(await app.findByText('Next'));
    userEvent.click(await app.findByText('Next'));
    userEvent.click(await app.findByText('Next'));

    await app.findByText('Steps visited: consent, name, contact, relationship');

    userEvent.click(await app.findByText('Next'));

    await app.findByText(
      'Steps visited: consent, name, contact, relationship, password'
    );

    userEvent.click(await app.findByText('Next'));

    await app.findByText(
      'Steps visited: consent, name, contact, relationship, password'
    );
  });

  it('allows you to revisit complete steps', async () => {
    const app = render(
      <Shell>
        <RegistrationDiagnostics />
      </Shell>
    );

    await app.findByText('Steps visited: consent');

    userEvent.click(await app.findByText('Next'));
    userEvent.click(await app.findByText('Next'));
    userEvent.click(await app.findByText('Next'));

    await app.findByText('Steps visited: consent, name, contact, relationship');

    userEvent.click(await app.findByText('Visit name step'));

    await app.findByText('Name');
  });

  it('prevents you from skipping to incomplete steps', async () => {
    const app = render(
      <Shell>
        <RegistrationDiagnostics />
      </Shell>
    );

    await app.findByText('Steps visited: consent');

    userEvent.click(await app.findByText('Next'));

    await app.findByText('Steps visited: consent, name');

    userEvent.click(await app.findByText('Visit password step'));

    await app.findByText('Name');
  });
});
