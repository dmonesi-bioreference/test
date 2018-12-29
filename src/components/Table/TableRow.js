import React from 'react';
import PropTypes from 'prop-types';

const TableRow = ({
  children,
}) => {
  const bemClass = 'c-table__row';

  return (
    <tr className={bemClass}>{children}</tr>
  );
};

TableRow.propTypes = {
  children: PropTypes.node.isRequired,
};

TableRow.defaultProps = {
};

export default TableRow;
