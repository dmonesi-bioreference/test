import { Story } from '@storybook/react/types-6-0';

import InputHelper, { InputHelperProps } from './InputHelper';

export default {
  component: InputHelper,
  title: 'Components/InputHelper',
  parameters: {
    componentSubtitle: 'Provides further information about an input.',
  },
};

const Template: Story<InputHelperProps> = (args) => (
  <InputHelper {...args}></InputHelper>
);

export const Primary = Template.bind({});

Primary.args = {
  helperText: 'We’ll also use this to send you notifications.',
};
