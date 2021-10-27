import styled from 'styled-components';

import { tokens, base } from 'styles';

const PageSectionStyled = styled.div`
  ${base}
  &.page-section > * {
    margin-bottom: ${tokens.spacing};
    overflow: auto;
  }

  &.page-section :last-child {
    margin-bottom: 0;
  }
`;

export default PageSectionStyled;
