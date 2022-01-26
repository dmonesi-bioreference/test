import styled from 'styled-components';

import { containers, tokens, base } from 'styles';

const PageSectionStyled = styled.section`
  ${base}
  margin: 0 auto;
  max-width: ${containers.maxPageWidth}px;
  width: 100%;

  &.page-section > * {
    margin-bottom: ${tokens.spacing};
    overflow: auto;
  }

  &.page-section :last-child {
    margin-bottom: 0;
  }
`;

export default PageSectionStyled;
