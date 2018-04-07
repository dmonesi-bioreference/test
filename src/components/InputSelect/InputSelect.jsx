import React from 'react';
import PropTypes from 'prop-types';
import Message from '../../components/Message';

const Select = ({
  disabled,
  hideLabel,
  invalid,
  invalidMessage,
  label,
  name,
  options,
  readonly,
}) => {
  const invalidClass = invalid ? '--has-errors' : '';
  const hideLabelClass = hideLabel ? 'o-input--hidden-label' : '';
  const bemClass = `o-input${invalidClass} ${hideLabelClass}`;

  return (
    <label className={bemClass}>
      <span>{label}</span>
      <select
        disabled={disabled}
        name={name}
        readOnly={readonly}
      >
        {
          options.map(option => (
            <option key={option.value.toString()} value={option.value}>
              {option.name}
            </option>))
        }
      </select>
      {invalid && <Message icon="error" text={invalidMessage} type="error" />}
    </label>
  );
};

Select.propTypes = {
  disabled: PropTypes.bool,
  hideLabel: PropTypes.bool,
  invalid: PropTypes.bool,
  invalidMessage: PropTypes.string,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
  }).isRequired).isRequired,
  readonly: PropTypes.bool,
};

Select.defaultProps = {
  disabled: false,
  hideLabel: false,
  invalid: false,
  invalidMessage: null,
  readonly: false,
};

export default Select;
