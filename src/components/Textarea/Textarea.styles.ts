import styled from 'styled-components';
import { inputs, focus } from '../../styles/tokens';
import { base } from '../../styles/utilities/base';
import FormControl, { FormControlProps } from '../FormControl/FormControl';

/* stylelint-disable no-descending-specificity */

const TextareaStyled = styled(FormControl)<FormControlProps>`
  ${base}

  .textarea {
    display: flex;
    align-items: center;
    position: relative;
    width: 100%;
    font-family: ${inputs.fontFamily};
    background-color: ${inputs.backgroundColor};
    border: ${inputs.border};
    border-radius: ${inputs.borderRadius};
    vertical-align: middle;
    transition: ${inputs.transition};
    cursor: text;

    &:hover:not(.textarea--disabled) {
      border-color: ${inputs.borderHoverColor};
    }

    &.textarea--focused:not(.textarea--disabled) {
      border-color: ${focus.borderColor};
      box-shadow: ${focus.shadow};
    }

    &.textarea--disabled {
      background-color: ${inputs.disabledBackgroundColor};
      opacity: 0.5;
      cursor: not-allowed;

      .textarea__control {
        color: ${inputs.disabledColor};
      }
    }
  }

  .textarea__control {
    flex: 1 1 auto;
    font-family: inherit;
    font-size: inherit;
    font-weight: inherit;
    line-height: 1.4;
    color: ${inputs.color};
    border: none;
    background: none;
    box-shadow: none;
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

  .textarea--small {
    font-size: ${inputs.fontSizeSmall};

    .textarea__control {
      padding: 0.5em ${inputs.spacingSmall};
    }
  }

  .textarea--medium {
    font-size: ${inputs.fontSizeMedium};

    .textarea__control {
      padding: 0.5em ${inputs.spacingMedium};
    }
  }

  .textarea--large {
    font-size: ${inputs.fontSizeLarge};

    .textarea__control {
      padding: 0.5em ${inputs.spacingLarge};
    }
  }
`;

export default TextareaStyled;
