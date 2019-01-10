import React from 'react';
import PropTypes from 'prop-types';
import TableRowStyled from './TableRow.styles';

const TableRow = ({ children }) => {
  return <TableRowStyled>{children}</TableRowStyled>;
};

TableRow.propTypes = {
  children: PropTypes.node.isRequired,
};

TableRow.defaultProps = {};

export default TableRow;
