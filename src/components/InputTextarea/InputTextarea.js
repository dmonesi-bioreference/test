import React from 'react';
import PropTypes from 'prop-types';
import Message from '../Message';

const InputTextArea = ({
  disabled,
  hideLabel,
  invalid,
  invalidMessage,
  label,
  name,
  onBlur,
  onChange,
  onFocus,
  placeholder,
  readonly,
  required,
  value,
}) => {
  const invalidClass = invalid ? '--has-errors' : '';
  const hideLabelClass = hideLabel ? 'o-input--hidden-label' : '';
  const bemClass = `o-input${invalidClass} ${hideLabelClass}`;

  return (
    <label className={bemClass}>
      <span>{label}</span>
      <textarea
        aria-invalid={invalid}
        disabled={disabled}
        name={name}
        onBlur={onBlur}
        onChange={onChange}
        onFocus={onFocus}
        placeholder={placeholder}
        readOnly={readonly}
        required={required}
        value={value}
      />
      {invalid && (
        <Message icon="error" type="error">
          {invalidMessage}
        </Message>
      )}
    </label>
  );
};

InputTextArea.propTypes = {
  disabled: PropTypes.bool,
  hideLabel: PropTypes.bool,
  invalid: PropTypes.bool,
  invalidMessage: PropTypes.string,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
  placeholder: PropTypes.string,
  readonly: PropTypes.bool,
  required: PropTypes.bool,
  value: PropTypes.string,
};

InputTextArea.defaultProps = {
  disabled: false,
  hideLabel: false,
  invalid: false,
  invalidMessage: null,
  onBlur: null,
  onChange: null,
  onFocus: null,
  placeholder: null,
  readonly: false,
  required: false,
  value: undefined,
};

export default InputTextArea;
