import { darken, lighten } from 'polished';
import styled from 'styled-components';

import TypographyStyled from 'components/Typography/Typography.styles';
import { base, tokens } from 'styles';

import { LinkCardProps } from './LinkCard';

const LinkCardStyled = styled.div<LinkCardProps>`
  ${base}

  .label {
    margin-bottom: ${tokens.spacingXSmall};
  }

  .label--button {
    width: 100%;
    grid-template-columns: max-content 1fr max-content;
  }

  .label--button,
  .label--button svg {
    color: ${(props) => props.theme.colors.headerText};
    transition: all ${tokens.transitionMedium} ease-in-out;
  }

  .label--button span {
    color: ${(props) => (
      props.variant === 'link'
      ? lighten(0.2, props.theme.colors.headerText)
      : props.theme.colors.headerText
    )};
    transition: all ${tokens.transitionMedium} ease-in-out;
  }

  .label--button:hover:not(.button--disabled) {
    text-decoration: none;

    * {
      color: ${(props) => darken(0.2, props.theme.colors.headerText)};
    }
  }

  .heading {
    margin-bottom: ${tokens.spacing};

    ${TypographyStyled} {
      color: ${(props) => props.theme.colors.headerText};
    }
  }

  .body {
    margin-bottom: ${tokens.spacingLarge};
  }
`;

export default LinkCardStyled;
