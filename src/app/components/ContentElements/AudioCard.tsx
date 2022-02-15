import React, { useEffect } from 'react';

import { MediaElements } from 'app/components/MediaElements';
import { useAppEvents, useAppTranslation } from 'app/components/Shell';
import { ContentBlock, Spinner, Typography } from 'components';

import { Content } from './Content';
import { useContent, useContentByTestStatus } from './hooks';

export const AudioCard = () => {
  const t = useAppTranslation();

  const { allAudiosRequest } = useAppEvents();
  useEffect(allAudiosRequest, [allAudiosRequest]);

  const [{ audios, loadingAudios, errorFetchingAudios }] = useContent();

  const audiosByTestStatus = useContentByTestStatus(audios) as Audio[];

  const firstAudio = audiosByTestStatus[0];
  const audioTranscript = firstAudio?.content?.map((e) => ({
    title: e.title,
    content: e.content,
  }));

  return (
    <div>
      {loadingAudios ? <Spinner /> : null}
      {errorFetchingAudios ? (
        <Typography color="error" level="7" type="heading">
          {t('pages.resources.section.audios.error')}
        </Typography>
      ) : null}
      <MediaElements.Audio
        avatarImage={firstAudio?.avatar?.fullpath as string}
        src={firstAudio?.srcUrl}
        title={firstAudio?.name}
        transcript={
          audioTranscript && (
            <>
              {audioTranscript.map((contentBlock, index) => (
                <React.Fragment key={index}>
                  <ContentBlock title={contentBlock.title}>
                    <Content>{contentBlock.content}</Content>
                  </ContentBlock>
                </React.Fragment>
              ))}
            </>
          )
        }
      >
        <Content>{firstAudio?.blurb}</Content>
      </MediaElements.Audio>
    </div>
  );
};
