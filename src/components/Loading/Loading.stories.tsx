import { Story } from '@storybook/react/types-6-0';

import { Shell } from 'app/components/Shell';

import Loading, { LoadingProps } from './Loading';

export default {
  component: Loading,
  title: 'Components/Loading',
  parameters: {
    componentSubtitle: 'Loading component for use in other components',
  },
};

const Template: Story<LoadingProps> = (args) => (
  <Shell>
    <div style={{ height: '20px' }}>
      <Loading {...args} />
    </div>
  </Shell>
);
export const DNA = Template.bind({});

DNA.args = {
  variant: 'dna',
};

export const Shimmer = Template.bind({});

Shimmer.args = {
  variant: 'shimmer',
};
