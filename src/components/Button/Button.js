import React from 'react'
import PropTypes from 'prop-types'
import Icon, { iconArray } from '../Icon'
import ButtonStyled from './Button.styles'

const Button = ({
  as,
  children,
  disabled,
  href,
  icon,
  iconRotation,
  id,
  kind,
  name,
  onClick,
  size,
  type,
}) => {
  const element = href ? 'a' : as
  return (
    <ButtonStyled
      disabled={disabled}
      onClick={onClick}
      type={type}
      data-size={size}
      data-kind={kind}
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

Button.propTypes = {
  /** Override the HTML element rendered by this component. */
  as: PropTypes.oneOf(['a', 'div', 'span', 'button']),
  children: PropTypes.node.isRequired,
  disabled: PropTypes.bool,
  /** Passing `href` will overide the `as` prop, rendering this button as an `a` element. */
  href: PropTypes.string,
  icon: PropTypes.oneOf(iconArray),
  iconRotation: PropTypes.number,
  id: PropTypes.string,
  kind: PropTypes.oneOf(['primary', 'secondary', 'black', 'danger', 'text', 'text-danger']),
  name: PropTypes.string,
  onClick: PropTypes.func,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  type: PropTypes.oneOf(['button', 'submit']),
}

Button.defaultProps = {
  as: 'button',
  disabled: false,
  href: null,
  icon: null,
  iconRotation: 0,
  id: null,
  kind: 'primary',
  name: null,
  onClick: null,
  size: 'large',
  type: 'button',
}

export default Button
