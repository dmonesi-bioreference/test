import clsx from 'clsx';
import React, { FC } from 'react';
import { Message } from '../..';
import FormControlStyled from './FormControl.styles';

export type LabelPosition =
  | 'hidden'
  | 'top'
  | 'right'
  | 'right-apart'
  | 'bottom'
  | 'left'
  | 'left-apart';

export interface FormControlProps {
  className?: string;
  inputId: string;
  invalid?: boolean;
  invalidMessage?: string;
  size: 'small' | 'medium' | 'large';
  labelId: string;
  label: string;
  labelPosition?: LabelPosition;
  helpTextId?: string;
  helpText?: string;
}

const defaultProps: Partial<FormControlProps> = {
  labelPosition: 'top',
};

const FormControl: FC<FormControlProps> = (props) => {
  return (
    <FormControlStyled
      className={clsx(
        {
          'form-control': true,

          // Sizes
          'form-control--small': props.size === 'small',
          'form-control--medium': props.size === 'medium',
          'form-control--large': props.size === 'large',

          // Positioning
          'form-control--label-hidden': props.labelPosition === 'hidden',
          'form-control--top': props.labelPosition === 'top',
          'form-control--right': props.labelPosition === 'right',
          'form-control--right form-control--apart':
            props.labelPosition === 'right-apart',
          'form-control--bottom': props.labelPosition === 'bottom',
          'form-control--left': props.labelPosition === 'left',
          'form-control--left form-control--apart':
            props.labelPosition === 'left-apart',
        },
        props.className
      )}
    >
      <label
        className="form-control__label"
        id={props.labelId}
        htmlFor={props.inputId}
      >
        {props.label}
      </label>

      <div className="form-control__input">{props.children}</div>

      {props.helpText && (
        <div
          id={props.helpTextId}
          className="form-control__help-text"
          aria-hidden={props.helpText ? false : true}
        >
          {props.helpText}
        </div>
      )}

      {props.invalid && props.invalidMessage && (
        <div className="form-control__invalid-message">
          <Message type="danger">{props.invalidMessage}</Message>
        </div>
      )}
    </FormControlStyled>
  );
};

FormControl.defaultProps = defaultProps;

export default FormControl;
