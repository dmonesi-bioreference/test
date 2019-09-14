import { css } from 'styled-components'

const positioning = css`
  .o-centered {
    display: flex;
    justify-content: center;
  }

  .o-side-by-side {
    align-items: center;
    display: flex;
  }

  .o-side-by-side-apart {
    align-items: center;
    display: flex;
    justify-content: space-between;
  }
`

export default positioning
