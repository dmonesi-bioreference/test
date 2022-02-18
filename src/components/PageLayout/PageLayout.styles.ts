import styled from 'styled-components';

import { base, containers, tokens } from 'styles';

const PageLayoutStyled = styled.div`
  ${base};
  position: relative;
  overflow: hidden;

  .page-layout__background-wrapper {
    display: flex;
    justify-content: flex-end;
    position: absolute;
    top: ${tokens.spacingSmall};
    left: 0;
    height: 100%;
    width: 100%;
    z-index: -1;
    background-color: ${({ theme }) => theme.colors.background};

    .ellipse {
      position: absolute;
      width: calc(${tokens.spacingXxLarge} * 10);
      height: calc(${tokens.spacingXxLarge} * 10);
      border-radius: ${tokens.borderRadiusCircle};
      background-color: ${({ theme }) => theme.colors.foreground};
    }
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
