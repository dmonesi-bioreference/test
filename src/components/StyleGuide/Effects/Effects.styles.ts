import styled from 'styled-components';

import { base, tokens } from 'styles';

import { EffectsProps } from './Effects';

const EffectsStyled = styled.div<EffectsProps>`
  ${base};

  .effect--square {
    height: ${tokens.spacingXxxxLarge};
    width: ${tokens.spacingXxxxLarge};
    box-shadow: ${(p) => p.shadow};
    margin-bottom: -${tokens.spacingSmall};
  }
`;

export default EffectsStyled;
