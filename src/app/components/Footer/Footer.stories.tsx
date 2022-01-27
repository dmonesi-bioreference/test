import { Story } from '@storybook/react/types-6-0';

import { Shell } from 'app/components/Shell';

import Footer from './Footer';

export default {
  component: Footer,
  title: 'App/Footer',
  parameters: {
    componentSubtitle: 'The Footer provides social and info links',
  },
};

const Template: Story = () => (
  <Shell>
    <Footer />
  </Shell>
);

export const Primary = Template.bind({});
