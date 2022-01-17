import { Story } from '@storybook/react/types-6-0';

import FaqCard, { FaqCardProps } from './FaqCard';

export default {
  component: FaqCard,
  title: 'Components/FaqCard',
  parameters: {
    componentSubtitle:
      'Lists frequently asked questions, with links to answers',
  },
};

const Template: Story<FaqCardProps> = (args) => <FaqCard {...args}></FaqCard>;

export const Primary = Template.bind({});

Primary.args = {
  title: 'Genetic Testing FAQs',
  label: 'Here are some frequently asked questions about genetic testing:',
  questions: [
    'What is Genetic Testing?',
    'What is DNA?',
    'What are geneticists looking for when they do genetic testing?',
  ],
};
