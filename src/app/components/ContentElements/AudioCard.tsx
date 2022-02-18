import React, { useEffect } from 'react';

import { MediaElements } from 'app/components/MediaElements';
import { useAppEvents, useAppTranslation } from 'app/components/Shell';
import { Card } from 'components/Card';
import { ContentBlock } from 'components/ContentBlock';
import { Typography } from 'components/Typography';

import { Content } from './Content';
import { useContent, useContentByTestStatus } from './hooks';

export const AudioCard = () => {
  const t = useAppTranslation();

  const { allAudiosRequest } = useAppEvents();
  useEffect(allAudiosRequest, [allAudiosRequest]);

  const [{ audios, loadingAudios, errorFetchingAudios }] = useContent();

  const audiosByTestStatus = useContentByTestStatus(audios) as Audio[];
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
    <div>
      {loadingAudios && <Card isLoading />}
      {errorFetchingAudios && (
        <Typography color="error" level="7" type="heading">
          {t('pages.resources.section.audios.error')}
        </Typography>
      )}
      {audioCards}
    </div>
  );
};
