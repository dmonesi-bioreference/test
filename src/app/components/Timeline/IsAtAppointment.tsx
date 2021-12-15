import { useAppTranslation } from 'app/components/Shell';
import { Icon, TimelineItem } from 'components';
import { colors } from 'styles';

import IsAtAppointmentStyled from './IsAtAppointment.styles';

interface IsAtAppointmentProps {
  status: 'present' | 'past' | 'future';
}

export const IsAtAppointment: React.FC<IsAtAppointmentProps> = (props) => {
  const t = useAppTranslation();

  return (
    <IsAtAppointmentStyled
      key={props.status}
      className={props.status}
      linearGradient='isAtAppointmentLinearGradient'
    >
      <svg className='linearGradientSvg'>
        <defs>
          <linearGradient id='isAtAppointmentLinearGradient' gradientTransform="rotate(90)">
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
    </IsAtAppointmentStyled>
  );
}