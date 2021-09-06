import { Story } from '@storybook/react/types-6-0';

import StyleGuideItem, { StyleGuideProps } from './StyleGuideItem';

export default {
  component: StyleGuideItem,
  title: 'Storybook/StyleGuideItem',
  parameters: {
    componentSubtitle: 'Label for a component or token within our style guide.',
  },
};

const Template: Story = (args) => (
  <StyleGuideItem {...args as StyleGuideProps } >This is the Style Guide Item</StyleGuideItem>
);

export const Primary = Template.bind({});

Primary.args = {
  label: "Label"
};
