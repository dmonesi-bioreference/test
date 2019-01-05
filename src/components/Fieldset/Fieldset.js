import React from 'react';
import PropTypes from 'prop-types';
import Message from '../Message';

const Fieldset = ({
  children, disabled, invalid, invalidMessage, label, required,
}) => {
  const invalidClass = invalid ? '--has-errors' : '';
  const bemClass = `o-input${invalidClass}`;

  return (
    <fieldset className={bemClass} disabled={disabled}>
      <legend>
        {label} {required && <span>*</span>}
      </legend>
      {children}
      {invalid && <Message icon="error" text={invalidMessage} type="error" />}
    </fieldset>
  );
};

Fieldset.propTypes = {
  children: PropTypes.node.isRequired,
  disabled: PropTypes.bool,
  invalid: PropTypes.bool,
  invalidMessage: PropTypes.string,
  label: PropTypes.string.isRequired,
  required: PropTypes.bool,
};

Fieldset.defaultProps = {
  disabled: false,
  invalid: false,
  invalidMessage: null,
  required: false,
};

export default Fieldset;
