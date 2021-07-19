import { Story } from '@storybook/react/types-6-0';
import Card, { CardProps } from './Card';

export default {
  component: Card,
  title: 'Components/Card',
  parameters: {
    componentSubtitle:
      'Cards can be used to group related subjects in a container.',
  },
};

const Template: Story<CardProps> = (args) => (
  <Card {...args}>
    <p>Card content.</p>
  </Card>
);

export const Primary = Template.bind({});

Primary.args = {
  title: 'Card Title',
};

export const withoutTitle = Template.bind({});

withoutTitle.args = {};
