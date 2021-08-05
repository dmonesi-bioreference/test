import styled from 'styled-components';

import { base, colors, tokens } from 'styles';

const IconStyled = styled.div`
  ${base}
  fill: currentColor;

  &.default {
    color: ${colors.grey[700]};
  }

  &.primary {
    color: ${tokens.colorPrimary};
  }

  &.danger {
    color: ${tokens.colorDanger};
  }
`;

export default IconStyled;
