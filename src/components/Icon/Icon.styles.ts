import styled from 'styled-components';

import { base, colors, tokens } from 'styles';

const IconStyled = styled.div`
  ${base}
  fill: currentColor;
  display: grid;

  &.default {
    color: ${colors.grey[700]};
  }

  &.primary {
    color: ${tokens.colorPrimary};
  }

  &.danger {
    color: ${tokens.colorDanger};
  }

  &.white {
    color: ${colors.white};
  }

  &.small {
    width: ${tokens.spacingLarge};
  }

  &.large {
    width: ${tokens.spacingXLarge};
  }
`;

export default IconStyled;
