import { Story } from '@storybook/react/types-6-0';
import { useEffect } from 'react';

import { useAppEvents, Shell } from 'app/components/Shell';
import { Mocks } from 'test-utils/server/mocks';

import { OnBoardingStories } from './OnBoardingStories';

export default {
  component: OnBoardingStories,
  title: 'App/OnBoardingStories',
  parameters: {
    componentSubtitle: 'Defines the layout of every page.',
  },
};

const LoadMockOnboardingCards = () => {
  const { allOnBoardingCardsRequest } = useAppEvents();

  useEffect(allOnBoardingCardsRequest, [allOnBoardingCardsRequest]);

  return null;
};

const Template: Story = (args) => {
  return (
    <Shell
      requests={{
        allOnBoardingCards: async () => Mocks.onBoardingCards.list,
      }}
    >
      <OnBoardingStories {...args}></OnBoardingStories>
      <LoadMockOnboardingCards />
    </Shell>
  );
};

export const Primary = Template.bind({});

Primary.args = {};
