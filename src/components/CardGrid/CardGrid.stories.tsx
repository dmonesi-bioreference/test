import { Story } from '@storybook/react/types-6-0';

import { Card } from 'components/Card';

import CardGrid, { CardGridProps } from './CardGrid';

export default {
  component: CardGrid,
  title: 'Components/CardGrid',
  parameters: {
    componentSubtitle:
      'Card Grid enables a multi-column layouts of Card components.',
  },
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
