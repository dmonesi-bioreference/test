import { AppProvider, AppProviderProps } from './AppProvider';
import { Theme } from './Theme';

type ShellProps = AppProviderProps;

export function Shell(props: Props<ShellProps>) {
  return (
    <AppProvider
      onAuthenticate={props.onAuthenticate}
      onIdentity={props.onIdentity}
    >
      <Theme>{props.children}</Theme>
    </AppProvider>
  );
}
