import styled from 'styled-components';

import { tokens, base, containers } from 'styles';

const PageHeaderStyled = styled.div`
  ${base};
  padding: 0 ${containers.spacingGutter};

  .page-header__title {
    display: grid;
    gap: ${tokens.spacingXSmall};
  }

  .label {
    color: ${tokens.colorPrimaryText};
  }

  h1 {
    color: ${tokens.colorPrimaryText};
  }
`;

export default PageHeaderStyled;
