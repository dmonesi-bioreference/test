import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import Icon from '../Icon';
import { IconName } from '../Icon/Icon';
import ButtonStyled from './Button.styles';

export type ButtonKind =
  | 'primary'
  | 'secondary'
  | 'black'
  | 'danger'
  | 'text'
  | 'text-danger'
  | 'text-tertiary'
  | 'text-gray'
  | 'option'
  | 'option-vertical';

export interface ButtonProps {
  /** Override the HTML element rendered by this component. */
  as?: 'a' | 'div' | 'span' | 'button';
  disabled?: boolean;
  /** Passing `href` will override the `as` prop, rendering this button as an `a` element. */
  href?: string;
  hidden?: boolean;
  icon?: IconName;
  iconRotation?: number;
  iconPosition?: 'start' | 'end';
  id?: string;
  kind?: ButtonKind;
  name?: string;
  linkTo?: string | Record<string, unknown>;
  onClick?: () => void;
  /** Open link in new window/tab. Valid only in combination `href` or `linkTo` props.  */
  openNewTab?: boolean;
  size?: 'small' | 'medium' | 'large';
  type?: 'button' | 'submit';
}

const Button: FC<ButtonProps> = ({
  as = 'button',
  children,
  disabled,
  hidden,
  href,
  icon,
  iconRotation = 0,
  iconPosition = 'start',
  id,
  kind = 'primary',
  name,
  linkTo,
  onClick,
  openNewTab,
  size = 'large',
  type = 'button',
}) => {
  const determineElement = () => {
    if (href) {
      return 'a';
    }
    if (onClick) {
      return 'button';
    }
    if (linkTo) {
      return 'div';
    }
    return as;
  };

  const buttonMarkup = (
    <ButtonStyled
      as={determineElement()}
      disabled={disabled}
      onClick={onClick}
      type={type}
      data-size={size}
      data-kind={kind}
      data-icon-position={iconPosition}
      hidden={hidden}
      href={href}
      id={id}
      name={name}
      {...(determineElement() === 'a' && openNewTab && { target: '_blank' })}
    >
      {icon && <Icon name={icon} element="span" rotate={iconRotation} />}
      <span className="children">{children}</span>
    </ButtonStyled>
  );

  if (linkTo) {
    return (
      <Link to={linkTo} {...(openNewTab && { target: '_blank' })}>
        {buttonMarkup}
      </Link>
    );
  }

  return buttonMarkup;
};

export default Button;
