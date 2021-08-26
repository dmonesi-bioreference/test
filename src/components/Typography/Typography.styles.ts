import styled from 'styled-components';

import { tokens, base } from 'styles';

const TypographyStyled = styled.div`
  ${base}
  line-height: ${tokens.lineHeightDense};
  margin: 0;

  &.default {
    color: ${tokens.colorDefaultText};
  }

  &.primary {
    color: ${tokens.colorPrimaryText};
  }

  &.minor {
    color: ${tokens.colorSecondaryText};
  }

  &.sansSerif {
    font-family: ${tokens.fontFamilySansSerif};
  }

  &.serif {
    font-family: ${tokens.fontFamilySerif};
  }

  &.heading1 {
    font-size: ${tokens.fontSize32};
    font-weight: ${tokens.fontWeightBold};
  }

  &.heading2 {
    font-size: ${tokens.fontSize24};
    font-weight: ${tokens.fontWeightBold};
  }

  &.heading3 {
    font-size: ${tokens.fontSize20};
    font-weight: ${tokens.fontWeightBold};
  }

  &.heading4 {
    font-size: ${tokens.fontSize20};
    font-weight: ${tokens.fontWeightRegular};
  }

  &.heading5 {
    font-size: ${tokens.fontSize16};
    font-weight: ${tokens.fontWeightBold};
  }

  &.heading6 {
    font-size: ${tokens.fontSize16};
    font-weight: ${tokens.fontWeightMedium};
  }

  &.heading7 {
    font-size: ${tokens.fontSize16};
    font-weight: ${tokens.fontWeightRegular};
  }

  &.heading8 {
    font-size: ${tokens.fontSize14};
    font-weight: ${tokens.fontWeightBold};
  }

  &.body {
    font-family: ${tokens.fontFamilyBody};
    font-size: ${tokens.fontSize14};
    font-weight: ${tokens.fontWeightRegular};
    line-height: ${tokens.lineHeightNormal};
  }

  &.helper-text {
    font-family: ${tokens.fontFamilyBody};
    font-size: ${tokens.fontSize14};
    font-style: italic;
    font-weight: ${tokens.fontWeightRegular};
  }

  &.list {
    font-family: ${tokens.fontFamilyBody};
    font-size: ${tokens.fontSize14};
    font-weight: ${tokens.fontWeightRegular};
    line-height: ${tokens.lineHeightLoose};
  }

  &.label--title {
    font-family: ${tokens.fontFamilyLabel};
    font-size: ${tokens.fontSize14};
    font-weight: ${tokens.fontWeightBold};
    line-height: ${tokens.lineHeightSelf};
    letter-spacing: 0.03em;
    text-transform: uppercase;
  }

  &.label--display {
    font-family: ${tokens.fontFamilyLabel};
    font-size: ${tokens.fontSize12};
    font-weight: ${tokens.fontWeightBold};
    letter-spacing: 0.03em;
    text-transform: uppercase;
  }

  &.label--input {
    font-family: ${tokens.fontFamilyLabel};
    font-size: ${tokens.fontSize16};
    font-weight: ${tokens.fontWeightMedium};
    line-height: ${tokens.lineHeightSelf};
  }
`;

export default TypographyStyled;
