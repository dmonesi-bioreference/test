import { createGlobalStyle } from 'styled-components';
import focus from './global/focus';
import utility from './global/utility';

const GlobalStyle = createGlobalStyle`
  ${focus}
  ${utility}
`;

export default GlobalStyle;
