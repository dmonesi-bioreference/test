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
    padding: ${tokens.spacingLarge} ${tokens.spacingMedium}
      ${tokens.spacingXxxxLarge} ${tokens.spacingMedium};
  }
`;

export default PageLayoutStyled;
