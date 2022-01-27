import styled from 'styled-components';

import { tokens, base } from 'styles';

const PageLayoutStyled = styled.div`
  ${base};
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

  .page-layout__content > * :not(:last-child) {
    margin-bottom: ${tokens.spacingXxLarge};
  }

  .page-layout__custom-header {
    padding: ${tokens.spacing};
    padding-bottom: ${tokens.spacingLarge};
  }

  .page-layout__content {
    display: flex;
    flex-direction: column;
    align-content: center;
    padding: 0 ${tokens.spacingLarge} ${tokens.spacingXxxxLarge}
      ${tokens.spacingLarge};
  }

  .page-layout__content--with-cards {
    padding: 0 ${tokens.spacing} ${tokens.spacingXxxxLarge} ${tokens.spacing};
  }
`;

export default PageLayoutStyled;
