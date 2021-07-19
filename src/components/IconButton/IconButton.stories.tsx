import { action } from '@storybook/addon-actions';
import { Story } from '@storybook/react/types-6-0';
import IconButton, { IconButtonProps } from './IconButton';

export default {
  component: IconButton,
  title: 'Components/Icon Button',
  parameters: {
    componentSubtitle:
      'Simple, icon-only buttons that can be used for actions are in toolbars.',
  },
};

const Template: Story<IconButtonProps> = (args) => <IconButton {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  name: 'chat',
  label: 'Chat',
  style: 'solid',
  onClick: action('button clicked'),
};
