import { Story } from '@storybook/react/types-6-0';

import Grid, { GridProps } from './Grid';

export default {
  component: Grid,
  title: 'Components/Grid',
  parameters: {
    componentSubtitle:
      'A basic, extensible grid component to child components with.',
  },
};

const Template: Story<GridProps> = (args) => (
  <Grid {...args}>
    <div>Item one</div>
    <div>Item two</div>
    <div>Item three</div>
    <div>Item four</div>
  </Grid>
);

export const Primary = Template.bind({});

Primary.args = {
  spacing: 'large',
};
