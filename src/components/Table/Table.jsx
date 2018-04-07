import React from 'react';
import PropTypes from 'prop-types';

const Table = ({
  caption,
  children,
}) => {
  const bemClass = 'c-table';

  return (
    <table className={bemClass}>
      <caption>{caption}</caption>
      {children}
    </table>
  );
};

Table.propTypes = {
  caption: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

Table.defaultProps = {
};

export default Table;
