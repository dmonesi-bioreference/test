import React, { FC } from 'react'
import TableStyled from './Table.styles'

interface TableProps {
  caption?: string
}

const Table: FC<TableProps> = ({ caption, children }) => {
  return (
    <TableStyled>
      {!!caption && <caption>{caption}</caption>}
      {children}
    </TableStyled>
  )
}

export default Table
