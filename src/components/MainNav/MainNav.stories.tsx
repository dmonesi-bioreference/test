import { Story } from '@storybook/react/types-6-0';

import MainNav, { MainNavProps } from './MainNav';

export default {
  component: MainNav,
  title: 'Components/MainNav',
  parameters: {
    componentSubtitle: 'Main navigation menu for the application',
  },
};

const Template: Story<MainNavProps> = (args) => <MainNav {...args}></MainNav>;

export const Primary = Template.bind({});

Primary.args = {};
