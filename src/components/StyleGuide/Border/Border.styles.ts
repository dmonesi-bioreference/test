import styled from 'styled-components';

import { base, colors, tokens } from 'styles';

import { BorderProps } from './Border';

const BorderStyled = styled.div<BorderProps>`
  ${base};

  .border--shape {
    height: ${(p) => (p.shapeHeight ? p.shapeHeight : tokens.spacingXxLarge)};
    width: ${(p) => (p.shapeWidth ? p.shapeWidth : tokens.spacingXxLarge)};
    background-color: ${colors.yellow[200]};
    border: ${(p) => (p.borderWidth ? p.borderWidth : tokens.borderWidthThin)}
      solid ${colors.yellow[400]};
    border-radius: ${(p) => (p.radius ? p.radius : tokens.borderRadiusSmall)};
    margin-bottom: -${tokens.spacingSmall};
  }
`;

export default BorderStyled;
