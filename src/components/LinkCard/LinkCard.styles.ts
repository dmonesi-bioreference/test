import { darken } from 'polished';
import styled from 'styled-components';

import { base, tokens } from 'styles';

import { LinkCardProps } from './LinkCard';

const LinkCardStyled = styled.div<LinkCardProps>`
  ${base}

  .label {
    margin-bottom: ${tokens.spacingXSmall};
  }

  .label--button {
    width: 100%;
    display: grid;
    grid-template-columns: max-content 1fr max-content;
  }

  .label--button,
  .label--button svg,
  .label--button span {
    color: ${(props) => props.themeColor || tokens.colorPrimary};
    transition: all ${tokens.transitionMedium} ease-in-out;
  }

  .label--button:hover:not(.button--disabled) {
    text-decoration: none;

    * {
      color: ${(props) => darken(0.2, props.themeColor || tokens.colorPrimary)};
    }
  }

  .heading {
    margin-bottom: ${tokens.spacing};
  }

  .body {
    margin-bottom: ${tokens.spacingLarge};
  }
`;

export default LinkCardStyled;
