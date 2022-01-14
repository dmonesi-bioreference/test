import { Story } from '@storybook/react/types-6-0';

import { Shell } from 'app';

import { DisplayField, DisplayFieldProps } from './DisplayField';

export default {
  component: DisplayField,
  title: 'App/DisplayField',
  parameters: {
    componentSubtitle:
      'A labelled field to display data, when not in editable state.',
  },
};

const Template: Story<DisplayFieldProps> = (args) => (
  <Shell>
    <div
      style={{ display: 'flex', justifyContent: 'space-around', width: '100%' }}
    >
      <DisplayField {...args}>Information</DisplayField>

      <DisplayField label="No data"></DisplayField>
    </div>
  </Shell>
);

export const Primary = Template.bind({});

Primary.args = {
  label: 'Label',
};
