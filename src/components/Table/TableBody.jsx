import React from 'react';
import PropTypes from 'prop-types';

const TableBody = ({
  children,
}) => {
  return (
    <tbody>
      {children}
    </tbody>
  );
};

TableBody.propTypes = {
  children: PropTypes.node.isRequired,
};

TableBody.defaultProps = {
};

export default TableBody;
