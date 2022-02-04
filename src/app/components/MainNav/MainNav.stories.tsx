import { Story } from '@storybook/react/types-6-0';

import { Shell } from 'app/components/Shell';

import MainNav, { MainNavProps } from './MainNav';

export default {
  component: MainNav,
  title: 'Components/MainNav',
  parameters: {
    componentSubtitle: 'Main navigation menu for the application',
  },
};

const Template: Story<MainNavProps> = (args) => {
  return (
    <Shell>
      <MainNav {...args}></MainNav>
    </Shell>
  );
};
export const Primary = Template.bind({});

Primary.args = {};
