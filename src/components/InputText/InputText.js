import React from 'react';
import PropTypes from 'prop-types';
import Message from '../Message';
import { iconArray } from '../Icon';

const InputText = ({
  disabled,
  hideLabel,
  icon,
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
  type,
  value,
}) => {
  const invalidClass = invalid ? '--has-errors' : '';
  const hideLabelClass = hideLabel ? 'o-input--hidden-label' : '';
  const bemClass = `o-input${invalidClass} ${hideLabelClass}`;

  return (
    <label className={bemClass}>
      <span>{label}</span>
      <input
        aria-invalid={invalid}
        data-icon={icon}
        disabled={disabled}
        name={name}
        onBlur={onBlur}
        onChange={onChange}
        onFocus={onFocus}
        placeholder={placeholder}
        readOnly={readonly}
        required={required}
        type={type}
        value={value}
      />
      {invalid && <Message icon="error" text={invalidMessage} type="error" />}
    </label>
  );
};

InputText.propTypes = {
  disabled: PropTypes.bool,
  hideLabel: PropTypes.bool,
  icon: PropTypes.oneOf(iconArray),
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
  type: PropTypes.oneOf(['email', 'number', 'password', 'search', 'tel', 'url', 'text']).isRequired,
  value: PropTypes.string,
};

InputText.defaultProps = {
  disabled: false,
  hideLabel: false,
  icon: null,
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

export default InputText;
