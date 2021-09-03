import styled from 'styled-components';

import { tokens, base } from 'styles';

const PageLayoutStyled = styled.div`
  ${base}
  background-color: ${tokens.colorBackground};

  .page__content > * {
    margin-bottom: ${tokens.spacingXxLarge};
  }

  .page__content :last-child {
    margin-bottom: 0;
  }

  .page__content {
    padding: ${tokens.spacingLarge} ${tokens.spacing} ${tokens.spacingXxxxLarge}
      ${tokens.spacing};
  }
`;

export default PageLayoutStyled;
