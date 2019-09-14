import React from 'react'
import PropTypes from 'prop-types'
import Message from '../Message'

const InputCheckbox = ({
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
  const invalidClass = invalid ? '--has-errors' : ''
  const hideLabelClass = hideLabel ? 'o-input--hidden-label' : ''
  const bemClass = `o-input${invalidClass} ${hideLabelClass}`

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
      <span className="o-input-focus" />
      {label && <span>{label}</span>}
      {invalid && (
        <Message icon="exclamation-outline" type="error">
          {invalidMessage}
        </Message>
      )}
    </label>
  )
}

InputCheckbox.propTypes = {
  checked: PropTypes.bool,
  disabled: PropTypes.bool,
  hideLabel: PropTypes.bool,
  invalid: PropTypes.bool,
  invalidMessage: PropTypes.string,
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  readonly: PropTypes.bool,
  required: PropTypes.bool,
}

InputCheckbox.defaultProps = {
  checked: false,
  disabled: false,
  hideLabel: false,
  invalid: false,
  invalidMessage: null,
  label: null,
  onChange: () => {},
  readonly: false,
  required: false,
}

export default InputCheckbox
