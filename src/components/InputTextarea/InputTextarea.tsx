import React, { FC } from 'react'
import { InputTextBaseProps } from '../Input/props'
import Message from '../Message'

interface InputTextAreaProps extends InputTextBaseProps {
  rows?: number
}

const InputTextArea: FC<InputTextAreaProps> = ({
  disabled,
  hideLabel,
  invalid,
  invalidMessage,
  label,
  labelStyle = 'normal',
  name,
  onBlur,
  onChange,
  onFocus,
  onKeyUp,
  orientation = 'vertical',
  placeholder,
  readonly,
  required,
  value,
  rows,
}) => {
  const invalidClass = invalid ? '--has-errors' : ''
  const hideLabelClass = hideLabel ? 'o-input--hidden-label' : ''
  const bemClass = `o-input${invalidClass} ${hideLabelClass}`

  return (
    <label
      className={bemClass}
      data-orientation={orientation}
      data-style={labelStyle}
      data-input-type="textarea"
    >
      <span>{label}</span>
      <textarea
        aria-invalid={invalid}
        disabled={disabled}
        name={name}
        onBlur={e => {
          if (onChange) {
            e.currentTarget.value = e.currentTarget.value.trim()
            onChange(e)
          }

          if (onBlur) {
            onBlur(e)
          }
        }}
        onChange={onChange}
        onFocus={onFocus}
        onKeyUp={onKeyUp}
        placeholder={placeholder}
        readOnly={readonly}
        required={required}
        value={value}
        rows={rows}
      />
      {invalid && invalidMessage && (
        <Message icon="exclamation-outline" type="error">
          {invalidMessage}
        </Message>
      )}
    </label>
  )
}

export default InputTextArea
