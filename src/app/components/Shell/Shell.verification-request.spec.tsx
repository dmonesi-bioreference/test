import userEvents from '@testing-library/user-event';

import * as TestUtils from 'test-utils';

import { OnState } from './OnState';
import { useAppEvents, useAppSelector } from './hooks';

function RequestDiagnostics(props: Props<unknown>) {
  const states = useAppSelector((state) =>
    JSON.stringify(state.toStrings().join(' '))
  );

  const verification = useAppSelector(
    (state) => state.context.requests.verifyPatientGuid.values
  );

  const errors = useAppSelector((state) =>
    Array.isArray(state.context.requests.verifyPatientGuid.errors)
      ? state.context.requests.verifyPatientGuid.errors.join(', ')
      : ''
  );

  const events = useAppEvents();

  return (
    <section>
      <section>
        <header>Current state</header>
        <pre>{states}</pre>
        <div>Verification: {JSON.stringify(verification)}</div>
        <div>Errors: {errors}</div>
        <div>
          <OnState matches="requests.verifyPatientGuid.idle">Idle</OnState>
          <OnState matches="requests.verifyPatientGuid.requesting">
            Requesting
          </OnState>
          <OnState matches="requests.verifyPatientGuid.success">
            Success
          </OnState>
          <OnState matches="requests.verifyPatientGuid.failure">
            Failure
          </OnState>
        </div>
      </section>
      <section>
        <header>Controls</header>
        <button onClick={events.verifyPatientGuidRequest}>Request</button>
      </section>
      {props.children}
    </section>
  );
}

describe('Verification requests', () => {
  it('requests patient guids with the patient guid request', async () => {
    const listener = jest.fn();

    const requests = { verifyPatientGuid: listener };

    const app = await TestUtils.renderWithShell(<RequestDiagnostics />, {
      requests,
    });

    userEvents.click(await app.findByText('Request'));

    expect(listener).toHaveBeenCalled();
  });

  it('saves guid responses', async () => {
    const requests = { verifyPatientGuid: async () => ({ verified: true }) };

    const app = await TestUtils.renderWithShell(<RequestDiagnostics />, {
      requests,
    });

    userEvents.click(await app.findByText('Request'));

    await app.findByText(`Verification: ${JSON.stringify({ verified: true })}`);
  });

  it('saves error responses', async () => {
    const requests = {
      verifyPatientGuid: async () => Promise.reject(['oh', 'no']),
    };

    const app = await TestUtils.renderWithShell(<RequestDiagnostics />, {
      requests,
    });

    userEvents.click(await app.findByText('Request'));

    await app.findByText(`Errors: oh, no`);
  });

  it('clears errors on retry', async () => {
    const requests = {
      verifyPatientGuid: jest.fn().mockRejectedValueOnce(['oh', 'no']),
    };

    const app = await TestUtils.renderWithShell(<RequestDiagnostics />, {
      requests,
    });

    userEvents.click(await app.findByText('Request'));

    await app.findByText(`Errors: oh, no`);

    userEvents.click(await app.findByText('Request'));

    expect(app.queryByText(`Errors: oh, no`)).not.toBeInTheDocument();
  });
});
