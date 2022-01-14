import { useAppTranslation } from 'app/components/Shell';
import { Avatar, Heading, Typography } from "components";

import { AfterAppointmentStage } from "./Stages/AfterAppointmentStage";
import { AtAppointmentStage } from "./Stages/AtAppointmentStage";
import { TestResultsReadyStage } from "./Stages/TestResultsReadyStage";
import { WaitingStage } from "./Stages/WaitingStage";
import TimelineStyled from './Timeline.styles';
import { useTestStatus } from './hooks';

export const Timeline: React.FC = () => {
  const t = useAppTranslation();

  const [{ photo, isWaiting, isResultsReady, isAtAppointment, isAfterAppointment }] = useTestStatus();

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
          <Heading level="5" color="white">{t('sections.results.timeline.subTitle')}</Heading>
        </div>
      </div>

      <div className="timeline__body">
        <WaitingStage
          status={isWaiting ? 'present' : 'past'}
        />
        <TestResultsReadyStage
          status={isResultsReady ? 'present' : (isWaiting ? 'future' : 'past')}
        />
        <AtAppointmentStage
          status={isAtAppointment ? 'present' : (isAfterAppointment ? 'past' : 'future')}
        />
        <AfterAppointmentStage
          status={isAfterAppointment ? 'present' : 'future'}
        />
      </div>
    </TimelineStyled>
  );
}