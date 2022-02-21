import styled from 'styled-components';

import { FormControl, FormControlProps } from 'components/FormControl';
import TypographyStyled from 'components/Typography/Typography.styles';
import { base, inputs, focus, colors, tokens } from 'styles';

/* stylelint-disable no-descending-specificity */

const CheckboxStyled = styled(FormControl)<FormControlProps>`
  ${base}
  display: inline-flex;
  align-items: center;
  flex-wrap: wrap;

  .checkbox {
    display: inline-flex;
    align-items: center;
    vertical-align: middle;
    cursor: pointer;
    flex-wrap: nowrap;
  }

  ${TypographyStyled} {
    word-wrap: break-word;
  }

  .checkbox__control {
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 1em;
    height: 1em;
    border: ${inputs.border};
    border-radius: ${tokens.borderRadiusMedium};
    color: ${colors.white};
    transition: ${inputs.transition},
      background-color ${tokens.transitionFast} ease-in-out,
      color ${tokens.transitionFast} ease-in-out;

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

  /* Hover */
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
    border-color: ${tokens.colorPrimary};
    background-color: ${tokens.colorPrimary};
  }

  /* Checked + hover */
  .checkbox.checkbox--checked:not(.checkbox--disabled)
    .checkbox__control:hover {
    border-color: ${tokens.colorPrimaryHover};
    background-color: ${tokens.colorPrimaryHover};
  }

  /* Checked + focus */
  .checkbox.checkbox--checked:not(.checkbox--disabled).checkbox--focused
    .checkbox__control {
    border-color: ${tokens.colorPrimaryHover};
    background-color: ${tokens.colorPrimaryHover};
    box-shadow: ${focus.shadow};
  }

  .checkbox--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .checkbox--invalid {
    border-color: ${colors.red[400]};
  }
`;

export default CheckboxStyled;
