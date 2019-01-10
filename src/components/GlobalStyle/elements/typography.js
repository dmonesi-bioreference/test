import { css } from 'styled-components';
import tokens from '../settings/tokens';

const typography = css`
  html {
    font-family: ${tokens.fontFamily};
    line-height: ${tokens.lineHeightText};
  }

  h1 {
    color: ${tokens.colorBlack};
    font-size: ${tokens.fontSizeHeadingXLarge};
    font-weight: ${tokens.fontWeightBold};
    line-height: ${tokens.lineHeightHeading};
  }

  h2 {
    color: ${tokens.colorBlack};
    font-size: ${tokens.fontSizeHeadingLarge};
    font-weight: ${tokens.fontWeightBold};
    line-height: ${tokens.lineHeightHeading};
  }

  h3 {
    color: ${tokens.colorBlack};
    font-size: ${tokens.fontSizeHeadingMedium};
    font-weight: ${tokens.fontWeightBold};
    line-height: ${tokens.lineHeightHeading};
  }

  h4 {
    color: ${tokens.colorBlack};
    font-size: ${tokens.fontSizeHeadingSmall};
    font-weight: ${tokens.fontWeightBold};
    line-height: ${tokens.lineHeightHeading};
  }

  p {
    color: ${tokens.colorPrimary};
    font-size: ${tokens.fontSizeTextMedium};
  }

  small {
    color: ${tokens.colorAccent};
    font-size: ${tokens.fontSizeHeadingXSmall};
  }
`;

export default typography;
