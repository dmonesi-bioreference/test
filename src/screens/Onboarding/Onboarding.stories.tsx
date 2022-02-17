import { Story } from '@storybook/react/types-6-0';
import { useEffect } from 'react';

import { Shell, useAppEvents } from 'app/components/Shell';
import { OnBoarding } from 'screens/Onboarding';
import { Mocks } from 'test-utils/server/mocks';

export default {
  component: OnBoarding,
  title: 'Screens/OnBoarding',
};

const LoadMockOnboardingStories = () => {
  const { allOnBoardingCardsRequest } = useAppEvents();

  useEffect(allOnBoardingCardsRequest, [allOnBoardingCardsRequest]);

  return null;
};

const Template: Story = () => (
  <Shell
    requests={{
      allOnBoardingCards: async () => Mocks.onBoardingCards.list,
    }}
  >
    <OnBoarding />
    <LoadMockOnboardingStories />
  </Shell>
);

export const Primary: Story = Template.bind({});

Primary.args = {};
