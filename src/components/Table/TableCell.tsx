import React, { FC } from 'react';

interface TableCellProps {
  header?: boolean;
  scope?: 'row' | 'col';
}

const TableCell: FC<TableCellProps> = ({ children, header, scope }) => {
  const bemClass = 'c-table__column';

  if (header) {
    return (
      <th className={bemClass} scope={scope}>
        {children}
      </th>
    );
  }
  return <td className={bemClass}>{children}</td>;
};

export default TableCell;
