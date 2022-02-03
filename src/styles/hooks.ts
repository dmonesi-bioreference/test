import { useTheme } from 'styled-components';

import { defaultTheme } from './themes';

export function useStyleTheme() {
  const theme = useTheme();

  if (theme && theme.colors) {
    return theme;
  }

  return defaultTheme;
}
