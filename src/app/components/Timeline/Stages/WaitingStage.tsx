import { useRouter } from 'next/router';

import { useAppTranslation } from 'app/components/Shell';
import { Icon } from 'components/Icon';
import { TimelineItem } from 'components/TimelineItem';
import { colors } from 'styles';

import WaitingStageStyled from './WaitingStage.styles';

interface WaitingStageProps {
  status: 'present' | 'past' | 'future';
}

export const WaitingStage: React.FC<WaitingStageProps> = (props) => {
  const t = useAppTranslation();
  const router = useRouter();

  return (
    <WaitingStageStyled
      key={props.status}
      className={props.status}
      linearGradient="isWaitingLinearGradient"
    >
      <svg className="linearGradientSvg" width="0" height="0">
        <defs>
          <linearGradient
            id="isWaitingLinearGradient"
            gradientTransform="rotate(90)"
          >
            {props.status === 'present' ? (
              <stop offset="100%" stopColor={colors.violet[100]} />
            ) : (
              <>
                <stop offset="0%" stopColor={colors.powderBlue[800]} />
                <stop offset="100%" stopColor={colors.powderBlue[500]} />
              </>
            )}
          </linearGradient>
        </defs>
      </svg>

      <TimelineItem
        heading={t('sections.results.timeline.waiting.heading')}
        body={t('sections.results.timeline.waiting.body')}
        link={{
          label: t('sections.results.timeline.waiting.linkLabel'),
          onClick: () => router.push('/resources'),
        }}
        icon={
          props.status === 'present' ? (
            <Icon name="search" style="solid" />
          ) : (
            <Icon name="check" style="solid" />
          )
        }
        percent={props.status === 'present' ? 75 : 100}
        isCollapseEnabled={props.status === 'present' ? false : true}
        isSmall={props.status === 'past' ? true : false}
      />
    </WaitingStageStyled>
  );
};
