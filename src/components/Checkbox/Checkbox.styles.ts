import styled from 'styled-components';
import t, { inputs, focus, colors } from '../../styles/tokens';
import { base } from '../../styles/utilities/base';
import FormControl, { FormControlProps } from '../FormControl/FormControl';

/* stylelint-disable no-descending-specificity */

const CheckboxStyled = styled(FormControl)<FormControlProps>`
  ${base}

  .checkbox {
    display: inline-flex;
    align-items: center;
    vertical-align: middle;
    cursor: pointer;
  }

  .checkbox__control {
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 1em;
    height: 1em;
    border: ${inputs.border};
    color: ${colors.white};
    transition: ${inputs.transition},
      background-color ${t.transitionFast} ease-in-out,
      color ${t.transitionFast} ease-in-out;

    input[type='checkbox'] {
      position: absolute;
      opacity: 0;
      padding: 0;
      margin: 0;
      pointer-events: none;
    }

    .checkbox__icon {
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
  .checkbox:not(.checkbox--checked):not(.checkbox--disabled)
    .checkbox__control:hover {
    border-color: ${inputs.borderHoverColor};
  }

  /* Focus */
  .checkbox.checkbox--focused:not(.checkbox--checked):not(.checkbox--disabled)
    .checkbox__control {
    border-color: ${focus.borderColor};
    box-shadow: ${focus.shadow};
  }

  /* Checked */
  .checkbox--checked .checkbox__control {
    border-color: ${t.colorPrimary};
    background-color: ${t.colorPrimary};
  }

  /* Checked + hover */
  .checkbox.checkbox--checked:not(.checkbox--disabled)
    .checkbox__control:hover {
    border-color: ${t.colorPrimaryHover};
    background-color: ${t.colorPrimaryHover};
  }

  /* Checked + focus */
  .checkbox.checkbox--checked:not(.checkbox--disabled).checkbox--focused
    .checkbox__control {
    border-color: ${t.colorPrimaryHover};
    background-color: ${t.colorPrimaryHover};
    box-shadow: ${focus.shadow};
  }

  .checkbox--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

export default CheckboxStyled;
