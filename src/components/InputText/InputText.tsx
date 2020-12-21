import React, { FC } from 'react';
import { HeroiconName } from '../Icon/heroicon';
import { InputTextBaseProps } from '../Input/props';
import Message from '../Message';

interface InputTextProps extends InputTextBaseProps {
  autoComplete?: boolean;
  icon?: HeroiconName;
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

const InputText: FC<InputTextProps> = ({
  autoComplete = true,
  disabled,
  hideLabel,
  icon,
  invalid,
  invalidMessage,
  label,
  labelStyle = 'normal',
  maxLength,
  name,
  onBlur,
  onChange,
  onFocus,
  onKeyUp,
  orientation = 'vertical',
  placeholder,
  readonly,
  required,
  type,
  value,
}) => {
  const invalidClass = invalid ? '--has-errors' : '';
  const hideLabelClass = hideLabel ? 'o-input--hidden-label' : '';
  const bemClass = `o-input${invalidClass} ${hideLabelClass}`;

  return (
    <label
      className={bemClass}
      data-orientation={orientation}
      data-style={labelStyle}
    >
      <span>{label}</span>
      <input
        autoComplete={autoComplete ? 'on' : 'off'}
        aria-invalid={invalid}
        data-icon={icon}
        disabled={disabled}
        name={name}
        onBlur={(e) => {
          if (onChange) {
            e.currentTarget.value = e.currentTarget.value.trim();
            onChange(e);
          }

          if (onBlur) {
            onBlur(e);
          }
        }}
        onChange={onChange}
        onFocus={onFocus}
        onKeyUp={onKeyUp}
        placeholder={placeholder}
        readOnly={readonly}
        required={required}
        type={type}
        value={value}
        maxLength={maxLength}
      />
      {invalid && invalidMessage && (
        <Message icon="exclamation-outline" type="error">
          {invalidMessage}
        </Message>
      )}
    </label>
  );
};

export default InputText;
