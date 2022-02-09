import styled from 'styled-components';

import { tokens, containers, base } from 'styles';

const PageLayoutStyled = styled.div`
  ${base};
  background-color: ${({ theme }) => theme.colors.background};

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
    padding: 0 ${containers.spacingGutter} ${tokens.spacingXxxxLarge};
  }

  .page-layout__content--with-cards {
    padding: 0 ${tokens.spacing} ${tokens.spacingXxxxLarge};
  }
`;

export default PageLayoutStyled;
