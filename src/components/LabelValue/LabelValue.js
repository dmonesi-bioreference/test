import React from 'react';
import PropTypes from 'prop-types';
import LabelValueStyled from './LabelValue.styles';

const LabelValue = ({
  children, label, reverse, value,
}) => {
  return (
    <LabelValueStyled data-reverse={reverse}>
      <dt>{label}</dt>
      <dd>
        {value}
        {children}
      </dd>
    </LabelValueStyled>
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
