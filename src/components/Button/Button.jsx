import React from 'react';
import PropTypes from 'prop-types';
import Icon, { iconArray } from '../../components/Icon';

const Button = ({
  disabled,
  icon,
  label,
  size,
  type,
}) => {
  const typeClass = type ? `--${type}` : '';
  const sizeClass = size ? `c-btn--${size}` : '';
  const bemClass = `c-btn${typeClass} ${sizeClass}`;

  return (
    <button className={bemClass} disabled={disabled}>
      {icon && <Icon name={icon} />}
      {label}
    </button>
  );
};

Button.propTypes = {
  disabled: PropTypes.bool,
  icon: PropTypes.oneOf(iconArray),
  label: PropTypes.string.isRequired,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  type: PropTypes.oneOf(['primary', 'secondary', 'outline', 'black', 'danger', 'text']),
};

Button.defaultProps = {
  disabled: false,
  icon: null,
  size: 'large',
  type: 'primary',
};

export default Button;
