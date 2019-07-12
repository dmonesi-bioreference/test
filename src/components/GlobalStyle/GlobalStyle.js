import { createGlobalStyle } from 'styled-components';
import elements from './elements';
import generic from './generic';
import objects from './objects';

const GlobalStyle = createGlobalStyle`
  ${generic}
  ${elements}
  ${objects}
`;

export const StorybookGlobalStyle = createGlobalStyle`
  ${generic}
  ${elements}
  ${objects}

  body {
    background-color: transparent;
    min-width: 0;
  }
`;

export default GlobalStyle;
