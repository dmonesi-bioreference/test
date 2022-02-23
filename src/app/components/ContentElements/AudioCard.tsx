import React, { useEffect } from 'react';

import { MediaElements } from 'app/components/MediaElements';
import { useAppEvents, useAppTranslation } from 'app/components/Shell';
import { useContent, useContentByTestStatus } from 'app/hooks';
import { Card } from 'components/Card';
import { ContentBlock } from 'components/ContentBlock';
import { Typography } from 'components/Typography';

import AudioCardStyled from './AudioCard.styles';
import { Content } from './Content';

export const AudioCard = () => {
  const t = useAppTranslation();

  const { allAudiosRequest } = useAppEvents();
  useEffect(allAudiosRequest, [allAudiosRequest]);

  const [{ audios, loadingAudios, errorFetchingAudios }] = useContent();

  const audiosByTestStatus = useContentByTestStatus(audios);
  const firstAudio = audiosByTestStatus.slice(0, 1);

  const audioCards = firstAudio.map((audio) => {
    return (
      <MediaElements.Audio
        avatarImage={audio?.avatar?.fullpath as string}
        key={audio.id}
        src={audio.srcUrl}
        title={audio.name}
        transcript={
          <>
            {audio.content?.map((contentBlock, index) => (
              <React.Fragment key={index}>
                <ContentBlock title={contentBlock.title}>
                  <Content>{contentBlock.content}</Content>
                </ContentBlock>
              </React.Fragment>
            ))}
          </>
        }
      >
        <Content>{audio.blurb}</Content>
      </MediaElements.Audio>
    );
  });

  return (
    <AudioCardStyled>
      {loadingAudios && <Card isLoading />}
      {errorFetchingAudios && (
        <Typography color="error" level="7" type="heading">
          {t('pages.resources.section.audios.error')}
        </Typography>
      )}
      {audioCards}
    </AudioCardStyled>
  );
};
