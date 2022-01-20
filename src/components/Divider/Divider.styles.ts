import styled from 'styled-components';

import { base, colors, tokens } from 'styles';

const DividerStyled = styled.div`
  ${base}

  &.line {
    border-radius: ${tokens.borderRadiusPill};
    width: 100%;
  }

  &.line--thick {
    height: ${tokens.borderWidthThick};
  }

  &.line--thin {
    height: ${tokens.borderWidthThin};
  }

  &.line--lime {
    background-color: ${colors.lime[200]};
  }

  &.line--neutral {
    background-color: ${colors.grey[400]};
  }
`;

export default DividerStyled;
