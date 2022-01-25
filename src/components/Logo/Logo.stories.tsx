import { Story } from '@storybook/react/types-6-0';

import { colors } from 'styles';

import Logo, { LogoProps } from './Logo';

export default {
  component: Logo,
  title: 'Components/Logo',
  parameters: {
    componentSubtitle: 'GeneDX Logo',
    backgrounds: {
      default: 'light',
      values: [
        {
          name: 'dark',
          value: colors.grey[900],
        },
        {
          name: 'light',
          value: colors.white,
        },
      ],
    },
  },
};

const Template: Story<LogoProps> = (args) => <Logo {...args} />;

export const Default = Template.bind({});
Default.args = {
  width: 130,
};

export const White = Template.bind({});
White.parameters = {
  backgrounds: { default: 'dark' },
};
White.args = {
  width: 130,
  variant: 'white',
};
