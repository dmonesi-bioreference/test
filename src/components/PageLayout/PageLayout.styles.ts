import styled from 'styled-components';

import { tokens, base } from 'styles';

const PageLayoutStyled = styled.div`
  ${base}
  background-color: ${tokens.colorBackgroundDefault};

  &.page-layout--care {
    background-color: ${tokens.colorBackgroundCare};
  }

  &.page-layout--community {
    background-color: ${tokens.colorBackgroundCommunity};
  }

  &.page-layout--resources {
    background-color: ${tokens.colorBackgroundResources};
  }

  .page__content > * :not(:last-child) {
    margin-bottom: ${tokens.spacingXLarge};
  }

  .page__content {
    padding: ${tokens.spacingXxLarge} ${tokens.spacingXLarge}
      ${tokens.spacingXxxxLarge} ${tokens.spacingXLarge};
  }

  .page__content--with-cards {
    padding: ${tokens.spacingLarge} ${tokens.spacing} ${tokens.spacingXxxxLarge}
      ${tokens.spacing};
  }
`;

export default PageLayoutStyled;
