import React from 'react';
import { storiesOf } from '@storybook/react';
import Table, { TableBody, TableCell, TableHeader, TableRow } from '.';

storiesOf('Components/Table', module).add('default', () => (
  <Table caption="Table Data">
    <TableHeader>
      <TableRow>
        <TableCell header scope="col">
          Name
        </TableCell>
        <TableCell header scope="col">
          Email
        </TableCell>
      </TableRow>
    </TableHeader>
    <TableBody>
      <TableRow>
        <TableCell header scope="row">
          John Appleseed
        </TableCell>
        <TableCell>jappleseed@example.com</TableCell>
      </TableRow>
    </TableBody>
  </Table>
));
