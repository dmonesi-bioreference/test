import { useAppTranslation } from 'app/components/Shell';
import { useTestStatus } from 'app/hooks';
import { Avatar, Heading, Spinner, Typography } from 'components';

import { AfterAppointmentStage } from './Stages/AfterAppointmentStage';
import { AtAppointmentStage } from './Stages/AtAppointmentStage';
import { TestResultsReadyStage } from './Stages/TestResultsReadyStage';
import { WaitingStage } from './Stages/WaitingStage';
import TimelineStyled from './Timeline.styles';

const TimelineBody: React.FC = () => {
  const t = useAppTranslation();

  const [
    {
      notLoaded,
      loading,
      errorLoading,
      isWaiting,
      isBeforeAppointment,
      isAtAppointment,
      isAfterAppointment,
    },
  ] = useTestStatus();

  if (notLoaded) {
    return <Heading level="7">{t('sections.results.notLoaded')}</Heading>;
  }

  if (loading) {
    return <Spinner data-testid="spinner-timeline" />;
  }

  if (errorLoading) {
    return (
      <Typography color="error" level="7" type="heading">
        {t('sections.results.timeline.error')}
      </Typography>
    );
  }

  return (
    <>
      <WaitingStage status={isWaiting ? 'present' : 'past'} />
      <TestResultsReadyStage
        status={isBeforeAppointment ? 'present' : isWaiting ? 'future' : 'past'}
      />
      <AtAppointmentStage
        status={
          isAtAppointment ? 'present' : isAfterAppointment ? 'past' : 'future'
        }
      />
      <AfterAppointmentStage
        status={isAfterAppointment ? 'present' : 'future'}
      />
    </>
  );
};

export const Timeline: React.FC = () => {
  const t = useAppTranslation();

  const [{ photo }] = useTestStatus();

  return (
    <TimelineStyled>
      <div className="timeline__heading">
        <Avatar
          src={photo}
          alt={t('components.avatar.geneticCounselor.altText')}
          shape="circular"
          size="small"
        />
        <div>
          <Typography type="label" color="white" labelType="display">
            {t('sections.results.timeline.title')}
          </Typography>
          <Heading level="5" color="white">
            {t('sections.results.timeline.subTitle')}
          </Heading>
        </div>
      </div>
      <div className="timeline__body">
        <TimelineBody />
      </div>
    </TimelineStyled>
  );
};
