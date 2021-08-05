import { Story } from '@storybook/react/types-6-0';

import Header from './Header';

export default {
  component: Header,
  title: 'Components/Header',
  parameters: {
    componentSubtitle: 'The Header provides navigation and branding.',
  },
};

const Template: Story = (args) => (
  <div style={{ width: 375 }}>
    <Header {...args} />
  </div>
);

export const Primary = Template.bind({});

Primary.args = {};
