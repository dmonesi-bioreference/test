import styled from 'styled-components';
import tokens, { colors } from '../../styles/tokens';
import { base } from '../../styles/utilities/base';

const TypographyStyled = styled.div`
  ${base}
  color: ${colors.black};
  line-height: ${tokens.lineHeightDense};

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
    font-weight: ${tokens.fontWeightRegular};
  }

  &.heading4 {
    font-size: ${tokens.fontSize16};
    font-weight: ${tokens.fontWeightBold};
  }

  &.heading5 {
    font-size: ${tokens.fontSize16};
    font-weight: ${tokens.fontWeightMedium};
  }

  &.heading6 {
    font-size: ${tokens.fontSize16};
    font-weight: ${tokens.fontWeightRegular};
  }

  &.body {
    font-size: ${tokens.fontSize14};
    font-weight: ${tokens.fontWeightRegular};
    line-height: ${tokens.lineHeightNormal};
  }

  &.category {
    font-size: ${tokens.fontSize14};
    font-weight: ${tokens.fontWeightBold};
    line-height: ${tokens.lineHeightSelf};
    text-transform: uppercase;
    letter-spacing: 0.03em;
  }
`;

export default TypographyStyled;
