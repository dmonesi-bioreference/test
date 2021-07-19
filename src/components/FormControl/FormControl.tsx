import clsx from 'clsx';
import { FC } from 'react';
import Message from '../Message/Message';
import FormControlStyled from './FormControl.styles';
import { LabelPosition } from './props';

export interface FormControlProps {
  /** Optional class to add to the form control. */
  className?: string;
  /** Set to true if the input is disabled. */
  disabled?: boolean;
  /** ID of the input. */
  inputId: string;
  /** Set to true to render the input in an invalid state. */
  invalid?: boolean;
  /** Message to show if the input is invalid. */
  invalidMessage?: string;
  /** Set to true for radio or checkbox elements to change the DOM structure and positioning. */
  booleanInput?: boolean;
  /** The size of the input. */
  size: 'small' | 'medium' | 'large';
  /** The ID of the label element. */
  labelId: string;
  /** The label to accompany the input. Required for accessibility even if labelPosition is hidden.  */
  label: string;
  /** The position of the label relative to the control. */
  labelPosition?: LabelPosition;
  /** The ID of the help text element. */
  helpTextId?: string;
  /** Optional help text to display with the input. */
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

          // Modifiers
          'form-control--boolean': props.booleanInput,
          'form-control--disabled': props.disabled,

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
        {props.booleanInput && (
          <div className="form-control__input">{props.children}</div>
        )}

        {props.label}
      </label>

      {!props.booleanInput && (
        <div className="form-control__input">{props.children}</div>
      )}

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
