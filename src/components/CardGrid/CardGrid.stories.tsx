import { Story } from '@storybook/react/types-6-0';
import React from 'react';
import CardGrid from './CardGrid';
import Card from '../Card/Card';
import { CardGridProps } from './CardGrid';

export default {
  component: CardGrid,
  title: 'Components/CardGrid',
};

const Template: Story<CardGridProps> = (args) => (
  <CardGrid {...args}>
    <Card title="Card 1">Card one content.</Card>
    <Card title="Card 2">Card two content.</Card>
    <Card title="Card 3">Card three content.</Card>
    <Card title="Card 4">Card four content.</Card>
  </CardGrid>
);

export const withTwoColumns = Template.bind({});

withTwoColumns.args = {
  columns: 2,
};
