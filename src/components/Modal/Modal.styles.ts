import styled from 'styled-components';

import IconButtonStyled from 'components/IconButton/IconButton.styles';
import { containers, tokens, base, colors } from 'styles';

const ModalStyled = styled.div`
  ${base}
  position: relative;
  z-index: ${tokens.zIndexModal};

  .content {
    display: flex;
    flex-direction: column;
    padding: ${tokens.spacing} ${containers.spacingGutter};
    height: 100%;
    max-height: 100%;
  }

  &.fullscreen {
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: ${({ theme }) => theme?.colors?.background || colors.white};
    overflow-y: auto;
  }

  &.hidden {
    pointer-events: none;
    z-index: -1;
  }

  ${IconButtonStyled} {
    position: absolute;
    top: 0;
    right: 0;
  }
`;

export default ModalStyled;
