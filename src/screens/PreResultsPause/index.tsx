import { useAppTranslation } from 'app';
import {
  Audio,
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
  return (
    <ContentAudioStyledDiv>
      <PageLayout containsCards={true}>
        <Typography
          type="heading"
          level="1"
          fontType="serif"
          objectToWrap={<Avatar shape="circular" size="small" />}
        >
          {t('pages.preResultsPause.title')}
        </Typography>

        <div className="pre-results-pause__details">
          <Typography type="heading" level="7">
            {t('pages.preResultsPause.description.paragraph1')}
          </Typography>

          <Typography type="heading" level="7">
            {t('pages.preResultsPause.description.paragraph2')}
          </Typography>
        </div>

        <Audio
          title={t('pages.preResultsPause.audio.title')}
          src=""
          transcript={[
            <BulletItem
              icon={<Icon name="home" color="primary" aria-hidden="true" />}
              title={t('pages.preResultsPause.audio.transcript.1.title')}
              key={1}
            >
              {t('pages.preResultsPause.audio.transcript.1.description')}
            </BulletItem>,

            <BulletItem
              icon={
                <Icon name="user-group" color="primary" aria-hidden="true" />
              }
              title={t('pages.preResultsPause.audio.transcript.2.title')}
              key={2}
            >
              {t('pages.preResultsPause.audio.transcript.2.description')}
            </BulletItem>,

            <BulletItem
              icon={
                <Icon
                  name="question-mark-circle"
                  color="primary"
                  aria-hidden="true"
                />
              }
              title={t('pages.preResultsPause.audio.transcript.3.title')}
              key={3}
            >
              {t('pages.preResultsPause.audio.transcript.3.description')}
            </BulletItem>,
          ]}
        >
          {t('pages.preResultsPause.audio.description')}
        </Audio>

        <div className="pre-results-pause__actions">
          <Button kind="primary">
            {t('pages.preResultsPause.actions.primary')}
          </Button>
          <Button kind="default">
            {t('pages.preResultsPause.actions.secondary')}
          </Button>
        </div>
      </PageLayout>
    </ContentAudioStyledDiv>
  );
};
