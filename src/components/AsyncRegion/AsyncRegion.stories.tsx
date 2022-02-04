import { Story } from '@storybook/react/types-6-0';

import { Typography } from 'components/Typography';

import { AsyncRegion } from './AsyncRegion';

export default {
  component: AsyncRegion,
  title: 'Components/AsyncRegion',
  parameters: {
    componentSubtitle: 'A region that fades and shows a spinner while waiting',
  },
};

const Template: Story = ({ pending }) => (
  <AsyncRegion pending={pending}>
    <Typography type="heading">
      Any kind of interior content will be faded and prefixed with a spinner.
    </Typography>
  </AsyncRegion>
);

export const Primary = Template.bind({});

Primary.args = {
  pending: true,
};
