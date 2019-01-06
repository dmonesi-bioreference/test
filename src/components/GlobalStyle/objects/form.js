import { css } from 'styled-components';
import tokens from '../settings/tokens';

const form = css`
  .o-input--has-errors {
    color: ${tokens.colorError};

    label,
    legend {
      color: inherit;
    }
  }

  .o-input--hidden-label {
    margin-bottom: 0;

    span {
      left: -10000px;
      position: absolute;
    }
  }
`;

export default form;
