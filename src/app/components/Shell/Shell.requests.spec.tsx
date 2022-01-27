import userEvents from '@testing-library/user-event';

import * as Models from 'app/state/requests/models';
import * as TestUtils from 'test-utils';

import { OnState } from './OnState';
import { useAppEvents, useAppSelector } from './hooks';

interface RequestDiagnosticsProps {
  type: RequestModelKey;
}

function RequestDiagnostics({
  children,
  type: requestType,
}: Props<RequestDiagnosticsProps>) {
  const states = useAppSelector((state) =>
    JSON.stringify(state.toStrings().join(' '))
  );

  const verification = useAppSelector(
    (state) => state.context.requests[requestType].values
  );

  const errors = useAppSelector((state) => {
    const errors = state.context.requests[requestType].errors;

    return Array.isArray(errors) ? errors.join(', ') : errors;
  });

  const events = useAppEvents();

  return (
    <section>
      <section>
        <header>Current state</header>
        <pre>{states}</pre>
        <div>Verification: {JSON.stringify(verification)}</div>
        <div>Errors: {errors}</div>
        <div>
          <OnState matches={`requests.${requestType}.idle`}>Idle</OnState>
          <OnState matches={`requests.${requestType}.requesting`}>
            Requesting
          </OnState>
          <OnState matches={`requests.${requestType}.success`}>Success</OnState>
          <OnState matches={`requests.${requestType}.failure`}>Failure</OnState>
        </div>
      </section>
      <section>
        <header>Controls</header>
        <button onClick={events[`${requestType}Request`]}>Request</button>
      </section>
      {children}
    </section>
  );
}

describe('Shell request handlers', () => {
  const assert = it.each(
    Models.all.map((model) => [model.key, model] as const)
  );

  assert('makes requests with the %s handler', async (key) => {
    const listener = jest.fn();
    const requests = { [key]: listener };

    const app = await TestUtils.renderWithShell(
      <RequestDiagnostics type={key} />,
      { requests }
    );

    userEvents.click(await app.findByText('Request'));

    expect(listener).toHaveBeenCalled();
  });

  assert('saves %s responses', async (key, model) => {
    const example = { ...model.init, anExtraneousKeyForTestingPurposes: true };
    const requests = { [key]: async () => example };

    const app = await TestUtils.renderWithShell(
      <RequestDiagnostics type={key} />,
      { requests }
    );

    userEvents.click(await app.findByText('Request'));

    await app.findByText(`Verification: ${JSON.stringify(example)}`);
  });

  assert('saves %s error responses', async (key) => {
    const requests = { [key]: async () => Promise.reject(['oh', 'no']) };

    const app = await TestUtils.renderWithShell(
      <RequestDiagnostics type={key} />,
      { requests }
    );

    userEvents.click(await app.findByText('Request'));

    await app.findByText(`Errors: oh, no`);
  });

  assert('clears %s errors on retry', async (key) => {
    const requests = { [key]: jest.fn().mockRejectedValueOnce(['oh', 'no']) };

    const app = await TestUtils.renderWithShell(
      <RequestDiagnostics type={key} />,
      { requests }
    );

    userEvents.click(await app.findByText('Request'));

    await app.findByText(`Errors: oh, no`);

    userEvents.click(await app.findByText('Request'));

    expect(app.queryByText(`Errors: oh, no`)).not.toBeInTheDocument();
  });
});
