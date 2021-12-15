import { useAppTranslation } from 'app/components/Shell';
import { Icon, TimelineItem } from 'components';

import IsAfterAppointmentStyled from './IsAfterAppointment.styles';

interface IsAfterAppointmentProps {
  status: 'present' | 'past' | 'future';
}

export const IsAfterAppointment: React.FC<IsAfterAppointmentProps> = (props) => {
  const t = useAppTranslation();
  
  return (
    <IsAfterAppointmentStyled
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
    </IsAfterAppointmentStyled>
  );
}