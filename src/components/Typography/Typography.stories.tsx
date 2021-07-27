import { Story } from '@storybook/react/types-6-0';

import Typography from './Typography';

export default {
  component: Typography,
  title: 'Components/Typography',
  parameters: {
    componentSubtitle:
      'Typography is used to convey hierarchy of text information.',
  },
};

export const Headings: Story = () => (
  <div>
    <Typography type="heading" level="1">
      This is a primary heading
    </Typography>
    <Typography type="heading" level="2">
      This is a secondary heading
    </Typography>
    <Typography type="heading" level="3">
      This is a tertiary heading
    </Typography>
    <Typography type="heading" level="4">
      This is a quaternary heading
    </Typography>
    <Typography type="heading" level="5">
      This is a quinary heading
    </Typography>
    <Typography type="heading" level="6">
      This is a senary heading
    </Typography>
  </div>
);

export const Body: Story = () => (
  <Typography type="body">This is a body</Typography>
);

export const Category: Story = () => (
  <Typography type="category">This is a category</Typography>
);
