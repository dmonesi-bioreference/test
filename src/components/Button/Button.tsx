import React, { FC } from 'react'
import Icon from '../Icon'
import { IconName } from '../Icon/Icon'
import ButtonStyled from './Button.styles'

export interface ButtonProps {
  /** Override the HTML element rendered by this component. */
  as?: 'a' | 'div' | 'span' | 'button'
  disabled?: boolean
  kind?: 'primary' | 'secondary' | 'black' | 'danger' | 'text' | 'text-danger'
  /** Passing `href` will overide the `as` prop, rendering this button as an `a` element. */
  href?: string
  hidden?: boolean
  icon?: IconName
  iconRotation?: number
  id?: string
  name?: string
  onClick?: () => void
  size?: 'small' | 'medium' | 'large'
  type?: 'button' | 'submit'
}

const Button: FC<ButtonProps> = ({
  as = 'button',
  children,
  disabled,
  hidden,
  href,
  icon,
  iconRotation = 0,
  id,
  kind = 'primary',
  name,
  onClick,
  size = 'large',
  type = 'button',
}) => {
  const element = href ? 'a' : as
  return (
    <ButtonStyled
      disabled={disabled}
      onClick={onClick}
      type={type}
      data-size={size}
      data-kind={kind}
      hidden={hidden}
      href={href}
      name={name}
      as={element}
      id={id}
    >
      {icon && <Icon name={icon} rotate={iconRotation} />}
      <div className="children">{children}</div>
    </ButtonStyled>
  )
}

export default Button
