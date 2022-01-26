import styled from 'styled-components';

import { tokens, base, containers } from 'styles';

const PageHeaderStyled = styled.div`
  ${base};
  display: flex;
  flex-direction: column;
  border-top: ${tokens.borderWidthExtraThick} solid ${tokens.colorPrimary};

  .page-header__content {
    padding: ${tokens.spacingLarge} ${tokens.spacing};
    max-width: ${containers.maxPageWidth}px;
    margin: 0 auto;
    width: 100%;
  }

  .page-header__content > * :not(:last-child) {
    margin-bottom: ${tokens.spacing};
  }
`;

export default PageHeaderStyled;
