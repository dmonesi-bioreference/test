import type { AppProps } from 'next/app';

import { Shell } from 'app/components/Shell';
import 'inspect';

const explosions = async () => {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return Promise.reject('Explosions!');
};

const log = (...args: any[]) => {
  if (process.env.NODE_ENV === 'development') {
    // eslint-disable-next-line no-console
    console.log(...args);
  }
};

async function getAuth0SessionForNonDemoPages() {
  log('Checking session');

  if (
    typeof window !== 'undefined' &&
    window.location.pathname.startsWith('/demo')
  ) {
    return Promise.reject('No sessions in demo routes.');
  }

  const result = await fetch('/api/auth/me');

  if (!result.ok) {
    if (typeof window !== 'undefined') {
      window.location.href = '/api/auth/login';
      await new Promise((resolve) => setTimeout(resolve, 10_000_000));
    } else {
      throw new Error(result.status.toString());
    }
  }

  // eslint-disable-next-line @typescript-eslint/no-unsafe-return
  return (await result.json()) as AuthenticatedSession;
}

function WebApp({ Component, pageProps }: AppProps) {
  return (
    <Shell
      onSession={getAuth0SessionForNonDemoPages}
      onAuthenticate={async () => {
        log('Authenticating');
      }}
      onIdentity={async () => {
        log('Checking identity');
        await explosions();
      }}
      onAppointmentStatus={async () => {
        // API call goes here
        return { appointmentStatus: 'after appointment' };
      }}
    >
      <Component {...pageProps} />
    </Shell>
  );
}
export default WebApp;
