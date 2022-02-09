import { AppLayout } from 'app/components/AppLayout';
import { ArticleCards } from 'app/components/ContentElements';
import { useAppState, useAppTranslation } from 'app/components/Shell';
import { Card } from 'components/Card';
import { CircularProgress } from 'components/CircularProgress';
import { PageSection } from 'components/PageSection';
import { Typography, Heading } from 'components/Typography';
import { colors } from 'styles';

import WaitingForResultsStyled from './WaitingForResults.styles';
import { useTestResults } from './hooks';

export const WaitingForResults = () => {
  const t = useAppTranslation();
  const [{ percentComplete, expectedResultsDate }] = useTestResults();
  const requesting = useAppState('requests.identityProfile.requesting');

  return (
    <AppLayout
      containsCards
      hasPatientBanner
      theme="healthProfileTheme"
      title={t('pages.results.waiting.title')}
      isLoading={requesting}
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
        <Heading>{t('pages.resources.section.articles.title')}</Heading>
        <ArticleCards feature="RESULTS" />
      </PageSection>
    </AppLayout>
  );
};
