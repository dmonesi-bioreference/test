import styled from 'styled-components';

import ContentStyled from 'app/components/ContentElements/Content.styles';
import ReturnLinkStyled from 'components/ReturnLink/ReturnLink.styles';
import TypographyStyled from 'components/Typography/Typography.styles';
import { tokens } from 'styles';

const ContentPageStyled = styled.div`
  ${ReturnLinkStyled} {
    padding: ${tokens.spacingXLarge} 0;
  }

  ${ContentStyled} {
    ${TypographyStyled} {
      &.heading1 {
        margin-bottom: ${tokens.spacingXSmall};
      }

      &.body {
        font-family: ${tokens.fontFamilySansSerif};
        font-size: ${tokens.fontSize16};
        margin: ${tokens.spacingLarge} 0 ${tokens.spacingLarge};
      }
    }
  }
`;
export default ContentPageStyled;
