import { Story } from '@storybook/react/types-6-0';

import { Typography } from 'components/Typography';

import PageLayout from './PageLayout';

export default {
  component: PageLayout,
  title: 'Components/PageLayout',
  parameters: {
    componentSubtitle: 'Defines the layout of every page.',
  },
};

const Template: Story = (args) => (
  <div style={{ width: 375 }}>
    <PageLayout kind="primary" {...args}>
      <Typography type="heading" level="1">
        This is a primary heading
      </Typography>
    </PageLayout>
  </div>
);

export const Primary = Template.bind({});

Primary.args = {};
