import { Story } from '@storybook/react/types-6-0';
import { useEffect } from 'react';

import { useAppEvents, Shell } from 'app/components/Shell';
import { colors } from 'styles';
import { Mocks } from 'test-utils/server/mocks';

import { FAQCards } from './FAQCards';

export default {
  component: FAQCards,
  title: 'App/FAQCards',
  parameters: {
    componentSubtitle: 'Defines the layout of every page.',
  },
};

const LoadMockFaqs = () => {
  const { allFaqsRequest } = useAppEvents();

  useEffect(allFaqsRequest, [allFaqsRequest]);

  return null;
};

const Template: Story = (args) => {
  return (
    <div style={{ background: colors.grey[300], padding: '24px' }}>
      <Shell requests={{ allFaqs: async () => Mocks.faqs.list }}>
        <FAQCards {...args}></FAQCards>
        <LoadMockFaqs />
      </Shell>
    </div>
  );
};

export const Primary = Template.bind({});

Primary.args = {};
