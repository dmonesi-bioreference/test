import styled from 'styled-components';

import ButtonStyled from 'components/Button/Button.styles';
import IconStyled from 'components/Icon/Icon.styles';
import TypographyStyled from 'components/Typography/Typography.styles';
import { colors, tokens } from 'styles';

const ResultsStyled = styled.div`
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

  .results-ready__heading {
    display: flex;
    padding-bottom: ${tokens.spacingXxLarge};

    ${IconStyled} {
      margin-top: ${tokens.spacingXSmall};
    }
  }

  .results-ready__attention {
    display: flex;
    padding: ${tokens.spacing} ${tokens.spacingXxxLarge} ${tokens.spacing}
      ${tokens.spacingMedium};
    background-color: ${colors.yellow[100]};

    ${IconStyled} {
      margin-right: ${tokens.spacing};
    }
  }

  .results-ready__description {
    padding: ${tokens.spacing} ${tokens.spacing} ${tokens.spacingLarge}
      ${tokens.spacing};
    background-color: ${colors.yellow[50]};
  }
`;
export default ResultsStyled;
