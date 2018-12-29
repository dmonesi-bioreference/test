import React from 'react';
import PropTypes from 'prop-types';

const LabelValue = ({
  children, label, reverse, value,
}) => {
  const reverseClass = reverse ? '--reverse' : '';
  const bemClass = `c-label-value${reverseClass}`;

  return (
    <dl className={bemClass}>
      <dt className="c-label-value__label">{label}</dt>
      <dd className="c-label-value__value">
        {value}
        {children}
      </dd>
    </dl>
  );
};

LabelValue.propTypes = {
  children: PropTypes.node,
  label: PropTypes.string.isRequired,
  reverse: PropTypes.bool,
  value: PropTypes.string,
};

LabelValue.defaultProps = {
  children: null,
  reverse: false,
  value: null,
};

export default LabelValue;
