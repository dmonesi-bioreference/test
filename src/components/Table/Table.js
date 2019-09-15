import React from 'react'
import PropTypes from 'prop-types'
import TableStyled from './Table.styles'

const Table = ({ caption, children }) => {
  return (
    <TableStyled>
      {!!caption && <caption>{caption}</caption>}
      {children}
    </TableStyled>
  )
}

Table.propTypes = {
  caption: PropTypes.string,
  children: PropTypes.node.isRequired,
}

Table.defaultProps = {
  caption: '',
}

export default Table
