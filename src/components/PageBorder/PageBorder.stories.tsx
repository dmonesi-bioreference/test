import { Story } from '@storybook/react/types-6-0';

import { Shell } from 'app/components/Shell';

import PageBorder, { PageBorderProps } from './PageBorder';

export default {
  component: PageBorder,
  title: 'Components/PageBorder',
  parameters: {
    componentSubtitle: 'Short description of component.',
  },
  argTypes: {
    loading: {
      control: {
        type: 'boolean',
      },
    },
  },
};

const Template: Story<PageBorderProps> = (args) => (
  <Shell>
    <PageBorder {...args} />
  </Shell>
);
export const Primary = Template.bind({});

Primary.args = {};

export const Loading = Template.bind({});

Loading.args = {
  loading: 'loading',
};
