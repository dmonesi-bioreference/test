import React from 'react'
import PropTypes from 'prop-types'
import Message from '../Message'

const Select = ({
  disabled,
  hideLabel,
  invalid,
  invalidMessage,
  label,
  labelStyle,
  name,
  onChange,
  options,
  orientation,
  placeholder,
  placeholderText,
  readonly,
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
        readOnly={readonly}
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
      {invalid && (
        <Message icon="excalamation-outline" type="error">
          {invalidMessage}
        </Message>
      )}
    </label>
  )
}

Select.propTypes = {
  disabled: PropTypes.bool,
  hideLabel: PropTypes.bool,
  invalid: PropTypes.bool,
  invalidMessage: PropTypes.string,
  label: PropTypes.string.isRequired,
  labelStyle: PropTypes.oneOf(['normal', 'emphasized']),
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  orientation: PropTypes.oneOf(['vertical', 'horizontal']),
  placeholder: PropTypes.bool,
  placeholderText: PropTypes.string,
  readonly: PropTypes.bool,
  required: PropTypes.bool,
  value: PropTypes.string,
}

Select.defaultProps = {
  disabled: false,
  hideLabel: false,
  invalid: false,
  invalidMessage: null,
  labelStyle: 'normal',
  onChange: () => {},
  orientation: 'vertical',
  placeholder: true,
  placeholderText: 'Select...',
  readonly: false,
  required: false,
  value: undefined,
}

export default Select
