import styled from 'styled-components';

import { base, tokens } from 'styles';

const AppLayoutStyled = styled.div`
  ${base};
  position: relative;
  overflow: hidden;

  .app-layout__background-wrapper {
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
      left: calc(${tokens.spacing} * -7);
      width: calc(${tokens.spacingXxLarge} * 10);
      height: calc(${tokens.spacingXxLarge} * 10);
      border-radius: ${tokens.borderRadiusCircle};
      background-color: ${({ theme }) => theme.colors.foreground};
    }
  }

  .label {
    color: ${({ theme }) => theme.colors.labelText || tokens.colorPrimaryText};
  }

  .level1 {
    color: ${({ theme }) => theme.colors.headerText || tokens.colorPrimaryText};
  }
`;

export default AppLayoutStyled;
