import styled from 'styled-components';

import { tokens, base, containers } from 'styles';

const PageHeaderStyled = styled.div`
  ${base};
  padding: 0 ${containers.spacingGutter};

  &.page-header--secondaryPage {
    padding: ${tokens.spacingSmall} ${tokens.spacingLarge};
  }

  .description {
    margin-top: ${tokens.spacingSmall};
  }
`;

export default PageHeaderStyled;
