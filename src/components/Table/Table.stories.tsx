import React from 'react'
import Table, { TableBody, TableCell, TableHeader, TableRow } from '.'

export default {
  component: Table,
  title: 'Components/Table',
}

export const defaultStory = () => (
  <Table caption="Table Data">
    <TableHeader>
      <TableRow>
        <TableCell header={true} scope="col">
          Name
        </TableCell>
        <TableCell header={true} scope="col">
          Email
        </TableCell>
      </TableRow>
    </TableHeader>
    <TableBody>
      <TableRow>
        <TableCell header={true} scope="row">
          John Appleseed
        </TableCell>
        <TableCell>jappleseed@example.com</TableCell>
      </TableRow>
    </TableBody>
  </Table>
)
