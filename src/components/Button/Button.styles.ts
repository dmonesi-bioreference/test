import styled from 'styled-components';

import { base, colors, inputs, buttons, focus, tokens } from 'styles';

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
  border-radius: ${tokens.borderRadiusXLarge};
  border-width: ${inputs.borderWidth};
  font-family: ${tokens.fontFamilyBody};
  font-size: ${buttons.fontSize};
  font-weight: ${tokens.fontWeightBold};
  height: ${inputs.heightLarge};
  line-height: calc(${inputs.heightLarge} - ${inputs.borderWidth} * 2);
  padding: 0 ${tokens.spacingXLarge};
  text-decoration: none;
  user-select: none;
  white-space: nowrap;
  vertical-align: middle;
  transition: ${tokens.transitionFast} all;
  cursor: pointer;
  width: 100%;

  &:focus {
    outline: none;
  }

  /*
  * Style Modifiers
  */

  &.button--default {
    background-color: ${colors.white};
    border-color: ${colors.grey[300]};
    box-shadow: ${tokens.shadowXSmall};
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
    background-color: ${tokens.colorPrimary};
    border-color: ${tokens.colorPrimary};
    box-shadow: ${tokens.shadowXSmall};
    color: ${colors.white};

    &:hover:not(.button--disabled) {
      background-color: ${tokens.colorPrimaryHover};
      border-color: ${tokens.colorPrimaryHover};
      color: ${colors.white};
    }

    &:focus:not(.button--disabled) {
      background-color: ${tokens.colorPrimaryHover};
      border-color: ${tokens.colorPrimaryHover};
      color: ${colors.white};
      box-shadow: ${focus.shadow};
    }

    &:active:not(.button--disabled) {
      background-color: ${tokens.colorPrimaryActive};
      border-color: ${tokens.colorPrimaryActive};
      color: ${colors.white};
    }
  }

  &.button--success {
    background-color: ${tokens.colorSuccess};
    border-color: ${tokens.colorSuccess};
    box-shadow: ${tokens.shadowXSmall};
    color: ${colors.white};

    &:hover:not(.button--disabled) {
      background-color: ${tokens.colorSuccessHover};
      border-color: ${tokens.colorSuccessHover};
      color: ${colors.white};
    }

    &:focus:not(.button--disabled) {
      background-color: ${tokens.colorSuccessHover};
      border-color: ${tokens.colorSuccessHover};
      color: ${colors.white};
      box-shadow: 0 0 0 3px ${tokens.colorSuccessFocus};
    }

    &:active:not(.button--disabled) {
      background-color: ${tokens.colorSuccess};
      border-color: ${tokens.colorSuccess};
      color: ${colors.white};
    }
  }

  &.button--info {
    background-color: ${tokens.colorSecondary};
    border-color: ${tokens.colorSecondary};
    box-shadow: ${tokens.shadowXSmall};
    color: ${colors.white};

    &:hover:not(.button--disabled) {
      background-color: ${tokens.colorSecondaryHover};
      border-color: ${tokens.colorSecondaryHover};
      color: ${colors.white};
    }

    &:focus:not(.button--disabled) {
      background-color: ${tokens.colorSecondaryHover};
      border-color: ${tokens.colorSecondaryHover};
      color: ${colors.white};
      box-shadow: 0 0 0 3px ${tokens.colorSecondaryFocus};
    }

    &:active:not(.button--disabled) {
      background-color: ${tokens.colorSecondary};
      border-color: ${tokens.colorSecondary};
      color: ${colors.white};
    }
  }

  &.button--warning {
    background-color: ${tokens.colorWarning};
    border-color: ${tokens.colorWarning};
    box-shadow: ${tokens.shadowXSmall};
    color: ${colors.white};

    &:hover:not(.button--disabled) {
      background-color: ${tokens.colorWarningHover};
      border-color: ${tokens.colorWarningHover};
      color: ${colors.white};
    }

    &:focus:not(.button--disabled) {
      background-color: ${tokens.colorWarningHover};
      border-color: ${tokens.colorWarningHover};
      color: ${colors.white};
      box-shadow: 0 0 0 3px ${tokens.colorWarningFocus};
    }

    &:active:not(.button--disabled) {
      background-color: ${tokens.colorWarning};
      border-color: ${tokens.colorWarning};
      color: ${colors.white};
    }
  }

  &.button--danger {
    background-color: ${tokens.colorDanger};
    border-color: ${tokens.colorDanger};
    box-shadow: ${tokens.shadowXSmall};
    color: ${colors.white};

    &:hover:not(.button--disabled) {
      background-color: ${tokens.colorDangerHover};
      border-color: ${tokens.colorDangerHover};
      color: ${colors.white};
    }

    &:focus:not(.button--disabled) {
      background-color: ${tokens.colorDangerHover};
      border-color: ${tokens.colorDangerHover};
      color: ${colors.white};
      box-shadow: 0 0 0 3px ${tokens.colorDangerFocus};
    }

    &:active:not(.button--disabled) {
      background-color: ${tokens.colorDanger};
      border-color: ${tokens.colorDanger};
      color: ${colors.white};
    }
  }

  &.button--text {
    background-color: transparent;
    border-color: transparent;
    color: ${tokens.colorPrimary};

    &:hover:not(.button--disabled) {
      background-color: transparent;
      border-color: transparent;
      color: ${tokens.colorPrimaryHover};
    }

    &:focus:not(.button--disabled) {
      background-color: transparent;
      border-color: transparent;
      color: ${tokens.colorPrimaryHover};
      box-shadow: 0 0 0 3px ${tokens.colorPrimaryFocus};
    }

    &:active:not(.button--disabled) {
      background-color: transparent;
      border-color: transparent;
      color: ${tokens.colorPrimary};
    }
  }

  &.button--link {
    background-color: transparent;
    border-color: transparent;
    color: ${tokens.colorPrimary};
    height: fit-content;
    padding: 0;
    width: auto;

    &:hover:not(.button--disabled) {
      color: ${tokens.colorPrimaryHover};
      text-decoration: underline;
    }

    &:focus:not(.button--disabled) {
      color: ${tokens.colorPrimaryHover};
      box-shadow: 0 0 0 3px ${tokens.colorPrimaryFocus};
      text-decoration: underline;
    }

    &:active:not(.button--disabled) {
      color: ${tokens.colorPrimaryActive};
      text-decoration: underline;
    }
  }

  &.button--secondary {
    font-size: ${tokens.fontSize20};
    font-weight: ${tokens.fontWeightMedium};
    line-height: ${tokens.lineHeightDense};
  }

  &.button--tertiary {
    font-size: ${tokens.fontSize16};
    font-weight: ${tokens.fontWeightSemibold};
    line-height: ${tokens.lineHeightSelf};
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
    margin-left: -${tokens.spacingXSmall};
    margin-right: ${tokens.spacingXSmall};
  }

  .button__suffix *:last-child {
    margin-left: ${tokens.spacingXSmall};
    margin-right: -${tokens.spacingXSmall};
  }
`;

export default ButtonStyled;
