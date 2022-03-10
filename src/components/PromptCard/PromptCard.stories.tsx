import { Story } from '@storybook/react/types-6-0';

import PromptCard, { PromptCardProps } from './PromptCard';

export default {
  component: PromptCard,
  title: 'Components/PromptCard',
  parameters: {
    componentSubtitle: 'A card for displaying prompts to the user',
  },
};

const bodyText =
  'Have you found any great resources lately for community support? Share any helpful tips or links with us to give back to other families like yours.';
const Template: Story<PromptCardProps> = (args) => (
  <PromptCard {...args}>{bodyText}</PromptCard>
);

export const Primary = Template.bind({});

Primary.args = {
  prompt: 'Help other families',
  heading: 'Contribute community resources',
};
