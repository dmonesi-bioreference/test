import React from 'react';
import PropTypes from 'prop-types';

const TableCell = ({
  children,
  header,
  scope,
}) => {
  const bemClass = 'c-table__column';

  if (header) {
    return (<th className={bemClass} scope={scope}>{children}</th>);
  }
  return (<td className={bemClass}>{children}</td>);
};

TableCell.propTypes = {
  children: PropTypes.node.isRequired,
  header: PropTypes.bool,
  scope: PropTypes.oneOf(['row', 'col']),
};

TableCell.defaultProps = {
  header: false,
  scope: null,
};

export default TableCell;
