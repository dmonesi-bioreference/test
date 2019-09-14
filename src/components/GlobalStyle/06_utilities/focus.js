import { css } from 'styled-components'

const focus = css`
  .mouse-intent {
    *:focus {
      outline: none;
    }

    [type='checkbox'],
    [type='radio'] {
      &:focus::before {
        outline: none;
      }
    }

    .o-input-focus {
      display: none;
    }
  }
`

export default focus
