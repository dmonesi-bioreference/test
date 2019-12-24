import React, { FC } from 'react'
import { InputBaseProps } from '../Input/props'
import Message from '../Message'

interface InputRadioProps extends InputBaseProps {
  checked?: boolean
}

const InputRadio: FC<InputRadioProps> = ({
  checked,
  disabled,
  invalid,
  invalidMessage,
  label,
  name,
  onChange,
  readonly,
  required,
}) => {
  const invalidClass = invalid ? '--has-errors' : ''
  const bemClass = `o-input${invalidClass}`

  return (
    <label className={bemClass} data-input-type="radio" data-orientation="horizontal">
      <input
        aria-invalid={invalid}
        checked={checked}
        disabled={disabled}
        name={name}
        onChange={onChange}
        readOnly={readonly}
        required={required}
        type="radio"
      />
      <span>{label}</span>
      {invalid && invalidMessage && (
        <Message icon="exclamation-solid" type="error">
          {invalidMessage}
        </Message>
      )}
    </label>
  )
}

export default InputRadio
