import React from 'react'
import PropTypes from 'prop-types'
import MessageStyled from './Message.styles'
import Icon, { iconArray } from '../Icon'

const Message = ({ children, icon, type }) => (
  <MessageStyled data-type={type}>
    <span>
      {icon && <Icon name={icon} />}
      {children}
    </span>
  </MessageStyled>
)

Message.propTypes = {
  children: PropTypes.string.isRequired,
  icon: PropTypes.oneOf(iconArray),
  type: PropTypes.oneOf(['info', 'error', 'success', 'warning']),
}

Message.defaultProps = {
  icon: undefined,
  type: 'info',
}

export default Message
