import styled from 'styled-components';

import { base } from 'styles';

const ToolTipStyled = styled.div`
  ${base}
  .tooltip__helper {
    display: flex;
    align-items: center;
  }

  .tooltip__content {
    z-index: 1;
    position: absolute;
  }

  .tip {
    width: 32px;
    margin-bottom: -12px;
    margin-left: 262px;
  }
`;

export default ToolTipStyled;
