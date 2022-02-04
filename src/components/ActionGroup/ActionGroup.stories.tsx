import { Story } from '@storybook/react/types-6-0';

import { Button } from 'components/Button';

import ActionGroup from './ActionGroup';

export default {
  component: ActionGroup,
  title: 'Components/ActionGroup',
  parameters: {
    componentSubtitle: 'Grouping of actions for page or modal.',
  },
};

const Template: Story = (args) => (
  <ActionGroup {...args}>
    <Button kind="primary">Primary Action</Button>
    <Button kind="info">Secondary Action</Button>
    <Button kind="link-small">Cancel</Button>
  </ActionGroup>
);

export const Primary = Template.bind({});

Primary.args = {};
