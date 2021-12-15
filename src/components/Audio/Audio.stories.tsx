import { Story } from '@storybook/react/types-6-0';

import geneticCounselor from 'assets/images/png/geneticCounselor.png';
import { Avatar, BulletItem, Icon } from 'components';

import Audio, { AudioProps } from './Audio';


export default {
  component: Audio,
  title: 'Components/Audio',
  parameters: {
    componentSubtitle:
      'An Audio component describes a playable audio file, as well as providing a transcript.',
  },
};

const Template: Story<AudioProps> = (args) => (
  <div style={{ width: '343px' }}>
    <Audio {...args}>
      Here is an enlightening description of what to expect from this audio
      file.
    </Audio>
  </div>
);

export const Primary = Template.bind({});

Primary.args = {
  title: 'Genetic Counselor Support',
  src: 'https://www2.cs.uic.edu/~i101/SoundFiles/PinkPanther30.wav',
  avatar: (
    <Avatar
      src={geneticCounselor}
      alt="Photograph of our genetic counselor, Laura."
      shape="square"
      size="large"
    />
  ),
  showTranscriptLabel: 'Read transcript',
  hideTranscriptLabel: 'Close transcript',
  transcript: [
    <BulletItem
      key={1}
      icon={<Icon name="arrow-circle-right" />}
      title="First of all"
    >
      {' '}
      Here is a description.{' '}
    </BulletItem>,
    <BulletItem
      key={2}
      icon={<Icon name="arrow-circle-right" />}
      title="And another thing"
    >
      {' '}
      Here is a description.{' '}
    </BulletItem>,
  ],
};
