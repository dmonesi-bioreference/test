import React from 'react';
import PropTypes from 'prop-types';

const TableFooter = ({
  children,
}) => {
  return (
    <tfooter>
      {children}
    </tfooter>
  );
};

TableFooter.propTypes = {
  children: PropTypes.node.isRequired,
};

TableFooter.defaultProps = {
};

export default TableFooter;
