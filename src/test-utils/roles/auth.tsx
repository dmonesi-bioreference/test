import { Shell } from 'app/components/Shell';
import { renderWithShell } from 'test-utils/render-with-shell';
import { Mocks } from 'test-utils/server/mocks';

/**
 * renderKnownCaregiver creates a wrapper that prefills some shell callbacks in order to
 * give you an easier time creating a caregiver who should be greeted with the landing page.
 * This approach supplies a premade `onSession`.
 *
 * @param {React.ReactNode} ui Any renderable will be attempted, but it expects a React node
 * @param {object} props Any props meant to pass to the shell
 * @returns A typical testing library wrapper
 */
const renderKnownCaregiver: typeof renderWithShell = async (
  ui,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  { children, ...props } = {}
) => {
  const component = await renderWithShell(
    <Shell
      {...props}
      onPatientGuid={async () => Promise.reject('no guid available')}
      onSession={async () => Mocks.session.single}
    >
      {ui}
    </Shell>
  );

  return component;
};

/**
 * renderVisitor creates a wrapper that prefills some shell callbacks in order to
 * give you an easier time creating a visitor who should be greeted with a login page.
 * This approach supplies a premade `onPatientGuid` and `onSession`.
 *
 * @param {React.ReactNode} ui Any renderable will be attempted, but it expects a React node
 * @param {object} props Any props meant to pass to the shell
 * @returns A typical testing library wrapper, with a `config` property containing all preset
 *          values.
 */
const renderVisitor: typeof renderWithShell = async (
  ui,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  { children, ...props } = {}
) => {
  const component = await renderWithShell(
    <Shell
      {...props}
      onPatientGuid={async () => Promise.reject('no guid available')}
      onSession={async () => Promise.reject('no session found')}
    >
      {ui}
    </Shell>
  );

  return component;
};

/**
 * renderSmsRegistration creates a wrapper that prefills some shell callbacks in order to
 * give you an easier time creating a visitor who has just begun registration. This approach
 * supplies a premade `onPatientGuid` & `onSession`.
 *
 * @param {React.ReactNode} ui Any renderable will be attempted, but it expects a React node
 * @param {object} props Any props meant to pass to the shell
 * @returns A typical testing library wrapper, with a `config` property containing all preset
 *          values.
 */
const renderSmsRegistration: typeof renderWithShell = async (
  ui,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  { children, ...props } = {}
) => {
  const config = { guid: '1111-2222-3333-4444', source: 'SMS' };
  const component = await renderWithShell(
    <Shell
      {...props}
      onPatientGuid={async () => config}
      onSession={async () => Promise.reject('no session found')}
    >
      {ui}
    </Shell>
  );

  return { ...component, config };
};

/**
 * renderEmailRegistration creates a wrapper that prefills some shell callbacks in order to
 * give you an easier time creating a visitor who has just begun registration. This approach
 * supplies a premade `onPatientGuid` and `onSession`.
 *
 * @param {React.ReactNode} ui Any renderable will be attempted, but it expects a React node
 * @param {object} props Any props meant to pass to the shell
 * @returns A typical testing library wrapper, with a `config` property containing all preset
 *          values.
 */
const renderEmailRegistration: typeof renderWithShell = async (
  ui,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  { children, ...props } = {}
) => {
  const config = { guid: '1111-2222-3333-4444', source: 'Email' };
  const component = await renderWithShell(
    <Shell
      {...props}
      onPatientGuid={async () => config}
      onSession={async () => Promise.reject('no session found')}
    >
      {ui}
    </Shell>
  );

  return { ...component, config };
};

export const auth = {
  caregiver: renderKnownCaregiver,
  visitor: renderVisitor,
  smsRegistration: renderSmsRegistration,
  emailRegistration: renderEmailRegistration,
};
