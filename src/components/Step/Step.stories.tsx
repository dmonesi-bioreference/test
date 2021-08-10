import { Story } from '@storybook/react/types-6-0';

import Step, { StepProps } from './Step';

export default {
  component: Step,
  title: 'Components/Step',
  parameters: {
    componentSubtitle: 'Describes a step within a process.',
  },
};

const Template: Story<StepProps> = (args) => (
  <div style={{ width: 375 }}>
    <Step {...args} />
  </div>
);

export const Primary = Template.bind({});

Primary.args = {
  number: 1,
  position: 'current',
};
