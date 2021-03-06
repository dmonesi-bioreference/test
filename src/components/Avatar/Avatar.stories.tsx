import { Story } from '@storybook/react/types-6-0';

import { Shell } from 'app/components/Shell';
import geneticCounselor from 'assets/images/png/geneticCounselor.png';

import Avatar, { AvatarProps } from './Avatar';

export default {
  component: Avatar,
  title: 'Components/Avatar',
  parameters: {
    componentSubtitle:
      'An avatar describes an image that represents someone. For example a patient, a genetic counselor, a family/caregiver.',
  },
};

const Template: Story<AvatarProps> = () => {
  return (
    <Shell>
      <div>
        <Avatar size="large" shape="square"></Avatar>
        <Avatar size="small" shape="circular"></Avatar>
      </div>
    </Shell>
  );
};

export const Primary = Template.bind({});

Primary.args = {
  src: geneticCounselor,
  alt: 'Photograph of our genetic counselor, Laura.',
};
