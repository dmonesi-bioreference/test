import { css } from 'styled-components';

const focus = css`
  .mouse-intent {
    *:focus {
      outline: none;
    }

    [type='checkbox'],
    [type='radio'] {
      &:focus::before {
        box-shadow: none;
        border-color: inherit;
      }
    }
  }
`;

export default focus;
