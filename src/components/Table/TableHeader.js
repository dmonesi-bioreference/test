import React from 'react'
import PropTypes from 'prop-types'

const TableHeader = ({ children }) => <thead>{children}</thead>

TableHeader.propTypes = {
  children: PropTypes.node.isRequired,
}

TableHeader.defaultProps = {}

export default TableHeader
