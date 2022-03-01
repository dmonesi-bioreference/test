import { Story } from '@storybook/react/types-6-0';

import SubTitle, { SubTitleProps } from './SubTitle';

export default {
  component: SubTitle,
  title: 'Components/SubTitle',
  parameters: {
    componentSubtitle: 'Displays a step count.',
  },
};

const Template: Story<SubTitleProps> = (args) => <SubTitle {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  number: '1',
};
