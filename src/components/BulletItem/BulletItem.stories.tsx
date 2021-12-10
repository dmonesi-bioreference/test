import { Story } from '@storybook/react/types-6-0';

import { Icon } from '../Icon';

import BulletItem, { BulletItemProps } from './BulletItem';

export default {
  component: BulletItem,
  title: 'Components/BulletItem',
  parameters: {
    componentSubtitle: 'A bulleted item in a list.',
  },
};

const Template: Story<BulletItemProps> = (args) => (
  <BulletItem {...args}>Here is the item description.</BulletItem>
);

export const Primary = Template.bind({});

Primary.args = {
  icon: <Icon name="check" />,
  title: 'Item one',
};
