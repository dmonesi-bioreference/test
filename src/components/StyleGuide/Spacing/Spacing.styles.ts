import styled from 'styled-components';

import { base, colors, tokens } from 'styles';

import { SpacingProps } from './Spacing';

const SpacingStyled = styled.div<SpacingProps>`
  ${base};

  .spacing--square {
    height: ${(p) => p.size};
    width: ${(p) => p.size};
    background-color: ${colors.yellow[200]};
    border: ${tokens.borderWidthThin} solid ${colors.yellow[400]};
    margin-bottom: -${tokens.spacingSmall};
  }
`;

export default SpacingStyled;
