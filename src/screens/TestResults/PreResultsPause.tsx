import { MediaElements, useAppEvents, useAppSelector, useAppTranslation } from 'app';
import {
  Avatar,
  BulletItem,
  Button,
  Icon,
  PageLayout,
  Typography,
} from 'components';


import ContentAudioStyledDiv from './PreResultsPause.styles';

export const PreResultsPause = () => {
  const t = useAppTranslation();
  const { viewTestResults } = useAppEvents();
  const photo = useAppSelector((state) => state.context.geneticCounselor.photo);

  return (
    <ContentAudioStyledDiv>
      <PageLayout containsCards={true}>
        <Typography
          type="heading"
          level="1"
          fontType="serif"
          objectToWrap={
            <Avatar
              src={photo}
              alt={t('components.avatar.geneticCounselor.altText')}
              shape="circular"
              size="small"
            />
          }
        >
          {t('pages.results.preResultsPause.title')}
        </Typography>

        <div className="pre-results-pause__details">
          <Typography type="heading" level="7">
            {t('pages.results.preResultsPause.description.paragraph1')}
          </Typography>

          <Typography type="heading" level="7">
            {t('pages.results.preResultsPause.description.paragraph2')}
          </Typography>
        </div>

        <MediaElements.Audio
          title={t('pages.results.preResultsPause.audio.title')}
          src=""
          transcript={[
            <BulletItem
              icon={<Icon name="home" color="primary" aria-hidden="true" />}
              title={t('pages.results.preResultsPause.audio.transcript.1.title')}
              key={1}
            >
              {t('pages.results.preResultsPause.audio.transcript.1.description')}
            </BulletItem>,

            <BulletItem
              icon={
                <Icon name="user-group" color="primary" aria-hidden="true" />
              }
              title={t('pages.results.preResultsPause.audio.transcript.2.title')}
              key={2}
            >
              {t('pages.results.preResultsPause.audio.transcript.2.description')}
            </BulletItem>,

            <BulletItem
              icon={
                <Icon
                  name="question-mark-circle"
                  color="primary"
                  aria-hidden="true"
                />
              }
              title={t('pages.results.preResultsPause.audio.transcript.3.title')}
              key={3}
            >
              {t('pages.results.preResultsPause.audio.transcript.3.description')}
            </BulletItem>,
          ]}
        />

        <div className="pre-results-pause__actions">
          <Button kind="primary" onClick={viewTestResults}>
            {t('pages.results.preResultsPause.actions.primary')}
          </Button>
          <Button kind="default" href="/demo">
            {t('pages.results.preResultsPause.actions.secondary')}
          </Button>
        </div>
      </PageLayout>
    </ContentAudioStyledDiv>
  );
};
