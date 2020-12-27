import styled from 'styled-components';
import t, { inputs, labels } from '../../styles/tokens';
import { visuallyHidden } from '../../styles/utilities/hidden';

const FormControlStyled = styled.div`
  .form-control__label {
    flex: 0 0 auto;
    color: ${labels.color};
    font-weight: ${labels.fontWeight};
    line-height: 1.8;
  }

  .form-control__invalid-message,
  .form-control__help-text {
    margin-top: ${t.spacingXxxSmall};
  }

  .form-control__help-text {
    color: ${inputs.helpColor};
  }

  &.form-control--boolean {
    .form-control__label {
      display: inline-flex;
      align-items: center;
      cursor: pointer;
      font-weight: ${t.fontWeightRegular};
      user-select: none;
    }

    .form-control__input {
      display: flex;
      align-items: center;
      margin-right: ${inputs.spacingMedium};
    }

    .form-control__invalid-message,
    .form-control__help-text {
      margin-left: calc(${inputs.spacingMedium} + 1em + 2px);
    }
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

    .form-control__help-text,
    .form-control__invalid-message {
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

    .form-control__invalid-message {
      grid-area: invalid-message;
    }
  }

  &.form-control--bottom {
    display: flex;
    flex-flow: column-reverse;

    .form-control__help-text {
      order: -1;
    }

    .form-control__invalid-message {
      order: -2;
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

    .form-control__help-text,
    .form-control__invalid-message {
      text-align: right;
    }
  }
`;

export default FormControlStyled;
