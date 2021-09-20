import styled from 'styled-components';

import { base, tokens } from 'styles';

const ToolTipStyled = styled.div`
  ${base}
  .tooltip__helper {
    display: flex;
  }

  .tooltip__content {
    position: absolute;
    z-index: 1;
    margin-top: 6px;
  }

  .tooltip__helper-message {
    margin-top: ${tokens.spacingXxSmall};
  }

  .tooltip__tip {
    margin-top: ${tokens.spacingLarge};
    position: absolute;
    width: 23px;
    z-index: 1;
  }

  .tooltip__icon {
    align-items: center;
    display: flex;
    flex-direction: column;
    margin-left: ${tokens.spacingXxSmall};
  }
`;

export default ToolTipStyled;
