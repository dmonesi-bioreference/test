import { css } from 'styled-components';
import t from '../01_settings/tokens';

const form = css`
  .o-input--has-errors {
    color: ${t.colorError};

    label,
    legend {
      color: inherit;
    }
  }

  .o-input--hidden-label,
  .o-input--hidden-legend {
    margin-bottom: 0;

    span {
      left: -10000px;
      position: absolute;
    }
  }
`;

export default form;
