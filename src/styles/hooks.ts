import { DefaultTheme, useTheme } from 'styled-components';

import { defaultTheme } from './themes';

export function useStyleTheme(): DefaultTheme {
  const theme = useTheme();

  if (theme && theme.colors) {
    return theme;
  }

  return defaultTheme;
}
