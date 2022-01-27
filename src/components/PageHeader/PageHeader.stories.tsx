import { Story } from '@storybook/react/types-6-0';

import PageHeader, { PageHeaderProps } from './PageHeader';

export default {
  component: PageHeader,
  title: 'Components/PageHeader',
  parameters: {
    componentSubtitle:
      'A header for titled pages, with an optional page description.',
  },
};

const Template: Story<PageHeaderProps> = (args) => (
  <PageHeader {...args}>Page Title</PageHeader>
);

export const Primary = Template.bind({});

Primary.args = {
  belongsTo: 'primaryPage',
  description: 'And an optional description.',
};
