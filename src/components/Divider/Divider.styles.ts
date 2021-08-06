import styled from 'styled-components';

import { base, colors, tokens } from 'styles';

const DividerStyled = styled.div`
  ${base}

  &.line {
    height: ${tokens.borderWidthThin};
    width: 100%;
    background-color: ${colors.grey[400]};
    border-radius: ${tokens.borderRadiusPill};
  }
`;

export default DividerStyled;
