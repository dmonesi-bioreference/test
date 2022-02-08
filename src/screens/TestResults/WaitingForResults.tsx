import { PatientBanner, useAppState, useAppTranslation } from 'app';
import { Card, CircularProgress, PageLayout, PageSection } from 'components';
import { Typography, Heading } from 'components/Typography';
import { colors } from 'styles';

import WaitingForResultsStyled from './WaitingForResults.styles';
import { useTestResults } from './hooks';

export const WaitingForResults = () => {
  const t = useAppTranslation();
  const [{ percentComplete, expectedResultsDate }] = useTestResults();
  const requesting = useAppState('requests.identityProfile.requesting');

  return (
    <PageLayout
      containsCards={true}
      customHeader={<PatientBanner />}
      theme="healthProfileTheme"
      title={t('pages.results.waiting.title')}
      loading={requesting}
    >
      <PageSection>
        <WaitingForResultsStyled>
          <Heading level="7" color="minor">
            {t('pages.results.waiting.indicatorCard.heading')}
          </Heading>
          <Card>
            <CircularProgress
              percent={percentComplete}
              indicatorColor={colors.powderBlue[700]}
              trackColor={colors.powderBlue[200]}
              strokeWidth={6.5}
              radius={38 / 2}
            />
            <div>
              <Heading level="3" color="minor">
                {t('pages.results.waiting.indicatorCard.title')}
              </Heading>
              <Typography type="body" level="8" color="minor">
                {t('pages.results.waiting.indicatorCard.subTitle', {
                  expectedResultsDate,
                })}
              </Typography>
            </div>
          </Card>
          <Heading level="7" color="minor">
            {t('pages.results.waiting.article.heading')}.
          </Heading>
        </WaitingForResultsStyled>
      </PageSection>
    </PageLayout>
  );
};
