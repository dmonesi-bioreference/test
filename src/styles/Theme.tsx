import { ThemeProvider } from 'styled-components';

import { getTheme } from 'styles';

import { ApplyThemeRootVariables } from './ApplyThemeVariables';

interface ThemeProps {
  theme?: Themes;
}

export function Theme(props: Props<ThemeProps>) {
  const theme = getTheme(props.theme || 'defaultTheme');

  return (
    <ThemeProvider theme={theme}>
      <ApplyThemeRootVariables />
      {props.children}
    </ThemeProvider>
  );
}
