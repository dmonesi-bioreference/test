import styled from 'styled-components';

import { tokens, colors, base } from 'styles';

import { PromptCardProps } from './PromptCard';

const PromptCardStyled = styled.div<PromptCardProps>`
  ${base}

  .label {
    margin-bottom: ${tokens.spacingXSmall};
  }

  .label__button {
    width: 100%;
    border-top-left-radius: ${tokens.borderRadius};
    border-top-right-radius: ${tokens.borderRadius};
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
  }

  .label__button,
  .label__button svg,
  .label__button span {
    color: ${colors.grey[900]};
    background-color: ${colors.grey[100]};
    transition: all ${tokens.transitionMedium} ease-in-out;
  }

  .button__label {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .label__left {
    display: flex;
    justify-content: left;
    align-items: center;
  }

  .label__right {
    display: flex;
    justify-content: right;
    align-items: center;
  }

  .label__prefix {
    padding: ${tokens.spacing};
  }

  .label__suffix {
    padding: ${tokens.spacing};
  }

  .heading {
    margin-bottom: ${tokens.spacing};
  }

  .body {
    margin-bottom: ${tokens.spacingLarge};
  }
`;

export default PromptCardStyled;
