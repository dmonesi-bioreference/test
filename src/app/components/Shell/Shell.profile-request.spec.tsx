import userEvents from '@testing-library/user-event';

import * as TestUtils from 'test-utils';

import { OnState } from './OnState';
import { useAppEvents, useAppSelector } from './hooks';

function RequestDiagnostics(props: Props<unknown>) {
  const states = useAppSelector((state) =>
    JSON.stringify(state.toStrings().join(' '))
  );

  const profile = useAppSelector(
    (state) => state.context.requests.caregiverProfile.values
  );

  const errors = useAppSelector((state) =>
    Array.isArray(state.context.requests.caregiverProfile.errors)
      ? state.context.requests.caregiverProfile.errors.join(', ')
      : ''
  );

  const events = useAppEvents();

  return (
    <section>
      <section>
        <header>Current state</header>
        <pre>{states}</pre>
        <div>Verification: {JSON.stringify(profile)}</div>
        <div>Errors: {errors}</div>
        <div>
          <OnState matches="requests.caregiverProfile.idle">Idle</OnState>
          <OnState matches="requests.caregiverProfile.requesting">
            Requesting
          </OnState>
          <OnState matches="requests.caregiverProfile.success">Success</OnState>
          <OnState matches="requests.caregiverProfile.failure">Failure</OnState>
        </div>
      </section>
      <section>
        <header>Controls</header>
        <button onClick={events.caregiverProfileRequest}>Request</button>
      </section>
      {props.children}
    </section>
  );
}

describe('Verification requests', () => {
  it('requests patient guids with the patient guid request', async () => {
    const listener = jest.fn();

    const requests = { caregiverProfile: listener };

    const app = await TestUtils.renderWithShell(<RequestDiagnostics />, {
      requests,
    });

    userEvents.click(await app.findByText('Request'));

    expect(listener).toHaveBeenCalled();
  });

  it('saves guid responses', async () => {
    const requests = {
      caregiverProfile: async () => TestUtils.Mocks.profile.single,
    };

    const app = await TestUtils.renderWithShell(<RequestDiagnostics />, {
      requests,
    });

    userEvents.click(await app.findByText('Request'));

    await app.findByText(
      `Verification: ${JSON.stringify(TestUtils.Mocks.profile.single)}`
    );
  });

  it('saves error responses', async () => {
    const requests = {
      caregiverProfile: async () => Promise.reject(['oh', 'no']),
    };

    const app = await TestUtils.renderWithShell(<RequestDiagnostics />, {
      requests,
    });

    userEvents.click(await app.findByText('Request'));

    await app.findByText(`Errors: oh, no`);
  });

  it('clears errors on retry', async () => {
    const requests = {
      caregiverProfile: jest.fn().mockRejectedValueOnce(['oh', 'no']),
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
