import React from 'react'
import PropTypes from 'prop-types'

const TableCell = ({ children, header, scope, width }) => {
  const bemClass = 'c-table__column'

  if (header) {
    return (
      <th className={bemClass} scope={scope} width={width}>
        {children}
      </th>
    )
  }
  return <td className={bemClass}>{children}</td>
}

TableCell.propTypes = {
  children: PropTypes.node,
  header: PropTypes.bool,
  scope: PropTypes.oneOf(['row', 'col']),
  width: PropTypes.string,
}

TableCell.defaultProps = {
  children: '',
  header: false,
  scope: null,
  width: undefined,
}

export default TableCell
