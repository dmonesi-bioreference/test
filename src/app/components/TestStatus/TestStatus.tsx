import { remToPx } from 'polished';

import { useAppTranslation } from 'app/components/Shell';
import { useTestStatus } from 'app/hooks';
import {
  Button,
  Card,
  CircularProgress,
  Heading,
  Icon,
  Spinner,
  Typography,
} from 'components';
import { colors, tokens } from 'styles';

import TestStatusStyled from './TestStatus.styles';

export const TestStatus = () => {
  const [
    { notLoaded, loading, errorLoading, isWaiting, test },
  ] = useTestStatus();

  const t = useAppTranslation();

  if (notLoaded) {
    return (
      <Card>
        <Heading level='7'>{t('sections.results.notLoaded')}</Heading>
      </Card>
    );
  }

  if (loading) {
    return (
      <Card>
        <Spinner data-testid="spinner-testStatus" />
      </Card>
    );
  }

  if (errorLoading || !test) {
    return (
      <Card>
        <Heading color="error" level="7">
          {t('sections.results.error')}
        </Heading>
      </Card>
    );
  }

  const getMinorHeading = () => {
    if (isWaiting) {
      return test.expectedResultsDate
        ? t('sections.results.expected', { expectedResultsDate: test.expectedResultsDate })
        : t('sections.results.checkBackSoon');
    }

    return `${t('sections.results.doctorShared').toLowerCase()}.`;
  }

  return (
    <TestStatusStyled>
      <CircularProgress
        percent={test.percentComplete}
        radius={parseInt(remToPx(tokens.spacingXxLarge), 10)}
        strokeWidth={parseInt(remToPx(tokens.spacingLarge), 10)}
        withOuterShadow={true}
        withInsetShadow={true}
        indicatorColor={
          isWaiting
            ? [colors.indigo[800], colors.indigo[600]]
            : colors.indigo[800]
        }
        strokePadding={parseInt(remToPx(tokens.spacingXxSmall), 10)}
        strokePaddingCut={{
          x: 0,
          y: -(parseInt(remToPx(tokens.spacingXxLarge), 10) * 1.2),
        }}
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
            kind="link-medium"
            suffix={<Icon name="chevron-right" size="large" />}
            href="/test-results"
          >
            <div className="test-status__header-main">
              <Heading level="2">
                {isWaiting
                  ? t('sections.results.inProgress')
                  : t('sections.results.ready')}
              </Heading>
            </div>
            <div className="test-status__header-minor">
              <Heading level="8">
                {getMinorHeading()}
              </Heading>
            </div>
          </Button>
        </header>
        <div
          style={{
            marginLeft: tokens.spacingXLarge,
            marginRight: tokens.spacingXxLarge,
            marginBottom: tokens.spacingLarge,
          }}
        >
          <Typography type="body" color="minor">
            {isWaiting
              ? t('sections.results.mayVary')
              : t('sections.results.doctorAppointment')}
            .
          </Typography>
        </div>

        {/* Removed until decided what info 'last updated' will need to represent */}
        {/* <div className="test-status__last-updated">
          <Icon name="refresh" />
          <Typography type="body">
            {t('sections.results.updated', { lastUpdated })}
          </Typography>
        </div> */}
      </Card>
    </TestStatusStyled>
  );
};
