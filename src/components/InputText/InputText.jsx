import React from 'react';
import PropTypes from 'prop-types';
import Message from '../../components/Message';
import { iconArray } from '../../components/Icon';

const InputText = ({
  disabled,
  hideLabel,
  icon,
  invalid,
  invalidMessage,
  label,
  name,
  placeholder,
  readonly,
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
        data-icon={icon}
        disabled={disabled}
        name={name}
        placeholder={placeholder}
        readOnly={readonly}
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
  placeholder: PropTypes.string,
  readonly: PropTypes.bool,
  type: PropTypes.oneOf(['email', 'number', 'password', 'search', 'tel', 'url', 'text']).isRequired,
  value: PropTypes.string,
};

InputText.defaultProps = {
  disabled: false,
  hideLabel: false,
  icon: null,
  invalid: false,
  invalidMessage: null,
  placeholder: null,
  readonly: false,
  value: undefined,
};

export default InputText;
