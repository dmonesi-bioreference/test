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
  onFocus,
  placeholder,
  readonly,
  value,
}) => {
  const invalidClass = invalid ? '--has-errors' : '';
  const hideLabelClass = hideLabel ? 'o-input--hidden-label' : '';
  const bemClass = `o-input${invalidClass} ${hideLabelClass}`;

  return (
    <label className={bemClass}>
      <span>{label}</span>
      <textarea
        disabled={disabled}
        name={name}
        onBlur={onBlur}
        onFocus={onFocus}
        placeholder={placeholder}
        readOnly={readonly}
        value={value}
      />
      {invalid && <Message icon="error" text={invalidMessage} type="error" />}
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
  onFocus: PropTypes.func,
  placeholder: PropTypes.string,
  readonly: PropTypes.bool,
  value: PropTypes.string,
};

InputTextArea.defaultProps = {
  disabled: false,
  hideLabel: false,
  invalid: false,
  invalidMessage: null,
  onBlur: null,
  onFocus: null,
  placeholder: null,
  readonly: false,
  value: undefined,
};

export default InputTextArea;
