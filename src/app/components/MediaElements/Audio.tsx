import { ReactNode, useState } from 'react';
import ReactAudioPlayer from 'react-audio-player';

import { useAppTranslation } from 'app/components/Shell';
import { Avatar, Button, Icon, Typography } from 'components';

import AudioStyled from './Audio.styles';

export interface AudioProps {
  avatarImage?: string;
  title: string;
  src: string;
  transcript: ReactNode;
}

const Audio: React.FC<AudioProps> = (props) => {
  const [transcriptHidden, toggleTranscript] = useState(true);
  const iconName = transcriptHidden ? 'book-open' : 'x';

  const t = useAppTranslation();

  return (
    <AudioStyled>
      <div className="audio__header">
        <Typography type="label" labelType="display" alignment="center">
          {props.title}
        </Typography>
      </div>

      <div className="audio__content">
        <div className="audio__description-container">
          {props.avatarImage &&
            <Avatar
              src={props.avatarImage}
              alt={t('components.avatar.geneticCounselor.altText')}
              shape="square"
              size="large"
            />
          }

          <Typography type="body" alignment="left">
            {props.children}
          </Typography>
        </div>

        <ReactAudioPlayer
          className="audio__player"
          src={props.src}
          autoPlay={false}
          controls
        />

        <Button
          kind="link-small"
          prefix={<Icon name={iconName} />}
          onClick={() => toggleTranscript(!transcriptHidden)}
        >
          {transcriptHidden
            ? t('components.audio.actions.showTranscript')
            : t('components.audio.actions.hideTranscript')}
        </Button>
      </div>

      <div
        className={
          transcriptHidden ? 'audio__transcript--hidden' : 'audio__transcript'
        }
      >
        {props.transcript}
      </div>
    </AudioStyled>
  );
};

export default Audio;
