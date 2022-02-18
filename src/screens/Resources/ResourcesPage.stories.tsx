import { Story } from '@storybook/react/types-6-0';
import { useEffect } from 'react';

import { Shell, useAppEvents } from 'app/components/Shell';
import { Mocks } from 'test-utils/server/mocks';

import { ResourcesPage } from './ResourcesPage';

export default {
  component: ResourcesPage,
  title: 'Screens/Resources',
  parameters: {
    layout: 'fullscreen',
  },
};

const LoadMockResources = () => {
  const {
    allArticlesRequest,
    allFaqsRequest,
    allAudiosRequest,
    getTestStatus,
    getAppointmentStatus,
  } = useAppEvents();

  useEffect(allArticlesRequest, [allArticlesRequest]);
  useEffect(allFaqsRequest, [allFaqsRequest]);
  useEffect(allAudiosRequest, [allAudiosRequest]);
  useEffect(getTestStatus, [getTestStatus]);
  useEffect(getAppointmentStatus, [getAppointmentStatus]);

  return null;
};

const Template: Story = () => (
  <Shell
    requests={{
      allAudios: async () => Mocks.audios.list,
      allArticles: async () => Mocks.article.list,
      allFaqs: async () => Mocks.faqs.list,
    }}
  >
    <ResourcesPage />
    <LoadMockResources />
  </Shell>
);

export const Primary: Story = Template.bind({});

Primary.args = {};
