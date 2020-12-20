import { createGlobalStyle } from 'styled-components';
import focus from './global/focus';
import label from './global/label';
import utility from './global/utility';

const GlobalStyle = createGlobalStyle`
  ${focus}
  ${label}
  ${utility}
`;

export default GlobalStyle;
