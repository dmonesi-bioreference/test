import { createGlobalStyle } from 'styled-components';
import elements from './elements';
import generic from './generic';
import objects from './objects';

const GlobalStyle = createGlobalStyle`
  ${generic}
  ${elements}
  ${objects}
`;

export default GlobalStyle;
