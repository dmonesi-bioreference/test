import { useEffect } from 'react';

import { OnState, useAppState } from 'app/components/Shell';

export function Authenticated({ children }: Props<unknown>) {
  const isVisitor = useAppState('auth.requestingLogin');
  const isRegistrant = useAppState('auth.verifyingIdentity');

  useEffect(() => {
    if (isVisitor || isRegistrant) {
      window.location.assign('/api/auth/login');
    }
  }, [isVisitor, isRegistrant]);

  return <OnState matches="auth.knownCaregiver">{children}</OnState>;
}
