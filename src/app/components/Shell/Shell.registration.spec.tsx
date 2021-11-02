import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { OnState } from './OnState';
import { Shell } from './Shell';
import { useAppSelector, useAppEvents } from './hooks';

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
        <OnState matches="registration.one">(step 1)</OnState>
        <OnState matches="registration.two">(step 2)</OnState>
        <OnState matches="registration.three">(step 3)</OnState>
        <OnState matches="registration.four">(step 4)</OnState>
      </section>
      <section>
        <header>Control panel</header>
        <button onClick={events.nextStep}>Next</button>
      </section>
    </>
  );
}

describe('Registration model', () => {
  it('starts on the first step', async () => {
    const app = render(
      <Shell>
        <RegistrationDiagnostics />
      </Shell>
    );

    await app.findByText('(step 1)');
  });

  it('has four steps', async () => {
    const app = render(
      <Shell
        onAuthenticate={async () => {
          throw new Error('401 Unauthorized');
        }}
      >
        <RegistrationDiagnostics />
      </Shell>
    );

    await app.findByText('(step 1)');

    userEvent.click(await app.findByText('Next'));
    await app.findByText('(step 2)');

    userEvent.click(await app.findByText('Next'));
    await app.findByText('(step 3)');

    userEvent.click(await app.findByText('Next'));
    await app.findByText('(step 4)');

    userEvent.click(await app.findByText('Next'));
    await app.findByText('(step 4)');
  });
});
