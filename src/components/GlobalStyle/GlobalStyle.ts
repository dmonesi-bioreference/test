import { createGlobalStyle } from 'styled-components';
import tools from './02_tools';
import generic from './03_generic';
import elements from './04_elements';
import objects from './05_objects';
import utilities from './06_utilities';

const GlobalStyle = createGlobalStyle`
  ${tools}
  ${generic}
  ${elements}
  ${objects}
  ${utilities}
`;

export const StorybookGlobalStyle = createGlobalStyle`
  ${tools}
  ${generic}
  ${elements}
  ${objects}
  ${utilities}

  body {
    background-color: transparent;
    min-width: 0;
  }
`;

export default GlobalStyle;
