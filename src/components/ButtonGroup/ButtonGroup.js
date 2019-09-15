import React from 'react'
import PropTypes from 'prop-types'
import ButtonGroupStyled from './ButtonGroup.styles'

const ButtonGroup = ({ children }) => <ButtonGroupStyled>{children}</ButtonGroupStyled>

ButtonGroup.propTypes = {
  children: PropTypes.node,
}

ButtonGroup.defaultProps = {
  children: null,
}

export default ButtonGroup
