
import { useState, useEffect } from 'react';

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
import { LabStates, TestStatusProps } from './types';

export function TestStatus(p: Props<TestStatusProps>) {
  const t = useAppTranslation();
  const [percent, setPercent] = useState(0);

  const isWaiting = p.labState != 'canceled' && p.labState != 'report ready' && p.labState != 'updated report';

  useEffect(() => {
    if (!isWaiting) setPercent(100);
    else {
      LabStates.find((e, index) => {
        if (e === p.labState) setPercent((100 / (LabStates.length - 2)) * (index + 1));
      });
    }
  }, [isWaiting, p.labState]);

  return (
      <TestStatusStyled>
        <CircularProgress
          percent={percent}
          indicatorColor={isWaiting ? [colors.teal[700], colors.teal[800]] : colors.teal[700]}
          containerColor={colors.white}
          containerBottomCut={58}
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
                      t('sections.results.expected', { expectedResultsDate: p.expectedResultsDate })
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
              {t('sections.results.updated', { lastUpdated: p.lastUpdated })}
            </Typography>
          </div>
        </Card>
      </TestStatusStyled>
  );
}