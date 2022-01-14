import { useAppTranslation } from 'app/components/Shell';
import { Icon, TimelineItem } from 'components';
import { colors } from 'styles';

import AtAppointmentStageStyled from './AtAppointmentStage.styles';

interface AtAppointmentStageProps {
  status: 'present' | 'past' | 'future';
}

export const AtAppointmentStage: React.FC<AtAppointmentStageProps> = (props) => {
  const t = useAppTranslation();

  return (
    <AtAppointmentStageStyled
      key={props.status}
      className={props.status}
      linearGradient='AtAppointmentStageLinearGradient'
    >
      <svg className='linearGradientSvg'>
        <defs>
          <linearGradient id='AtAppointmentStageLinearGradient' gradientTransform="rotate(90)">
            {props.status === 'past' ? (
              <>
                <stop offset="0%" stopColor={colors.blue[500]} />
                <stop offset="100%" stopColor={colors.teal[500]} />
              </>
            ) : (
              <stop offset="100%" stopColor={colors.sand[100]} />
            )}
          </linearGradient>
        </defs>
      </svg>

      <TimelineItem
        heading={t('sections.results.timeline.atAppointment.heading')}
        body={t('sections.results.timeline.atAppointment.body')}
        link={props.status == 'present' ? {
            label: t('sections.results.timeline.atAppointment.linkLabel'),
            onClick: () => null
        } : undefined}
        icon={<Icon name='chat-alt-2' style='solid' />}
        isCollapseEnabled={props.status === 'present' ? false : true}
        isSmall={props.status === 'past' ? true : false}
      />
    </AtAppointmentStageStyled>
  );
}