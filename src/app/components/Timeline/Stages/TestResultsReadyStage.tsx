import { useAppTranslation } from 'app/components/Shell';
import { Icon, TimelineItem } from 'components';
import { colors } from 'styles';

import TestResultsReadyStageStyled from './TestResultsReadyStage.styles';

interface TestResultsReadyStageProps {
  status: 'present' | 'past' | 'future';
}

export const TestResultsReadyStage: React.FC<TestResultsReadyStageProps> = (props) => {
  const t = useAppTranslation();

  return (
    <TestResultsReadyStageStyled
      key={props.status}
      className={props.status}
      linearGradient='TestResultsReadyStageLinearGradient'
    >
      <svg className='linearGradientSvg'>
        <defs>
          <linearGradient id='TestResultsReadyStageLinearGradient' gradientTransform="rotate(90)">
            {props.status === 'past' ? (
              <>
                <stop offset="0%" stopColor={colors.sand[900]} />
                <stop offset="100%" stopColor={colors.coral[300]} />
              </>
            ) : (
              <stop offset="100%" stopColor={colors.sand[100]} />
            )}
          </linearGradient>
        </defs>
      </svg>

      <TimelineItem
        heading={t('sections.results.timeline.testResultsReady.heading')}
        body={props.status === 'past' ? (
            t('sections.results.timeline.testResultsReady.bodyPast')
          ) : (
            t('sections.results.timeline.testResultsReady.body')
        )}
        link={props.status == 'present' ? {
          label: t('sections.results.timeline.testResultsReady.linkLabel'),
          onClick: () => null
        } : undefined}
        icon={<Icon name='phone' style='solid' />}
        isCollapseEnabled={props.status === 'present' ? false : true}
        isSmall={props.status === 'past' ? true : false}
      />
    </TestResultsReadyStageStyled>
  );
}