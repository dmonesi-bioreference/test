import { Story } from '@storybook/react/types-6-0';

import Select, { SelectProps } from './Select';

export default {
  component: Select,
  title: 'Components/Form Elements/Select',
  parameters: {
    componentSubtitle:
      'Selects allow the user to choose an option from a dropdown menu.',
  },
};

const Template: Story<SelectProps> = (args) => (
  <Select {...args}>
    <option value="option1">Option 1</option>
    <option value="option2">Option 2</option>
    <option value="option3">Option 3</option>
  </Select>
);

export const Primary = Template.bind({});

Primary.args = {
  label: 'Select',
  labelPosition: 'top',
  size: 'medium',
  name: 'select',
};
