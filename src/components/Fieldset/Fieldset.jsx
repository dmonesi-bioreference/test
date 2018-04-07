import React from 'react';
import PropTypes from 'prop-types';
import Message from '../../components/Message';

const Fieldset = ({
  children,
  invalid,
  invalidMessage,
  label,
}) => {
  const invalidClass = invalid ? '--has-errors' : '';
  const bemClass = `o-input${invalidClass}`;

  return (
    <fieldset className={bemClass}>
      <legend>{label}</legend>
      {children}
      {invalid && <Message icon="error" text={invalidMessage} type="error" />}
    </fieldset>
  );
};

Fieldset.propTypes = {
  children: PropTypes.node.isRequired,
  invalid: PropTypes.bool,
  invalidMessage: PropTypes.string,
  label: PropTypes.string.isRequired,
};

Fieldset.defaultProps = {
  invalid: false,
  invalidMessage: null,
};

export default Fieldset;
