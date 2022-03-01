import { Story } from '@storybook/react/types-6-0';

import { Shell } from 'app/components/Shell';
import { FAQsPage } from 'screens/Resources/FAQsPage';
import { Mocks } from 'test-utils/server/mocks';

export default {
  component: FAQsPage,
  title: 'Screens/FAQsPage',
  parameters: {
    layout: 'fullscreen',
  },
};

const Template: Story = () => (
  <Shell
    requests={{
      singleFaq: async () => Mocks.faqs.generic,
    }}
  >
    <FAQsPage slug="slug" />
  </Shell>
);

export const Primary: Story = Template.bind({});

Primary.args = {};
