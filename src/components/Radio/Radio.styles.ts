import styled from 'styled-components';

import { FormControl, FormControlProps } from 'components/FormControl';
import { base, tokens, inputs, focus, colors } from 'styles';

/* stylelint-disable no-descending-specificity */

const RadioStyled = styled(FormControl)<FormControlProps>`
  ${base}

  .radio {
    display: inline-flex;
    align-items: center;
    vertical-align: middle;
    cursor: pointer;
  }

  .radio__control {
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 1em;
    height: 1em;
    border: ${inputs.border};
    border-radius: ${tokens.borderRadiusCircle};
    color: ${colors.white};
    transition: ${inputs.transition},
      background-color ${tokens.transitionFast} ease-in-out,
      color ${tokens.transitionFast} ease-in-out;

    input[type='radio'] {
      position: absolute;
      opacity: 0;
      padding: 0;
      margin: 0;
      pointer-events: none;
    }

    .radio__icon {
      display: inline-flex;
      width: 1em;
      height: 1em;

      svg {
        width: 100%;
        height: 100%;
      }
    }
  }

  // Hover
  .radio:not(.radio--checked):not(.radio--disabled) .radio__control:hover {
    border-color: ${inputs.borderHoverColor};
  }

  /* Focus */
  .radio.radio--focused:not(.radio--checked):not(.radio--disabled)
    .radio__control {
    border-color: ${focus.borderColor};
    box-shadow: ${focus.shadow};
  }

  /* Checked */
  .radio--checked .radio__control {
    border-color: ${tokens.colorPrimary};
    background-color: ${tokens.colorPrimary};
  }

  /* Checked + hover */
  .radio.radio--checked:not(.radio--disabled) .radio__control:hover {
    border-color: ${tokens.colorPrimaryHover};
    background-color: ${tokens.colorPrimaryHover};
  }

  /* Checked + focus */
  .radio.radio--checked:not(.radio--disabled).radio--focused .radio__control {
    border-color: ${tokens.colorPrimaryHover};
    background-color: ${tokens.colorPrimaryHover};
    box-shadow: ${focus.shadow};
  }

  .radio--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

export default RadioStyled;
