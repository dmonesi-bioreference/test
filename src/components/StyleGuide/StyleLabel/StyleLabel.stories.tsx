import { Story } from '@storybook/react/types-6-0';

import StyleLabel from './StyleLabel';

export default {
  component: StyleLabel,
  title: 'Storybook/StyleLabel',
  parameters: {
    componentSubtitle: 'Label for a component or token within our style guide.',
  },
};

const Template: Story = (args) => (
  <StyleLabel {...args}>This is the style description.</StyleLabel>
);

export const Primary = Template.bind({});

Primary.args = {};
