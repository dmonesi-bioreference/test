import React from 'react';
import PropTypes from 'prop-types';
import Icon, { iconArray } from '../Icon';
import ButtonStyled from './Button.styles';

const Button = ({
  disabled, icon, label, onClick, size, type,
}) => {
  return (
    <ButtonStyled disabled={disabled} onClick={onClick} data-size={size} data-type={type}>
      {icon && <Icon name={icon} />}
      {label}
    </ButtonStyled>
  );
};

Button.propTypes = {
  disabled: PropTypes.bool,
  icon: PropTypes.oneOf(iconArray),
  label: PropTypes.string.isRequired,
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
