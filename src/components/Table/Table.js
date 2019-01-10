import React from 'react';
import PropTypes from 'prop-types';
import TableStyled from './Table.styles';

const Table = ({ caption, children }) => {
  return (
    <TableStyled>
      <caption>{caption}</caption>
      {children}
    </TableStyled>
  );
};

Table.propTypes = {
  caption: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

Table.defaultProps = {};

export default Table;
