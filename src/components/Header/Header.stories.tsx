import { Story } from '@storybook/react/types-6-0';

import { Shell } from 'app/components/Shell';

import Header from './Header';

export default {
  component: Header,
  title: 'Components/Header',
  parameters: {
    componentSubtitle: 'The Header provides navigation and branding.',
  },
};

const Template: Story = (args) => (
  <Shell>
    <div style={{ width: 375 }}>
      <Header {...args} />
    </div>
  </Shell>
);

export const Primary = Template.bind({});

Primary.args = {};

export const WithoutMenu = Template.bind({});

WithoutMenu.args = {
  withoutMenu: true,
};
