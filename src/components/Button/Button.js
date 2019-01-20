import React from 'react';
import PropTypes from 'prop-types';
import Icon, { iconArray } from '../Icon';
import ButtonStyled from './Button.styles';

const Button = ({
  children, disabled, icon, onClick, size, type,
}) => {
  return (
    <ButtonStyled
      disabled={disabled}
      onClick={(e) => {
        e.preventDefault();
        onClick();
      }}
      data-size={size}
      data-type={type}
    >
      {icon && <Icon name={icon} />}
      {children}
    </ButtonStyled>
  );
};

Button.propTypes = {
  children: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  icon: PropTypes.oneOf(iconArray),
  onClick: PropTypes.func,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  type: PropTypes.oneOf(['primary', 'secondary', 'outline', 'black', 'danger', 'text']),
};

Button.defaultProps = {
  disabled: false,
  icon: null,
  onClick: null,
  size: 'large',
  type: 'primary',
};

export default Button;
