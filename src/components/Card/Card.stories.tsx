import { Story } from '@storybook/react/types-6-0';

import { Shell } from 'app/components/Shell';
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
  <Shell>
    <div style={{ width: 300 }}>
      <Card {...args}></Card>
    </div>
  </Shell>
);

export const Primary = Template.bind({});

Primary.args = {
  children: (
    <div>
      <Typography type="heading" level="2">
        This is a title
      </Typography>
      <p>Card content.</p>
    </div>
  ),
};

export const Loading = Template.bind({});

Loading.args = {
  loading: true,
};

export const Transparent = Template.bind({});

Transparent.args = {
  transparent: true,
  children: (
    <div>
      <Typography type="heading" level="2">
        This is a title
      </Typography>
      <p>Card content.</p>
    </div>
  ),
};
