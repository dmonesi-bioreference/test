import { useAppTranslation } from 'app/components/Shell';
import { Icon, TimelineItem } from 'components';
import { colors } from 'styles';

import IsWaitingStyled from './IsWaiting.styles';

interface IsWaitingProps {
  status: 'present' | 'past' | 'future';
}

export const IsWaiting: React.FC<IsWaitingProps> = (props) => {
  const t = useAppTranslation();

  return (
    <IsWaitingStyled
      key={props.status}
      className={props.status}
      linearGradient='isWaitingLinearGradient'
    >
      <svg className='linearGradientSvg'>
        <defs>
          <linearGradient id='isWaitingLinearGradient' gradientTransform="rotate(90)">
            {props.status === 'present' ? (
              <stop offset="100%" stopColor={colors.sand[100]} />
            ) : (
              <>
                <stop offset="0%" stopColor={colors.teal[800]} />
                <stop offset="100%" stopColor={colors.teal[500]} />
              </>
            )}
          </linearGradient>
        </defs>
      </svg>

      <TimelineItem
        heading={t('sections.results.timeline.waiting.heading')}
        body={t('sections.results.timeline.waiting.body')}
        link={props.status == 'present' ? {
          label: t('sections.results.timeline.waiting.linkLabel'),
          onClick: () => null
        } : undefined}
        icon={props.status === 'present' ? (
          <Icon name='search' style='solid' />
        ) : (
          <Icon name='check' style='solid' />
        )}
        percent={props.status === 'present' ? 75 : 100}
        isCollapseEnabled={props.status === 'present' ? false : true}
        isSmall={props.status === 'past' ? true : false}
      />
    </IsWaitingStyled>
  );
}