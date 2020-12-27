import styled from 'styled-components';
import { inputs, focus } from '../../styles/tokens';
import { base } from '../../styles/utilities/base';
import FormControl, { FormControlProps } from '../FormControl/FormControl';

/* stylelint-disable no-descending-specificity */

const SelectStyled = styled(FormControl)<FormControlProps>`
  ${base}

  .select {
    display: flex;
    align-items: center;
    position: relative;
    width: 100%;
    font-family: ${inputs.fontFamily};
    background-color: ${inputs.backgroundColor};
    border: ${inputs.border};
    border-radius: ${inputs.borderRadius};
    transition: ${inputs.transition};

    &:hover:not(.select--disabled) {
      border-color: ${inputs.borderHoverColor};
    }

    &.select--focused:not(.select--disabled) {
      border-color: ${focus.borderColor};
      box-shadow: ${focus.shadow};
    }

    &.select--disabled {
      background-color: ${inputs.disabledBackgroundColor};
      opacity: 0.5;
      cursor: not-allowed;

      .select__control {
        background-color: transparent;
        color: ${inputs.disabledColor};
      }
    }
  }

  .select__control {
    flex: 1 1 auto;
    font-family: inherit;
    font-size: inherit;
    font-weight: inherit;
    color: ${inputs.color};
    border: none;
    background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='%239CA3AF'><path fill-rule='evenodd' d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z' clip-rule='evenodd' /></svg>");
    background-origin: content-box;
    background-position: right center;
    background-repeat: no-repeat;
    box-shadow: none;
    cursor: inherit;
    /* stylelint-disable property-no-vendor-prefix */
    -webkit-appearance: none;

    &:focus {
      outline: none;
    }
  }

  .select--placeholder {
    .select__control {
      color: ${inputs.placeholderColor};
    }
  }

  .select--small {
    font-size: ${inputs.fontSizeSmall};
    height: ${inputs.heightSmall};

    .select__control {
      padding: 0 ${inputs.spacingSmall};
    }
  }

  .select--medium {
    font-size: ${inputs.fontSizeMedium};
    height: ${inputs.heightMedium};

    .select__control {
      padding: 0 ${inputs.spacingMedium};
    }
  }

  .select--large {
    font-size: ${inputs.fontSizeLarge};
    height: ${inputs.heightLarge};

    .select__control {
      padding: 0 ${inputs.spacingLarge};
    }
  }
`;

export default SelectStyled;
