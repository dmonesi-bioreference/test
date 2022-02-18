import { Story } from '@storybook/react/types-6-0';

import { Shell } from 'app';

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
  <Shell>
    <PageHeader {...args}>Page Title</PageHeader>
  </Shell>
);

export const Primary = Template.bind({});

Primary.args = {
  label: 'Optional label',
  description: 'And an optional description.',
  hasReturnLink: true,
  theme: 'resourcesTheme',
};
