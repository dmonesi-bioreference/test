import styled from 'styled-components';

import { tokens, base, colors } from 'styles';

const TypographyStyled = styled.div`
  ${base};
  word-break: break-word;
  font-family: ${tokens.fontFamilySansSerif};
  line-height: ${tokens.lineHeightDense};
  margin: 0;
  overflow: hidden;
  max-width: 42ch;

  &.default {
    color: ${tokens.colorDefaultText};
  }

  &.primary {
    color: ${tokens.colorPrimaryText};
  }

  &.inherit {
    color: inherit;
  }

  &.minor {
    color: ${tokens.colorSecondaryText};
  }

  &.white {
    color: ${colors.white};
  }

  &.error {
    color: ${colors.red[600]};
  }

  &.blue {
    color: ${colors.cornflowerBlue[500]};
  }

  &.level1 {
    font-size: ${tokens.fontSize32};
    font-weight: ${tokens.fontWeightBold};
  }

  &.level2 {
    font-size: ${tokens.fontSize24};
    font-weight: ${tokens.fontWeightBold};
  }

  &.level3 {
    font-size: ${tokens.fontSize20};
    font-weight: ${tokens.fontWeightBold};
  }

  &.level4 {
    font-size: ${tokens.fontSize20};
    font-weight: ${tokens.fontWeightRegular};
  }

  &.level5 {
    font-size: ${tokens.fontSize16};
    font-weight: ${tokens.fontWeightBold};
  }

  &.level6 {
    font-size: ${tokens.fontSize16};
    font-weight: ${tokens.fontWeightMedium};
  }

  &.level7 {
    font-size: ${tokens.fontSize16};
    font-weight: ${tokens.fontWeightRegular};
  }

  &.level8 {
    font-size: ${tokens.fontSize14};
    font-weight: ${tokens.fontWeightBold};
  }

  &.fine-print {
    font-family: ${tokens.fontFamilyBody};
    font-size: ${tokens.fontSize10};
    font-weight: ${tokens.fontWeightRegular};
    line-height: ${tokens.lineHeightNormal};
    color: ${colors.cornflowerBlue[900]};
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

  &.validation {
    font-size: ${tokens.fontSize14};
    font-style: italic;
    font-weight: ${tokens.fontWeightRegular};
    font-family: ${tokens.fontFamilyBody};
  }

  &.list {
    font-family: ${tokens.fontFamilyBody};
    font-size: ${tokens.fontSize14};
    font-weight: ${tokens.fontWeightRegular};
    line-height: ${tokens.lineHeightNormal};
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
    flex-shrink: 0;
    font-family: ${tokens.fontFamilyLabel};
    font-size: ${tokens.fontSize16};
    font-weight: ${tokens.fontWeightMedium};
    line-height: ${tokens.lineHeightDense};
  }

  &.label--data {
    flex-shrink: 0;
    font-family: ${tokens.fontFamilyLabel};
    font-size: ${tokens.fontSize16};
    font-weight: ${tokens.fontWeightBold};
    line-height: ${tokens.lineHeightDense};
  }

  &.center {
    text-align: center;
  }

  &.left {
    text-align: left;
  }

  &.right {
    text-align: right;
  }

  .floated {
    float: left;
    margin-right: ${tokens.spacingXSmall};
  }
`;

export default TypographyStyled;
