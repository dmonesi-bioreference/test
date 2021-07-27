import { createGlobalStyle } from 'styled-components';

import focus from './focus';
import utility from './utility';

const GlobalStyle = createGlobalStyle`
  ${focus}
  ${utility}
`;

export default GlobalStyle;
