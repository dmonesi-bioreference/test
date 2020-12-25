import { Story } from '@storybook/react/types-6-0';
import React from 'react';
import Table, { TableBody, TableCell, TableHeader, TableRow } from '.';
import { TableProps } from './Table';

export default {
  component: Table,
  title: 'Components/Table',
};

const Template: Story<TableProps> = (args) => (
  <Table {...args}>
    <TableHeader>
      <TableRow>
        <TableCell header={true} scope="col">
          Name
        </TableCell>
        <TableCell header={true} scope="col">
          Email
        </TableCell>
        <TableCell header={true} scope="col">
          Role
        </TableCell>
      </TableRow>
    </TableHeader>
    <TableBody>
      <TableRow>
        <TableCell header={true} scope="row">
          John Appleseed
        </TableCell>
        <TableCell>jappleseed@example.com</TableCell>
        <TableCell>Admin</TableCell>
      </TableRow>
      <TableRow>
        <TableCell header={true} scope="row">
          Jane Cooper
        </TableCell>
        <TableCell>jcooper@example.com</TableCell>
        <TableCell>Owner</TableCell>
      </TableRow>
      <TableRow>
        <TableCell header={true} scope="row">
          Cody Fisher
        </TableCell>
        <TableCell>cfisher@example.com</TableCell>
        <TableCell>Member</TableCell>
      </TableRow>
      <TableRow>
        <TableCell header={true} scope="row">
          Jenny Wilson
        </TableCell>
        <TableCell>jwilson@example.com</TableCell>
        <TableCell>Member</TableCell>
      </TableRow>
    </TableBody>
  </Table>
);

export const Primary = Template.bind({});

Primary.args = {
  striped: false,
  rowHover: false,
  stickyHeader: false,
};
