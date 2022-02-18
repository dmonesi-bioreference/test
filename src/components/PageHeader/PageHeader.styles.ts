import styled from 'styled-components';

import { tokens, base, containers } from 'styles';

const PageHeaderStyled = styled.div`
  ${base};
  padding: 0 ${containers.spacingGutter};

  .page-header__title {
    display: grid;
    gap: ${tokens.spacingXSmall};

    .label {
      color: ${({ theme }) =>
        theme.colors.labelText || tokens.colorPrimaryText};
    }

    h1 {
      color: ${({ theme }) =>
        theme.colors.headerText || tokens.colorPrimaryText};
    }
  }
`;

export default PageHeaderStyled;
