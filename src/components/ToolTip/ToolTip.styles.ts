import styled from 'styled-components';

import { base, colors, tokens } from 'styles';

const ToolTipStyled = styled.div`
  ${base}
  display: flex;
  margin-left: ${tokens.spacingXxSmall};

  .tooltip__content {
    background-color: transparent;
  }

  .tippy-content {
    padding-top: 0;
    padding-bottom: 0;
  }

  .tooltip__icon {
    color: ${colors.indigo[700]};
    border-radius: ${tokens.borderRadiusCircle};
    width: 18px;
    height: 18px;
    border: ${tokens.borderWidthMedium} solid ${colors.indigo[700]};
    margin-left: ${tokens.spacingXxSmall};
    line-height: 16px;
    text-align: center;
  }

  [class*='arrow'] {
    svg {
      fill: ${colors.indigo[800]};
    }
  }
`;

export default ToolTipStyled;
