import styled from 'styled-components';
import t, { inputs, focus, colors } from '../../styles/tokens';
import { base } from '../../styles/utilities/base';
import FormControl, { FormControlProps } from '../FormControl/FormControl';

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
    border-radius: ${t.borderRadiusCircle};
    color: ${colors.white};
    transition: ${inputs.transition},
      background-color ${t.transitionFast} ease-in-out,
      color ${t.transitionFast} ease-in-out;

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
    border-color: ${t.colorPrimary};
    background-color: ${t.colorPrimary};
  }

  /* Checked + hover */
  .radio.radio--checked:not(.radio--disabled) .radio__control:hover {
    border-color: ${t.colorPrimaryHover};
    background-color: ${t.colorPrimaryHover};
  }

  /* Checked + focus */
  .radio.radio--checked:not(.radio--disabled).radio--focused .radio__control {
    border-color: ${t.colorPrimaryHover};
    background-color: ${t.colorPrimaryHover};
    box-shadow: ${focus.shadow};
  }

  .radio--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

export default RadioStyled;
