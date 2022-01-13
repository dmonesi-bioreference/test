import { Story } from '@storybook/react/types-6-0';

import Loading, { LoadingProps } from './Loading';

export default {
  component: Loading,
  title: 'Components/Loading',
  parameters: {
    componentSubtitle: 'Loading component for use in other components',
  },
};

const Template: Story<LoadingProps> = (args) => <Loading {...args} />;

export const Fullscreen = Template.bind({});

Fullscreen.args = {
  variant: 'fullscreen',
};

export const Inline = Template.bind({});

Inline.args = {
  variant: 'inline',
};
