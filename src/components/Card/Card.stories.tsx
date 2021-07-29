import { Story } from '@storybook/react/types-6-0';

import { Typography } from 'components/Typography';

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
  <div style={{ width: 300 }}>
    <Card {...args}>
      <Typography type="heading" level="2">
        This is a title
      </Typography>
      <p>Card content.</p>
    </Card>
  </div>
);

export const Primary = Template.bind({});
