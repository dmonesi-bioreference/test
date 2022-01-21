import userEvents from '@testing-library/user-event';

import * as TestUtils from 'test-utils';

import { OnState } from './OnState';
import { useAppEvents, useAppSelector } from './hooks';

function RequestDiagnostics(props: Props<unknown>) {
  const states = useAppSelector((state) =>
    JSON.stringify(state.toStrings().join(' '))
  );

  const verification = useAppSelector(
    (state) => state.context.requests.verifyPatientInfo.values
  );

  const errors = useAppSelector((state) =>
    Array.isArray(state.context.requests.verifyPatientInfo.errors)
      ? state.context.requests.verifyPatientInfo.errors.join(', ')
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
          <OnState matches="requests.verifyPatientInfo.idle">Idle</OnState>
          <OnState matches="requests.verifyPatientInfo.requesting">
            Requesting
          </OnState>
          <OnState matches="requests.verifyPatientInfo.success">
            Success
          </OnState>
          <OnState matches="requests.verifyPatientInfo.failure">
            Failure
          </OnState>
        </div>
      </section>
      <section>
        <header>Controls</header>
        <button onClick={events.verifyPatientInfoRequest}>Request</button>
      </section>
      {props.children}
    </section>
  );
}

describe('Verification requests', () => {
  it('requests patient guids with the patient guid request', async () => {
    const listener = jest.fn();

    const requests = { verifyPatientInfo: listener };

    const app = await TestUtils.renderWithShell(<RequestDiagnostics />, {
      requests,
    });

    userEvents.click(await app.findByText('Request'));

    expect(listener).toHaveBeenCalled();
  });

  it('saves guid responses', async () => {
    const requests = { verifyPatientInfo: async () => ({ verified: true }) };

    const app = await TestUtils.renderWithShell(<RequestDiagnostics />, {
      requests,
    });

    userEvents.click(await app.findByText('Request'));

    await app.findByText(`Verification: ${JSON.stringify({ verified: true })}`);
  });

  it('saves error responses', async () => {
    const requests = {
      verifyPatientInfo: async () => Promise.reject(['oh', 'no']),
    };

    const app = await TestUtils.renderWithShell(<RequestDiagnostics />, {
      requests,
    });

    userEvents.click(await app.findByText('Request'));

    await app.findByText(`Errors: oh, no`);
  });

  it('clears errors on retry', async () => {
    const requests = {
      verifyPatientInfo: jest.fn().mockRejectedValueOnce(['oh', 'no']),
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
