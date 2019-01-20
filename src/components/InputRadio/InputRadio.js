import React from 'react';
import PropTypes from 'prop-types';
import Message from '../Message';

const InputRadio = ({
  checked,
  disabled,
  invalid,
  invalidMessage,
  label,
  name,
  onChange,
  readonly,
  required,
}) => {
  const invalidClass = invalid ? '--has-errors' : '';
  const bemClass = `o-input${invalidClass}`;

  return (
    <label className={bemClass}>
      <input
        aria-invalid={invalid}
        defaultChecked={checked}
        disabled={disabled}
        name={name}
        onChange={onChange}
        readOnly={readonly}
        required={required}
        type="radio"
      />
      <span className="o-input-focus" />
      {label}
      {invalid && (
        <Message icon="error" type="error">
          {invalidMessage}
        </Message>
      )}
    </label>
  );
};

InputRadio.propTypes = {
  checked: PropTypes.bool,
  disabled: PropTypes.bool,
  invalid: PropTypes.bool,
  invalidMessage: PropTypes.string,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  readonly: PropTypes.bool,
  required: PropTypes.bool,
};

InputRadio.defaultProps = {
  checked: false,
  disabled: false,
  invalid: false,
  invalidMessage: null,
  onChange: () => {},
  readonly: false,
  required: false,
};

export default InputRadio;
