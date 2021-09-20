import { Story } from '@storybook/react/types-6-0';

import StepTitle, { StepTitleProps } from './StepTitle';

export default {
  component: StepTitle,
  title: 'Components/StepTitle',
  parameters: {
    componentSubtitle: 'Displays a step count.',
  },
};

const Template: Story<StepTitleProps> = (args) => <StepTitle {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  number: '1',
};
