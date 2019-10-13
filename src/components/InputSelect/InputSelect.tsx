import React, { FC } from 'react'
import { InputBaseProps } from '../Input/props'
import Message from '../Message'

interface SelectProps extends InputBaseProps {
  hideLabel?: boolean
  labelStyle?: 'normal' | 'emphasized'
  options: Array<{ name: string; value: string }>
  orientation?: 'vertical' | 'horizontal'
  placeholder?: boolean
  placeholderText?: string
  value?: string
}

const Select: FC<SelectProps> = ({
  disabled,
  hideLabel,
  invalid,
  invalidMessage,
  label,
  labelStyle = 'normal',
  name,
  onChange,
  options,
  orientation = 'vertical',
  placeholder,
  placeholderText = 'Select...',
  required,
  value,
}) => {
  const invalidClass = invalid ? '--has-errors' : ''
  const hideLabelClass = hideLabel ? 'o-input--hidden-label' : ''
  const bemClass = `o-input${invalidClass} ${hideLabelClass}`

  return (
    <label className={bemClass} data-orientation={orientation} data-style={labelStyle}>
      <span>{label}</span>
      <select
        aria-invalid={invalid}
        disabled={disabled}
        name={name}
        onChange={onChange}
        required={required}
        value={value}
        className={!value ? 'placeholder' : ''}
      >
        {placeholder && (
          <option key="none" value="">
            {placeholderText}
          </option>
        )}
        {options.map(option => (
          <option key={option.value.toString()} value={option.value}>
            {option.name}
          </option>
        ))}
      </select>
      {invalid && invalidMessage && (
        <Message icon="exclamation-solid" type="error">
          {invalidMessage}
        </Message>
      )}
    </label>
  )
}

export default Select
