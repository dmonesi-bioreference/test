import 'styled-components';

import { themes } from './styles';

type ThemeInterface = typeof themes.defaultTheme;

declare module 'styled-components' {
  interface DefaultTheme extends ThemeInterface {}
}
