import styled from 'styled-components';

import TypographyStyled from 'components/Typography/Typography.styles';
import { inputs, labels, tokens, visuallyHidden } from 'styles';

const FormControlStyled = styled.div`
  .form-control {
    overflow: hidden;
  }

  .form-control__label {
    display: flex;
    align-items: center;
    flex: 0 0 auto;
    margin-bottom: ${tokens.spacingXxSmall};
    max-width: 100%;
    word-break: break-word;
    flex-wrap: wrap;
  }

  .form-control__label-group {
    display: inline-flex;
    flex-wrap: wrap;
    max-width: 100%;

    ${TypographyStyled} {
      max-width: 100%;
    }
  }

  .form-control__link {
    margin-left: ${tokens.spacingXxSmall};
    margin-bottom: ${tokens.spacingXxSmall};
  }

  .form-control__invalid-message {
    margin-left: ${tokens.spacingXxSmall};
  }

  .form-control__invalid-message--boolean {
    margin-bottom: ${tokens.spacingXSmall};
  }

  .form-control__help-text {
    color: ${inputs.helpColor};
    margin-top: ${tokens.spacingXxSmall};
  }

  &.form-control--boolean {
    .form-control__label {
      display: inline-flex;
      align-items: center;
      cursor: pointer;
      user-select: none;
    }

    .form-control__input {
      display: flex;
      align-items: center;
      align-self: start;
      margin-right: ${inputs.spacingXSmall};
    }

    .form-control__help-text {
      margin-left: calc(${inputs.spacing} + 1em + 2px);
    }
  }

  &.form-control--boolean + &.form-control--boolean {
    margin-top: ${tokens.spacingXSmall};
  }

  &.form-control--disabled {
    .form-control__label {
      cursor: not-allowed;
    }
  }

  &.form-control--small {
    .form-control__label {
      font-size: ${labels.fontSizeSmall};
    }

    .form-control__help-text {
      font-size: ${inputs.helpFontSizeSmall};
    }
  }

  &.form-control--medium {
    .form-control__label {
      font-size: ${labels.fontSizeMedium};
    }

    .form-control__help-text {
      font-size: ${inputs.helpFontSizeMedium};
    }
  }

  &.form-control--large {
    .form-control__label {
      font-size: ${labels.fontSizeLarge};
    }

    .form-control__help-text {
      font-size: ${inputs.helpFontSizeLarge};
    }
  }

  &.form-control--label-hidden {
    .form-control__label {
      ${visuallyHidden};
    }
  }

  &.form-control--right {
    display: flex;
    align-items: center;
    flex-flow: row-reverse;
    flex-wrap: wrap;
    justify-content: flex-end;

    .form-control__input {
      flex: 1 1 auto;
    }

    .form-control__label {
      margin-left: ${labels.spacing};
    }

    .form-control__help-text {
      flex: 0 0 100%;
    }
  }

  &.form-control--left {
    display: grid;
    grid-template-columns: min-content auto;
    grid-template-areas:
      'label input'
      '. help-text'
      '. invalid-message';

    .form-control__label {
      grid-area: label;
      margin-right: ${labels.spacing};
      white-space: nowrap;
      align-self: center;
    }

    .form-control__input {
      grid-area: input;
    }

    .form-control__help-text {
      grid-area: help-text;
    }
  }

  &.form-control--bottom {
    display: flex;
    flex-flow: column-reverse;

    .form-control__help-text {
      order: -1;
    }
  }

  &.form-control--right.form-control--apart {
    display: flex;
    justify-content: space-between;

    .form-control__input {
      flex: 0 0 auto;
    }
  }

  &.form-control--left.form-control--apart {
    display: grid;
    grid-template-columns: auto min-content;

    .form-control__help-text {
      text-align: right;
    }
  }
`;

export default FormControlStyled;
