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
    padding: ${tokens.spacingLarge} ${tokens.spacing} ${tokens.spacingXLarge}
      ${tokens.spacing};
  }

  &.page-header--secondaryPage {
    padding: ${tokens.spacingLarge} ${tokens.spacingLarge}
      ${tokens.spacingXLarge} ${tokens.spacingLarge};
  }

  &.page-header > * :not(:last-child) {
    margin-bottom: ${tokens.spacing};
  }
`;

export default PageHeaderStyled;
