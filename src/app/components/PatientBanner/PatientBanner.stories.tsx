import { Story } from '@storybook/react/types-6-0';

import { Shell } from 'app';
import { Theme } from 'styles';

import PatientBanner from './PatientBanner';

export default {
  component: PatientBanner,
  title: 'App/PatientBanner',
  parameters: {
    componentSubtitle:
      'The header identifying the patient, which includes their name, and a label',
  },
};

const Template: Story = () => (
  <Shell>
    <Theme>
      <PatientBanner />
    </Theme>
  </Shell>
);

export const Primary = Template.bind({});

Primary.args = {};
