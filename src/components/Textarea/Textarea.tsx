import clsx from 'clsx';
import { useState } from 'react';

import { InputTextBaseProps } from '../FormControl/props';

import TextareaStyled from './Textarea.styles';

export interface TextareaProps extends InputTextBaseProps {
  /** The initial number of rows for the textarea. */
  rows?: number;
}

let idCount = 0;

const defaultProps: Partial<TextareaProps> = {
  rows: 4,
  size: 'medium',
};

const Textarea: React.FC<TextareaProps> = (props) => {
  const [id] = useState(++idCount);
  const inputId = `textarea-${id}`;
  const labelId = `textarea-label-${id}`;
  const helpTextId = `textarea-help-text-${id}`;
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
    <TextareaStyled
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
          textarea: true,
          'textarea--small': props.size === 'small',
          'textarea--medium': props.size === 'medium',
          'textarea--large': props.size === 'large',
          'textarea--disabled': props.disabled,
          'textarea--focused': isFocused,
          'textarea--invalid': props.invalid,
        })}
      >
        <textarea
          id={inputId}
          className="textarea__control"
          name={props.name}
          placeholder={props.placeholder}
          disabled={props.disabled}
          readOnly={props.readonly}
          rows={props.rows}
          minLength={props.minLength}
          maxLength={props.maxLength}
          value={props.value}
          autoCapitalize={props.autocapitalize}
          autoComplete={props.autocomplete}
          autoCorrect={props.autocorrect}
          spellCheck={props.spellcheck}
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
        ></textarea>
      </div>
    </TextareaStyled>
  );
};

Textarea.defaultProps = defaultProps;

export default Textarea;
