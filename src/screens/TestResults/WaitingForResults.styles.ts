import styled from 'styled-components';

import CardStyled from 'components/Card/Card.styles';
import CircularProgressStyled from 'components/CircularProgress/CircularProgress.styles';
import TypographyStyled from 'components/Typography/Typography.styles';
import { colors, tokens } from 'styles';

const WaitingForResultsStyled = styled.div`
  ${CardStyled} {
    border: ${tokens.spacingXxxSmall} solid ${colors.powderBlue[200]};

    .card__content {
      display: inline-flex;

      ${CircularProgressStyled} {
        padding-right: ${tokens.spacing};
      }

      ${TypographyStyled} {
        margin: 0;
      }
    }
  }
`;
export default WaitingForResultsStyled;
