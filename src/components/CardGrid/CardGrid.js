import React from 'react'
import PropTypes from 'prop-types'
import CardGridStyled from './CardGrid.styles'

const CardGrid = ({ children, columns }) => (
  <CardGridStyled data-columns={columns}>{children}</CardGridStyled>
)

CardGrid.propTypes = {
  children: PropTypes.node,
  columns: PropTypes.oneOf([1, 2, 3]),
}

CardGrid.defaultProps = {
  children: null,
  columns: 1,
}

export default CardGrid
