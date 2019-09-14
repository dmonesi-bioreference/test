import React from 'react'
import PropTypes from 'prop-types'
import Message from '../Message'

const InputTextArea = ({
  disabled,
  hideLabel,
  invalid,
  invalidMessage,
  label,
  labelStyle,
  name,
  onBlur,
  onChange,
  onFocus,
  onKeyUp,
  orientation,
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
      {invalid && (
        <Message icon="exclamation-outline" type="error">
          {invalidMessage}
        </Message>
      )}
    </label>
  )
}

InputTextArea.propTypes = {
  disabled: PropTypes.bool,
  hideLabel: PropTypes.bool,
  invalid: PropTypes.bool,
  invalidMessage: PropTypes.string,
  label: PropTypes.string.isRequired,
  labelStyle: PropTypes.oneOf(['normal', 'emphasized']),
  name: PropTypes.string.isRequired,
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
  onKeyUp: PropTypes.func,
  orientation: PropTypes.oneOf(['vertical', 'horizontal']),
  placeholder: PropTypes.string,
  readonly: PropTypes.bool,
  required: PropTypes.bool,
  rows: PropTypes.number,
  value: PropTypes.string,
}

InputTextArea.defaultProps = {
  disabled: false,
  hideLabel: false,
  invalid: false,
  invalidMessage: null,
  labelStyle: 'normal',
  onBlur: null,
  onChange: null,
  onFocus: null,
  onKeyUp: null,
  orientation: 'vertical',
  placeholder: null,
  readonly: false,
  required: false,
  rows: undefined,
  value: undefined,
}

export default InputTextArea
