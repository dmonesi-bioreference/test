import { useAppTranslation } from 'app/components/Shell';
import {
  Card,
  Button,
  Heading,
  Icon,
  CircularProgress,
  Typography
} from 'components';
import { colors, tokens } from 'styles';

import TestStatusStyled from './TestStatus.styles';
import { useTestStatus } from './hooks';

export const TestStatus = () => {
  const [{ isWaiting, percentComplete, lastUpdated, expectedResultsDate }] = useTestStatus();

  const t = useAppTranslation();

  return (
      <TestStatusStyled>
        <CircularProgress
          percent={percentComplete}
          radius={97 / 2}
          strokeWidth={23.25}
          withOuterShadow={true}
          withInsetShadow={true}
          indicatorColor={isWaiting ? [colors.teal[700], colors.teal[800]] : colors.teal[700]}
          strokePadding={4}
          strokePaddingCut={{x: 0, y: -58}}
          icon={
            isWaiting ? (
              <Icon name="search" size="large" />
            ) : (
              <Icon name="document-report" size="large" />
            )
          }
        />
        <Card>
          <header>
            <Button
              kind='link-medium'
              suffix={<Icon name="chevron-right" size="large" />}
              href='/demo/results'
            >
              <div className='header-main'>
                <Heading level='2'>
                  {isWaiting ? (
                      t('sections.results.inProgress')
                    ) : (
                      t('sections.results.ready')
                    )
                  }
                </Heading>
              </div>
              <div className='header-minor'>
                <Heading level='8'>
                  {isWaiting ? (
                      t('sections.results.expected', { expectedResultsDate })
                    ) : (
                      `${t('sections.results.doctorShared').toLowerCase()}.`
                    )
                  }
                </Heading>
              </div>
            </Button>  
          </header>
          <div style={{ marginLeft: tokens.spacingXLarge, marginRight: tokens.spacingXxLarge, marginBottom: tokens.spacingLarge }}>
            <Typography type="body" color="minor">
              {isWaiting ? (
                  t('sections.results.mayVary')
                ) : (
                  t('sections.results.doctorAppointment')
                )
              }.
            </Typography>
          </div>

          <div className="last-updated">
            <Icon name="refresh" />
            <Typography type="body">
              {t('sections.results.updated', { lastUpdated })}
            </Typography>
          </div>
        </Card>
      </TestStatusStyled>
  );
}