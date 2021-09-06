import { Story } from '@storybook/react/types-6-0';

import Logo, { LogoProps } from './Logo';

export default {
  component: Logo,
  title: 'Components/Logo',
  parameters: {
    componentSubtitle: 'GeneDX Logo',
  },
};

const Template: Story<LogoProps> = (args) => <Logo {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
