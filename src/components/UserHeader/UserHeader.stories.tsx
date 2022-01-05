import { Story } from '@storybook/react/types-6-0';

import geneticCounselor from 'assets/images/png/geneticCounselor.png';
import { Avatar } from 'components';

import UserHeader, { UserHeaderProps } from './UserHeader';


export default {
  component: UserHeader,
  title: 'Components/UserHeader',
  parameters: {
    componentSubtitle: 'The header of the user which includs their avatar, name, and title',
  },
}

const Template: Story<UserHeaderProps> = (args) => (
  <UserHeader {...args} />
);

export const Primary = Template.bind({});

Primary.args = {
  title: "Title goes here",
  name: "Name goes here",
  avatar: (
    <Avatar
      src={geneticCounselor}
      shape="circular"
      size="small"
    />
  )
};
