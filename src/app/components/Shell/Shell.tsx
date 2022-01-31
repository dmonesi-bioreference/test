import { useEffect } from 'react';
import TagManager from 'react-gtm-module';

import { config } from 'config';

import { AppProvider, AppProviderProps } from './AppProvider';
import { Theme } from './Theme';

type ShellProps = AppProviderProps;

export function Shell({ children, ...props }: Props<ShellProps>) {
  useEffect(() => {
    if (config.gtm.id) {
      TagManager.initialize({ gtmId: config.gtm.id });
    }
  }, []);

  return (
    <AppProvider {...props}>
      <Theme>{children}</Theme>
    </AppProvider>
  );
}
