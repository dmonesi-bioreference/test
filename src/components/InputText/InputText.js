import React from 'react'
import PropTypes from 'prop-types'
import Message from '../Message'
import { iconArray } from '../Icon'

const InputText = ({
  autoComplete,
  disabled,
  hideLabel,
  icon,
  invalid,
  invalidMessage,
  label,
  labelStyle,
  maxLength,
  name,
  onBlur,
  onChange,
  onFocus,
  onKeyUp,
  orientation,
  placeholder,
  readonly,
  required,
  type,
  value,
}) => {
  const invalidClass = invalid ? '--has-errors' : ''
  const hideLabelClass = hideLabel ? 'o-input--hidden-label' : ''
  const bemClass = `o-input${invalidClass} ${hideLabelClass}`

  return (
    <label className={bemClass} data-orientation={orientation} data-style={labelStyle}>
      <span>{label}</span>
      <input
        autoComplete={autoComplete ? 'on' : 'off'}
        aria-invalid={invalid}
        data-icon={icon}
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
  )
}

InputText.propTypes = {
  autoComplete: PropTypes.bool,
  disabled: PropTypes.bool,
  hideLabel: PropTypes.bool,
  icon: PropTypes.oneOf(iconArray),
  invalid: PropTypes.bool,
  invalidMessage: PropTypes.string,
  label: PropTypes.string.isRequired,
  labelStyle: PropTypes.oneOf(['normal', 'emphasized']),
  maxLength: PropTypes.number,
  name: PropTypes.string.isRequired,
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
  onKeyUp: PropTypes.func,
  orientation: PropTypes.oneOf(['vertical', 'horizontal']),
  placeholder: PropTypes.string,
  readonly: PropTypes.bool,
  required: PropTypes.bool,
  type: PropTypes.oneOf(['email', 'number', 'password', 'search', 'tel', 'url', 'text', 'date'])
    .isRequired,
  value: PropTypes.string,
}

InputText.defaultProps = {
  autoComplete: true,
  disabled: false,
  hideLabel: false,
  icon: null,
  invalid: false,
  invalidMessage: null,
  labelStyle: 'normal',
  maxLength: undefined,
  onBlur: null,
  onChange: null,
  onFocus: null,
  onKeyUp: null,
  orientation: 'vertical',
  placeholder: null,
  readonly: false,
  required: false,
  value: undefined,
}

export default InputText
