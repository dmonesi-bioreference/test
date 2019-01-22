import React from 'react';
import PropTypes from 'prop-types';
import Icon, { iconArray } from '../Icon';
import ButtonStyled from './Button.styles';

const Button = ({
  children, disabled, icon, onClick, size, kind,
}) => {
  return (
    <ButtonStyled
      disabled={disabled}
      onClick={(e) => {
        e.preventDefault();
        onClick();
      }}
      data-size={size}
      data-kind={kind}
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
  kind: PropTypes.oneOf(['primary', 'secondary', 'outline', 'black', 'danger', 'text']),
  onClick: PropTypes.func,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
};

Button.defaultProps = {
  disabled: false,
  icon: null,
  kind: 'primary',
  onClick: null,
  size: 'large',
};

export default Button;
