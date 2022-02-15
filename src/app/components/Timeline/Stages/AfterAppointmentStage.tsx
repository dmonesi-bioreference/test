import { useRouter } from 'next/router';

import { useAppTranslation } from 'app/components/Shell';
import { Icon } from 'components/Icon';
import { TimelineItem } from 'components/TimelineItem';

import AfterAppointmentStageStyled from './AfterAppointmentStage.styles';

interface AfterAppointmentStageProps {
  status: 'present' | 'past' | 'future';
}

export const AfterAppointmentStage: React.FC<AfterAppointmentStageProps> = (
  props
) => {
  const t = useAppTranslation();
  const router = useRouter();

  return (
    <AfterAppointmentStageStyled key={props.status} className={props.status}>
      <TimelineItem
        heading={t('sections.results.timeline.afterAppointment.heading')}
        body={t('sections.results.timeline.afterAppointment.body')}
        link={
          props.status == 'present'
            ? {
                label: t(
                  'sections.results.timeline.afterAppointment.linkLabel'
                ),
                onClick: () => router.push('/resources'),
              }
            : undefined
        }
        icon={<Icon name="users" style="solid" />}
        isCollapseEnabled={props.status === 'present' ? false : true}
        isTail={true}
      />
    </AfterAppointmentStageStyled>
  );
};
