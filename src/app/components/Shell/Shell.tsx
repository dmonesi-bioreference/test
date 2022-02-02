import { useEffect } from 'react';
import TagManager from 'react-gtm-module';

import { client_config } from 'client_config';

import { AppProvider, AppProviderProps } from './AppProvider';
import { Theme } from './Theme';

type ShellProps = AppProviderProps;

export function Shell({ children, ...props }: Props<ShellProps>) {
  useEffect(() => {
    if (client_config.gtm.id) {
      TagManager.initialize({ gtmId: client_config.gtm.id });
    }
  }, []);

  return (
    <AppProvider {...props}>
      <Theme>{children}</Theme>
    </AppProvider>
  );
}
