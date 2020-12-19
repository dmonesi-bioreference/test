import React, { FC } from 'react';
import { InputBaseProps } from '../Input/props';
import Message from '../Message';

interface InputCheckboxProps extends InputBaseProps {
  checked?: boolean;
  hideLabel?: boolean;
}

const InputCheckbox: FC<InputCheckboxProps> = ({
  checked,
  disabled,
  hideLabel,
  invalid,
  invalidMessage,
  label,
  name,
  onChange,
  readonly,
  required,
}) => {
  const invalidClass = invalid ? '--has-errors' : '';
  const hideLabelClass = hideLabel ? 'o-input--hidden-label' : '';
  const bemClass = `o-input${invalidClass} ${hideLabelClass}`;

  return (
    <label
      className={bemClass}
      data-checked={checked}
      data-input-type="checkbox"
      data-orientation="horizontal"
    >
      <input
        aria-invalid={invalid}
        checked={checked}
        disabled={disabled}
        name={name}
        onChange={onChange}
        readOnly={readonly}
        required={required}
        type="checkbox"
      />
      {label && <span>{label}</span>}
      {invalid && invalidMessage && (
        <Message icon="exclamation-outline" type="error">
          {invalidMessage}
        </Message>
      )}
    </label>
  );
};

export default InputCheckbox;
