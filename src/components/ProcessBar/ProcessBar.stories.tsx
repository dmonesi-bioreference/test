import { Story } from '@storybook/react/types-6-0';

import ProcessBar, { ProcessBarProps } from './ProcessBar';

export default {
  component: ProcessBar,
  title: 'Components/ProcessBar',
  parameters: {
    componentSubtitle: 'Visualises steps within a process.',
  },
};

const Template: Story<ProcessBarProps> = (args) => <ProcessBar {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  stepsAmount: 4,
  currentStep: 1,
};
