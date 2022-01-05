import { useAppTranslation } from 'app/components/Shell';
import { Avatar, Heading, Typography } from "components";

import { IsAfterAppointment } from "./IsAfterAppointment";
import { IsAtAppointment } from "./IsAtAppointment";
import { IsTestResultsReady } from "./IsTestResultsReady";
import { IsWaiting } from "./IsWaiting";
import TimelineStyled from './Timeline.styles';
import { useTestStatus } from './hooks';

export const Timeline: React.FC = () => {
  const t = useAppTranslation();

  const [{ photo, isWaiting, isResultsReady, isAtAppointment, isAfterAppointment }] = useTestStatus();

  return (
    <TimelineStyled>
      <div className="timeline-heading">
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

      <div className="timeline-body">
        <IsWaiting
          status={isWaiting ? 'present' : 'past'}
        />
        <IsTestResultsReady
          status={isResultsReady ? 'present' : (isWaiting ? 'future' : 'past')}
        />
        <IsAtAppointment
          status={isAtAppointment ? 'present' : (isAfterAppointment ? 'past' : 'future')}
        />
        <IsAfterAppointment
          status={isAfterAppointment ? 'present' : 'future'}
        />
      </div>
    </TimelineStyled>
  );
}