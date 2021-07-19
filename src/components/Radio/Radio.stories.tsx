import { Story } from '@storybook/react/types-6-0';
import { useState } from 'react';
import Radio, { RadioProps } from './Radio';
import RadioGroup from './RadioGroup';

export default {
  component: Radio,
  title: 'Components/Form Elements/Radio',
  parameters: {
    componentSubtitle:
      'Radios allow the user to select one option from a group of many.',
  },
  argTypes: {
    label: {
      table: {
        disable: true,
      },
    },
    checked: {
      table: {
        disable: true,
      },
    },
  },
};

const Template: Story<RadioProps> = (args) => {
  const [value, setValue] = useState<string>('');

  const handleChange = (e: React.ChangeEvent) => {
    const input = e.currentTarget as HTMLInputElement;
    setValue(input.value);
  };

  return (
    <RadioGroup onChange={handleChange} value={value} name="radio">
      <Radio value="one" label="Option One" {...args} />
      <Radio value="two" label="Option Two" {...args} />
    </RadioGroup>
  );
};

export const Primary = Template.bind({});

Primary.args = {
  size: 'medium',
};
