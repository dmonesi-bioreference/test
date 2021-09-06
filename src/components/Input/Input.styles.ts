import styled from 'styled-components';

import { FormControl, FormControlProps } from 'components/FormControl';
import { base, inputs, focus } from 'styles';

/* stylelint-disable no-descending-specificity */

const InputStyled = styled(FormControl)<FormControlProps>`
  ${base}

  .input {
    flex: 1 1 auto;
    display: inline-flex;
    align-items: stretch;
    justify-content: start;
    position: relative;
    width: 100%;
    font-family: ${inputs.fontFamily};
    background-color: ${inputs.backgroundColor};
    border: ${inputs.border};
    border-radius: ${inputs.borderRadius};
    vertical-align: middle;
    overflow: hidden;
    transition: ${inputs.transition};
    cursor: text;

    &:hover:not(.input--disabled) {
      border-color: ${inputs.borderHoverColor};
    }

    &.input--focused:not(.input--disabled) {
      border-color: ${focus.borderColor};
      box-shadow: ${focus.shadow};
    }

    &.input--disabled {
      background-color: ${inputs.disabledBackgroundColor};
      opacity: 0.5;
      cursor: not-allowed;

      .input__control {
        color: ${inputs.disabledColor};
      }
    }
  }

  .input__control {
    flex: 1 1 auto;
    font-family: inherit;
    font-size: inherit;
    font-weight: inherit;
    min-width: 0;
    height: 100%;
    color: ${inputs.color};
    border: none;
    background: none;
    box-shadow: none;
    padding: 0;
    margin: 0;
    cursor: inherit;
    /* stylelint-disable property-no-vendor-prefix */
    -webkit-appearance: none;

    &::placeholder {
      color: ${inputs.placeholderColor};
      user-select: none;
    }

    &:focus {
      outline: none;
    }
  }

  .input__prefix,
  .input__suffix {
    display: inline-flex;
    flex: 0 0 auto;
    align-items: center;
    cursor: default;
  }

  .input--small {
    font-size: ${inputs.fontSizeSmall};
    height: ${inputs.heightSmall};

    .input__control {
      height: calc(${inputs.heightSmall} - ${inputs.borderWidth} * 2);
      margin: 0 ${inputs.spacingSmall};
    }

    .input__prefix > * {
      margin-left: ${inputs.spacingSmall};
    }

    .input__suffix > * {
      margin-right: ${inputs.spacingSmall};
    }
  }

  .input--medium {
    font-size: ${inputs.fontSizeMedium};
    height: ${inputs.heightMedium};

    .input__control {
      height: calc(${inputs.heightMedium} - ${inputs.borderWidth} * 2);
      margin: 0 ${inputs.spacing};
    }

    .input__prefix > * {
      margin-left: ${inputs.spacing};
    }

    .input__suffix > * {
      margin-right: ${inputs.spacing};
    }
  }

  .input--large {
    font-size: ${inputs.fontSizeLarge};
    height: ${inputs.heightLarge};

    .input__control {
      height: calc(${inputs.heightLarge} - ${inputs.borderWidth} * 2);
      margin: 0 ${inputs.spacingLarge};
    }

    .input__prefix > * {
      margin-left: ${inputs.spacingLarge};
    }

    .input__suffix > * {
      margin-right: ${inputs.spacingLarge};
    }
  }
`;

export default InputStyled;
