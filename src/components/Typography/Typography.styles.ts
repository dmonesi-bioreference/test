import styled from 'styled-components';

import { tokens, base, colors } from 'styles';

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
    font-size: ${tokens.fontSize14};
    font-weight: ${tokens.fontWeightRegular};
    line-height: ${tokens.lineHeightNormal};
  }

  &.category {
    color: ${colors.blue[600]};
    font-size: ${tokens.fontSize14};
    font-weight: ${tokens.fontWeightBold};
    line-height: ${tokens.lineHeightSelf};
    letter-spacing: 0.03em;
    text-transform: uppercase;
  }

  &.helper-text {
    font-size: ${tokens.fontSize14};
    font-style: italic;
    font-weight: ${tokens.fontWeightRegular};
  }

  &.label {
    font-size: ${tokens.fontSize12};
    font-weight: ${tokens.fontWeightBold};
    letter-spacing: 0.03em;
    text-transform: uppercase;
  }
`;

export default TypographyStyled;
