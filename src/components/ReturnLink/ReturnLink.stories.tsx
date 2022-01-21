import { Story } from '@storybook/react/types-6-0';

import ReturnLink, { ReturnLinkProps } from './ReturnLink';

export default {
  component: ReturnLink,
  title: 'Components/ReturnLink',
  parameters: {
    componentSubtitle: 'Enables user to return to previous page.',
  },
};

const Template: Story<ReturnLinkProps> = (args) => (
  <ReturnLink {...args}></ReturnLink>
);

export const Primary = Template.bind({});

Primary.args = {
  label: 'Return',
  href: '#',
};
