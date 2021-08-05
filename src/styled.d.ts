import 'styled-components';

import { themes } from './styles';

type ThemeInterface = typeof themes.light;

declare module 'styled-components' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface DefaultTheme extends ThemeInterface {}
}
