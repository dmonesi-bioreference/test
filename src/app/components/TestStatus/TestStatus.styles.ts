import styled from 'styled-components';

import ButtonStyled from 'components/Button/Button.styles';
import CardStyled from 'components/Card/Card.styles';
import CircularProgressStyled from 'components/CircularProgress/CircularProgress.styles';
import IconStyled from 'components/Icon/Icon.styles';
import TypographyStyled from 'components/Typography/Typography.styles';
import { base, colors, tokens } from 'styles';

const TestStatusStyled = styled.div`
  ${base}

  ${CircularProgressStyled} {
    margin-bottom: calc(${tokens.spacing} * -3.625);
    margin-left: ${tokens.spacingLarge};
  }

  ${CardStyled} {
    box-shadow: ${tokens.shadowLarge};

    * {
      padding: 0;
    }
  }

  ${IconStyled} {
    color: ${colors.powderBlue[700]};
  }

  header {
    margin: calc(${tokens.spacing} * 4.5) ${tokens.spacingXLarge}
      ${tokens.spacing};
    ${ButtonStyled} {
      width: 100%;
      justify-content: space-between;
      text-decoration: none;

      &:hover:not(.button--disabled) {
        box-shadow: none;
        text-decoration: none;
      }

      &:focus:not(.button--disabled) {
        box-shadow: none;
        text-decoration: none;
      }

      &:active:not(.button--disabled) {
        box-shadow: none;
        text-decoration: none;
      }
    }

    ${IconStyled} {
      color: ${colors.cornflowerBlue[800]};
    }

    .test-status__header-main {
      ${TypographyStyled} {
        color: ${colors.cornflowerBlue[900]};
      }
    }

    .test-status__header-minor {
      ${TypographyStyled} {
        color: ${colors.cornflowerBlue[800]};
      }
    }
  }

  .test-status__last-updated {
    display: flex;
    align-items: center;
    margin: 0 0 ${tokens.spacingXLarge} ${tokens.spacingXLarge};

    * {
      display: inline-flex;
      color: ${colors.indigo[600]};
    }

    ${TypographyStyled} {
      font-size: ${tokens.fontSize12};
      margin-left: ${tokens.spacingXxSmall};
    }

    ${IconStyled} {
      width: ${tokens.spacingSmall};

      * {
        width: ${tokens.spacingSmall};
        height: ${tokens.spacingSmall};
      }
    }
  }
`;

export default TestStatusStyled;
