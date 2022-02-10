import styled from 'styled-components';

import { tokens, base, containers } from 'styles';

const PageHeaderStyled = styled.div`
  ${base};
  padding: 0 ${containers.spacingGutter};

  .content {
    display: flex;
    flex-direction: column;
    padding: ${tokens.spacingLarge} 0;
    max-width: ${containers.maxPageWidth}px;
    margin: 0 auto;
    width: 100%;
  }

  &.page-header--secondaryPage {
    padding: ${tokens.spacingLarge} ${tokens.spacingLarge}
      ${tokens.spacingXLarge};
  }

  &.page-header > * :not(:last-child) {
    margin-bottom: ${tokens.spacing};
  }

  .description {
    margin-top: ${tokens.spacingSmall};
  }
`;

export default PageHeaderStyled;
