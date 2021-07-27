import clsx from 'clsx';
import { useState } from 'react';

import { InputTextBaseProps } from 'components/FormControl';

import InputStyled from './Input.styles';

export interface InputProps extends InputTextBaseProps {
  /** When used with a type of `number`, the minimum value. */
  min?: number;
  /** When used with a type of `number`, the maximum value. */
  max?: number;
  /** The pattern used for validation. */
  pattern?: string;
  /** Used to prepend an icon for similar element to the input. */
  prefix?: React.ReactNode;
  /** When used with a type of `number`, the step value. */
  step?: number;
  /** Used to append an icon for similar element to the input. */
  suffix?: React.ReactNode;
  /** The type of the input. */
  type?:
    | 'email'
    | 'number'
    | 'password'
    | 'search'
    | 'tel'
    | 'url'
    | 'text'
    | 'date';
}

let idCount = 0;

const defaultProps: Partial<InputProps> = {
  size: 'medium',
};

const Input: React.FC<InputProps> = (props) => {
  const [id] = useState(++idCount);
  const inputId = `input-${id}`;
  const labelId = `input-label-${id}`;
  const helpTextId = `input-help-text-${id}`;
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
    props.onFocus;
  };

  const handleBlur = () => {
    setIsFocused(false);
    props.onBlur;
  };

  return (
    <InputStyled
      inputId={inputId}
      label={props.label}
      labelPosition={props.labelPosition}
      labelId={labelId}
      helpTextId={helpTextId}
      helpText={props.helpText || undefined}
      invalid={props.invalid}
      invalidMessage={props.invalidMessage}
      size={props.size || 'medium'}
    >
      <div
        className={clsx({
          input: true,

          // Sizes
          'input--small': props.size === 'small',
          'input--medium': props.size === 'medium',
          'input--large': props.size === 'large',

          // States
          'input--disabled': props.disabled,
          'input--focused': isFocused,
          'input--invalid': props.invalid,
        })}
      >
        <span className="input__prefix">{props.prefix}</span>

        <input
          id={inputId}
          className="input__control"
          type={props.type}
          name={props.name}
          placeholder={props.placeholder}
          disabled={props.disabled}
          readOnly={props.readonly}
          minLength={props.minLength}
          maxLength={props.maxLength}
          min={props.min}
          max={props.max}
          step={props.step}
          value={props.value}
          autoCapitalize={props.autocapitalize}
          autoComplete={props.autocomplete}
          autoCorrect={props.autocorrect}
          spellCheck={props.spellcheck}
          pattern={props.pattern}
          required={props.required}
          inputMode={props.inputmode}
          aria-labelledby={labelId}
          aria-describedby={helpTextId}
          aria-invalid={props.invalid ? 'true' : 'false'}
          onChange={props.onChange}
          onInput={props.onInput}
          onInvalid={props.onInvalid}
          onFocus={handleFocus}
          onBlur={handleBlur}
        />

        <span className="input__suffix">{props.suffix}</span>
      </div>
    </InputStyled>
  );
};

Input.defaultProps = defaultProps;

export default Input;
