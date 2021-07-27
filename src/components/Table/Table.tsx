import clsx from 'clsx';

import TableStyled from './Table.styles';

export interface TableProps {
  /** Set to true to enable zebra stripes on rows. */
  striped?: boolean;
  /** Set to true to make the header sticky. */
  stickyHeader?: boolean;
  /** Set to true to display a row background on hover. */
  rowHover?: boolean;
}

const defaultProps: TableProps = {
  striped: false,
  stickyHeader: false,
  rowHover: false,
};

const Table: React.FC<TableProps> = (props) => {
  return (
    <TableStyled
      className={clsx({
        table: true,
        'table--striped': props.striped,
        'table--row-hover': props.rowHover,
        'table--sticky-header': props.stickyHeader,
      })}
    >
      {props.children}
    </TableStyled>
  );
};

Table.defaultProps = defaultProps;

export default Table;
