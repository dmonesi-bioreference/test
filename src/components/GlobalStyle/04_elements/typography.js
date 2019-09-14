import { css } from 'styled-components'
import t, { fontPairs } from '../01_settings/tokens'

const typography = css`
  html {
    ${fontPairs.bodyBook}
    line-height: ${t.lineHeightText};
  }

  h1 {
    color: ${t.colorSecondary};
    font-size: ${t.fontSize48};
    font-weight: ${t.fontWeightSemibold};
    line-height: ${t.lineHeightHeading};
  }

  h2 {
    color: ${t.colorSecondary};
    font-size: ${t.fontSize32};
    font-weight: ${t.fontWeightSemibold};
    line-height: ${t.lineHeightHeading};
  }

  h3 {
    color: ${t.colorSecondary};
    font-size: ${t.fontSize24};
    font-weight: ${t.fontWeightSemibold};
    line-height: ${t.lineHeightHeading};
  }

  h4 {
    color: ${t.colorSecondary};
    font-size: ${t.fontSize18};
    font-weight: ${t.fontWeightSemibold};
    line-height: ${t.lineHeightHeading};
    margin: 0;
  }

  p {
    color: ${t.colorSecondary};
    font-size: ${t.fontSize16};
  }

  h4 + p {
    margin-top: ${t.spacingXSmall};
  }

  h4 + p + h4 {
    margin-top: ${t.spacingLarge};
  }

  small {
    color: ${t.colorBlackSecondary};
    font-size: ${t.fontSize14};
  }

  blockquote {
    margin-left: 2.15rem;

    p,
    li {
      font-size: ${t.fontSize14};
      color: ${t.colorSecondary};
    }
  }
`

export default typography
