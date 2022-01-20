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

  [class*='arrow'] {
    svg {
      fill: ${colors.indigo[800]};
    }
  }
`;

export default ToolTipStyled;
