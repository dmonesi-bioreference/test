import styled from 'styled-components';
import t, { colors, inputs, buttons, focus } from '../../styles/tokens';
import { base } from '../../styles/utilities/base';
import { ButtonProps } from './Button';

type ButtonStyledProps = {
  as: 'a' | 'button' | 'div';
  type: 'submit' | 'button' | undefined;
};

const ButtonStyled = styled.button<ButtonProps & ButtonStyledProps>`
  ${base}
  display: inline-flex;
  align-items: stretch;
  justify-content: center;
  border-style: solid;
  border-radius: ${t.borderRadiusXLarge};
  border-width: ${inputs.borderWidth};
  font-family: ${t.fontFamilyBody};
  font-size: ${buttons.fontSize};
  font-weight: ${t.fontWeightBold};
  height: ${inputs.heightLarge};
  line-height: calc(${inputs.heightLarge} - ${inputs.borderWidth} * 2);
  padding: 0 ${t.spacingXLarge};
  text-decoration: none;
  user-select: none;
  white-space: nowrap;
  vertical-align: middle;
  transition: ${t.transitionFast} all;
  cursor: pointer;

  &:focus {
    outline: none;
  }

  /*
  * Style Modifiers
  */

  &.button--default {
    background-color: ${colors.white};
    border-color: ${colors.grey[300]};
    box-shadow: ${t.shadowXSmall};
    color: ${colors.grey[800]};

    &:hover:not(.button--disabled) {
      background-color: ${colors.grey[50]};
      border-color: ${colors.grey[400]};
    }

    &:focus:not(.button--disabled) {
      background-color: ${colors.grey[50]};
      border-color: ${focus.borderColor};
      box-shadow: ${focus.shadow};
    }

    &:active:not(.button--disabled) {
      background-color: ${colors.grey[50]};
      border-color: ${colors.grey[400]};
      color: ${colors.grey[900]};
    }
  }

  &.button--primary {
    background-color: ${t.colorPrimary};
    border-color: ${t.colorPrimary};
    box-shadow: ${t.shadowXSmall};
    color: ${colors.white};

    &:hover:not(.button--disabled) {
      background-color: ${t.colorPrimaryHover};
      border-color: ${t.colorPrimaryHover};
      color: ${colors.white};
    }

    &:focus:not(.button--disabled) {
      background-color: ${t.colorPrimaryHover};
      border-color: ${t.colorPrimaryHover};
      color: ${colors.white};
      box-shadow: ${focus.shadow};
    }

    &:active:not(.button--disabled) {
      background-color: ${t.colorPrimaryActive};
      border-color: ${t.colorPrimaryActive};
      color: ${colors.white};
    }
  }

  &.button--success {
    background-color: ${t.colorSuccess};
    border-color: ${t.colorSuccess};
    box-shadow: ${t.shadowXSmall};
    color: ${colors.white};

    &:hover:not(.button--disabled) {
      background-color: ${t.colorSuccessHover};
      border-color: ${t.colorSuccessHover};
      color: ${colors.white};
    }

    &:focus:not(.button--disabled) {
      background-color: ${t.colorSuccessHover};
      border-color: ${t.colorSuccessHover};
      color: ${colors.white};
      box-shadow: 0 0 0 3px ${t.colorSuccessFocus};
    }

    &:active:not(.button--disabled) {
      background-color: ${t.colorSuccess};
      border-color: ${t.colorSuccess};
      color: ${colors.white};
    }
  }

  &.button--info {
    background-color: ${t.colorSecondary};
    border-color: ${t.colorSecondary};
    box-shadow: ${t.shadowXSmall};
    color: ${colors.white};

    &:hover:not(.button--disabled) {
      background-color: ${t.colorSecondaryHover};
      border-color: ${t.colorSecondaryHover};
      color: ${colors.white};
    }

    &:focus:not(.button--disabled) {
      background-color: ${t.colorSecondaryHover};
      border-color: ${t.colorSecondaryHover};
      color: ${colors.white};
      box-shadow: 0 0 0 3px ${t.colorSecondaryFocus};
    }

    &:active:not(.button--disabled) {
      background-color: ${t.colorSecondary};
      border-color: ${t.colorSecondary};
      color: ${colors.white};
    }
  }

  &.button--warning {
    background-color: ${t.colorWarning};
    border-color: ${t.colorWarning};
    box-shadow: ${t.shadowXSmall};
    color: ${colors.white};

    &:hover:not(.button--disabled) {
      background-color: ${t.colorWarningHover};
      border-color: ${t.colorWarningHover};
      color: ${colors.white};
    }

    &:focus:not(.button--disabled) {
      background-color: ${t.colorWarningHover};
      border-color: ${t.colorWarningHover};
      color: ${colors.white};
      box-shadow: 0 0 0 3px ${t.colorWarningFocus};
    }

    &:active:not(.button--disabled) {
      background-color: ${t.colorWarning};
      border-color: ${t.colorWarning};
      color: ${colors.white};
    }
  }

  &.button--danger {
    background-color: ${t.colorDanger};
    border-color: ${t.colorDanger};
    box-shadow: ${t.shadowXSmall};
    color: ${colors.white};

    &:hover:not(.button--disabled) {
      background-color: ${t.colorDangerHover};
      border-color: ${t.colorDangerHover};
      color: ${colors.white};
    }

    &:focus:not(.button--disabled) {
      background-color: ${t.colorDangerHover};
      border-color: ${t.colorDangerHover};
      color: ${colors.white};
      box-shadow: 0 0 0 3px ${t.colorDangerFocus};
    }

    &:active:not(.button--disabled) {
      background-color: ${t.colorDanger};
      border-color: ${t.colorDanger};
      color: ${colors.white};
    }
  }

  &.button--text {
    background-color: transparent;
    border-color: transparent;
    color: ${t.colorPrimary};

    &:hover:not(.button--disabled) {
      background-color: transparent;
      border-color: transparent;
      color: ${t.colorPrimaryHover};
    }

    &:focus:not(.button--disabled) {
      background-color: transparent;
      border-color: transparent;
      color: ${t.colorPrimaryHover};
      box-shadow: 0 0 0 3px ${t.colorPrimaryFocus};
    }

    &:active:not(.button--disabled) {
      background-color: transparent;
      border-color: transparent;
      color: ${t.colorPrimary};
    }
  }

  &.button--link {
    background-color: transparent;
    border-color: transparent;
    color: ${t.colorPrimary};
    height: fit-content;
    padding: 0;

    &:hover:not(.button--disabled) {
      color: ${t.colorPrimaryHover};
      text-decoration: underline;
    }

    &:focus:not(.button--disabled) {
      color: ${t.colorPrimaryHover};
      box-shadow: 0 0 0 3px ${t.colorPrimaryFocus};
      text-decoration: underline;
    }

    &:active:not(.button--disabled) {
      color: ${t.colorPrimaryActive};
      text-decoration: underline;
    }
  }

  &.button--secondary {
    font-size: ${t.fontSize20};
    font-weight: ${t.fontWeightMedium};
    line-height: ${t.lineHeightDense};
  }

  &.button--tertiary {
    font-size: ${t.fontSize16};
    font-weight: ${t.fontWeightSemibold};
    line-height: ${t.lineHeightSelf};
  }

  &[disabled] {
    background-color: ${colors.grey[300]};
    border-color: ${colors.grey[300]};
    color: ${colors.grey[900]};
    cursor: not-allowed;

    * {
      pointer-events: none;
    }
  }

  .button__prefix,
  .button__suffix {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
  }

  .button__prefix *:first-child {
    margin-left: -${t.spacingXSmall};
    margin-right: ${t.spacingXSmall};
  }

  .button__suffix *:last-child {
    margin-left: ${t.spacingXSmall};
    margin-right: -${t.spacingXSmall};
  }
`;

export default ButtonStyled;
