import styled from 'styled-components';

import ContentStyled from 'app/components/ContentElements/Content.styles';
import ButtonStyled from 'components/Button/Button.styles';
import IconStyled from 'components/Icon/Icon.styles';
import TypographyStyled from 'components/Typography/Typography.styles';
import { colors, tokens } from 'styles';

const ArticlePageStyled = styled.div`
  .results-ready__nav {
    padding-bottom: ${tokens.spacingSmall};

    ${ButtonStyled} {
      padding: 0;
      height: 100%;
      background-color: transparent;
      justify-content: start;
      border: 0;
      box-shadow: none;

      .button__prefix {
        margin: 0;
      }

      ${TypographyStyled} {
        color: ${colors.indigo[700]};
      }

      ${IconStyled} {
        width: ${tokens.spacingSmall};
        color: ${colors.indigo[700]};
      }
    }
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
export default ArticlePageStyled;
