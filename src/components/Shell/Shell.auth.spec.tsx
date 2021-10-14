import * as TestUtils from 'test-utils';

import { OnState } from './OnState';
import { useAppSelector } from './hooks';

function AuthDiagnostics() {
  const states = useAppSelector((state) =>
    JSON.stringify(state.toStrings().join(' '))
  );

  return (
    <section>
      <header>Current state</header>
      <pre>{states}</pre>
      <OnState matches="app.auth.checkingSession">Checking session</OnState>
      <OnState matches="app.auth.validSession">Valid session</OnState>
      <OnState matches="app.auth.invalidSession">Invalid session</OnState>
    </section>
  );
}

describe('Auth model', () => {
  it('begins in a checking session state', async () => {
    const neverResolves = async () => {
      await TestUtils.delay(10_000_000);
      await new Promise((resolve) => setTimeout(resolve, 10_000_000));
    };

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

  it('transitions to validSession if the session check succeeds', async () => {
    const app = await TestUtils.renderWithShell(<AuthDiagnostics />);

    await app.findByText('Valid session');
  });

  it('transitions to invalidSession if the session check fails', async () => {
    const sessionCheckFailure = async () => {
      throw new Error('Explosions!');
    };

    const app = await TestUtils.renderWithShell(<AuthDiagnostics />, {
      onSession: sessionCheckFailure,
    });

    await app.findByText('Invalid session');
  });
});
