import { Story } from '@storybook/react/types-6-0';
import { useEffect } from 'react';

import { useAppEvents, Shell } from 'app/components/Shell';
import { colors } from 'styles';
import { Mocks } from 'test-utils/server/mocks';

import { AudioCard } from './AudioCard';

export default {
  component: AudioCard,
  title: 'App/AudioCard',
  parameters: {
    componentSubtitle: 'Defines the layout of every page.',
  },
  argTypes: {
    shellRequest: {
      control: {
        type: 'object',
      },
    },
  },
};

const LoadMockAudio = () => {
  const { allAudiosRequest } = useAppEvents();

  useEffect(allAudiosRequest, [allAudiosRequest]);

  return null;
};

const Template: Story = (args) => {
  return (
    <div style={{ background: colors.grey[300], padding: '24px' }}>
      <Shell requests={args.shellRequest}>
        <AudioCard {...args}></AudioCard>
        <LoadMockAudio />
      </Shell>
    </div>
  );
};

export const Primary = Template.bind({});

Primary.args = {
  shellRequest: { allAudios: async () => Mocks.audios.list },
};

export const Error = Template.bind({});

Error.args = {};
