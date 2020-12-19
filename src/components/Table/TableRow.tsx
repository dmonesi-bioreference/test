import React, { FC } from 'react';
import TableRowStyled from './TableRow.styles';

const TableRow: FC = ({ children }) => <TableRowStyled>{children}</TableRowStyled>;

export default TableRow;
