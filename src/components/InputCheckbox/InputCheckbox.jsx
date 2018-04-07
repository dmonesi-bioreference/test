import React from 'react';
import PropTypes from 'prop-types';
import Message from '../../components/Message';

const InputCheckbox = ({
  checked,
  disabled,
  invalid,
  invalidMessage,
  label,
  name,
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
        readOnly={readonly}
        type="checkbox"
      />
      {label}
      {invalid && <Message icon="error" text={invalidMessage} type="error" />}
    </label>
  );
};

InputCheckbox.propTypes = {
  checked: PropTypes.bool,
  disabled: PropTypes.bool,
  invalid: PropTypes.bool,
  invalidMessage: PropTypes.string,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  readonly: PropTypes.bool,
};

InputCheckbox.defaultProps = {
  checked: false,
  disabled: false,
  invalid: false,
  invalidMessage: null,
  readonly: false,
};

export default InputCheckbox;
