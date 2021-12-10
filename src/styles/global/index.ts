import { createGlobalStyle } from 'styled-components';

import focus from './focus';
import './fonts';
import reset from './reset';
import utility from './utility';

const GlobalStyle = createGlobalStyle`
  ${reset}
  ${focus}
  ${utility}
`;

export default GlobalStyle;
