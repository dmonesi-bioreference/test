import { ThemeProvider } from 'styled-components';

import { getTheme } from 'styles';

import { ApplyThemeRootVariables } from './ApplyThemeVariables';
import { useAppSelector } from './hooks';

export function Theme(props: Props<unknown>) {
  const theme = useAppSelector(() => getTheme('defaultTheme'));

  return (
    <ThemeProvider theme={theme}>
      <ApplyThemeRootVariables />
      {props.children}
    </ThemeProvider>
  );
}
