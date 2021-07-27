interface TableCellProps {
  header?: boolean;
  scope?: 'row' | 'col';
}

const TableCell: React.FC<TableCellProps> = (props) => {
  if (props.header) {
    return <th scope={props.scope}>{props.children}</th>;
  }
  return <td>{props.children}</td>;
};

export default TableCell;
