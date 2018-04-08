import React from 'react';
import PropTypes from 'prop-types';
import Message from '../../components/Message';

const InputRadio = ({
  checked,
  disabled,
  invalid,
  invalidMessage,
  label,
  name,
  onChange,
  readonly,
}) => {
  const invalidClass = invalid ? '--has-errors' : '';
  const bemClass = `o-input${invalidClass}`;

  return (
    <label className={bemClass}>
      <input
        defaultChecked={checked}
        disabled={disabled}
        name={name}
        onChange={onChange}
        readOnly={readonly}
        type="radio"
      />
      {label}
      {invalid && <Message icon="error" text={invalidMessage} type="error" />}
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
};

InputRadio.defaultProps = {
  checked: false,
  disabled: false,
  invalid: false,
  invalidMessage: null,
  onChange: () => {},
  readonly: false,
};

export default InputRadio;
