import { Story } from '@storybook/react/types-6-0';

import { InputHelper } from 'components';
import { Icon } from 'components/Icon';

import Input, { InputProps } from './Input';

export default {
  component: Input,
  title: 'Components/Form Elements/Input',
  parameters: {
    componentSubtitle: 'Inputs collect data from the user.',
  },
};

const Template: Story<InputProps> = (args) => <Input {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  label: 'Text Input',
  labelPosition: 'top',
  size: 'medium',
  name: 'input',
};

export const withIcons = Template.bind({});

withIcons.args = {
  ...Primary.args,
  prefix: <Icon name="key" />,
  suffix: <Icon name="light-bulb" />,
};

export const withInputHelper = Template.bind({});

withInputHelper.args = {
  ...Primary.args,
  inputHelper: (
    <InputHelper helperText="We’ll also use this to send you notifications." />
  ),
};
