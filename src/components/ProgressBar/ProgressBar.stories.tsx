import { Story } from '@storybook/react/types-6-0';

import ProgressBar, { ProgressBarProps } from './ProgressBar';

export default {
  component: ProgressBar,
  title: 'Components/ProgressBar',
  parameters: {
    componentSubtitle: 'Maps progress is in a step by step journey.',
  },
};

const Template: Story<ProgressBarProps> = (args) => (
  <div style={{ width: 375 }}>
    <ProgressBar {...args} />
  </div>
);

export const Primary = Template.bind({});

Primary.args = {
  stepsAmount: 4,
  currentStep: 2,
};
