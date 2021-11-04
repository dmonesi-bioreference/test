import { Story } from '@storybook/react/types-6-0';

import { InputProps } from 'components/Input/Input';

import PasswordInput from './PasswordInput';

export default {
  component: PasswordInput,
  title: 'Components/PasswordInput',
  parameters: {
    componentSubtitle: 'Reusable password component',
  },
};

const Template: Story<InputProps> = (args) => (
  <PasswordInput {...args}></PasswordInput>
);

export const Primary = Template.bind({});

Primary.args = {
  name: 'password',
  label: 'Password',
};
