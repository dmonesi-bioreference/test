import { AppProvider } from './AppProvider';
import { Theme } from './Theme';

export function Shell(props: Props<unknown>) {
  return (
    <AppProvider>
      <Theme>{props.children}</Theme>
    </AppProvider>
  );
}
