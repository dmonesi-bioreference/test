import styled from 'styled-components';

import { tokens, base, containers } from 'styles';

const PageHeaderStyled = styled.div`
  ${base};

  .content {
    display: flex;
    flex-direction: column;
    padding: ${tokens.spacingLarge} ${tokens.spacing};
    max-width: ${containers.maxPageWidth}px;
    margin: 0 auto;
    width: 100%;
  }

  &.page-header--primaryPage {
    border-top: ${tokens.borderWidthExtraThick} solid;
    border-color: ${({ theme }) => theme.colors.borderHighlight};
    padding: ${tokens.spacingLarge} 0 ${tokens.spacing};
  }

  &.page-header--secondaryPage {
    padding: ${tokens.spacingLarge} ${tokens.spacingLarge}
      ${tokens.spacingXLarge} ${tokens.spacingLarge};
  }

  &.page-header > * :not(:last-child) {
    margin-bottom: ${tokens.spacing};
  }

  .description {
    margin-top: ${tokens.spacingSmall};
  }
`;

export default PageHeaderStyled;
