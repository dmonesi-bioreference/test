import styled from 'styled-components';

import { containers, base, tokens } from 'styles';
import media from 'styles/media-queries';

const ContainerStyled = styled.div`
  ${base};
  max-width: ${containers.maxPageWidth}px;
  width: 100%;

  &.narrow {
    max-width: ${containers.maxNarrowPageWidth}px;
  }

  &.centered {
    margin: 0 auto;
  }

  ${media.smallOnly} {
    &.horizontal-padding--none {
      padding-left: 0;
      padding-right: 0;
    }

    &.horizontal-padding--base {
      padding-left: ${tokens.spacing};
      padding-right: ${tokens.spacing};
    }

    &.horizontal-padding--large {
      padding-left: ${tokens.spacingLarge};
      padding-right: ${tokens.spacingLarge};
    }
  }
`;

export default ContainerStyled;
