import { AppProvider, AppProviderProps } from './AppProvider';
import { Theme } from './Theme';

type ShellProps = AppProviderProps;

export function Shell({ children, ...props }: Props<ShellProps>) {
  return (
    <AppProvider {...props}>
      <Theme>{children}</Theme>
    </AppProvider>
  );
}
