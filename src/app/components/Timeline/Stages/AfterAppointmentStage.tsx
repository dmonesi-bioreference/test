import { useAppTranslation } from 'app/components/Shell';
import { Icon, TimelineItem } from 'components';

import AfterAppointmentStageStyled from './AfterAppointmentStage.styles';

interface AfterAppointmentStageProps {
  status: 'present' | 'past' | 'future';
}

export const AfterAppointmentStage: React.FC<AfterAppointmentStageProps> = (props) => {
  const t = useAppTranslation();
  
  return (
    <AfterAppointmentStageStyled
      key={props.status}
      className={props.status}
    >
      <TimelineItem
        heading={t('sections.results.timeline.afterAppointment.heading')}
        body={t('sections.results.timeline.afterAppointment.body')}
        link={props.status == 'present' ? {
          label: t('sections.results.timeline.afterAppointment.linkLabel'),
          onClick: () => null
        } : undefined}
        icon={<Icon name='users' style='solid' />}
        isCollapseEnabled={props.status === 'present' ? false : true}
        isTail={true}
      />
    </AfterAppointmentStageStyled>
  );
}