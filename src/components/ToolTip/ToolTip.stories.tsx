import { Story } from '@storybook/react/types-6-0';

import { Button } from 'components/Button';
import { Typography } from 'components/Typography';

import ToolTip, { ToolTipProps } from './ToolTip';

export default {
  component: ToolTip,
  title: 'Components/ToolTip',
  parameters: {
    componentSubtitle:
      'Tooltips can be used to display further information about an element.',
  },
};

const Template: Story<ToolTipProps> = (args) => (
  <div style={{ width: 300 }}>
    <ToolTip {...args}>
      <Typography type="helper-text" color="white">
        We’ll send SMS notifications to you here.
      </Typography>
      <Button kind="link-small" color="light">
        Use your email address instead
      </Button>
    </ToolTip>
  </div>
);

export const Primary = Template.bind({});

Primary.args = {
  title: 'Why do we ask for your mobile number?',
};
