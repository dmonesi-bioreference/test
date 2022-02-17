import { Story } from '@storybook/react/types-6-0';

import { Shell } from 'app/components/Shell';
import { Mocks } from 'test-utils/server/mocks';

import { Content } from './Content';

export default {
  component: Content,
  title: 'App/Content',
  parameters: {
    componentSubtitle: 'Defines the layout of every page.',
  },
};

const Template: Story = (args) => {
  return (
    <Shell requests={{ allFaqs: async () => Mocks.faqs.list }}>
      <Content {...args}>
        {`
          <p>Hello world</p>
          <p>This is testing</p>
        `}
      </Content>
    </Shell>
  );
};

export const Primary = Template.bind({});

Primary.args = {};
