import { MainNavPageLayout } from 'app/components/AppLayout';
import { ArticleCards } from 'app/components/ContentElements/ArticleCards';
import { useAppTranslation } from 'app/components/Shell';
import { useTestStatus } from 'app/hooks';
import { Card } from 'components/Card';
import { CircularProgress } from 'components/CircularProgress';
import { Grid } from 'components/Grid';
import { PageSection } from 'components/PageSection';
import { Typography, Heading } from 'components/Typography';
import { colors } from 'styles';

import WaitingForResultsStyled from './WaitingForResults.styles';

export const WaitingForResults = (isLoading) => {
  const t = useAppTranslation();
  const [{ test }] = useTestStatus();

  return (
    <WaitingForResultsStyled>
      <MainNavPageLayout
        title={t('pages.results.waiting.title')}
        isLoading={isLoading}
        theme="healthProfileTheme"
      >
        <Grid>
          <Typography type="body" level="7">
            {t('pages.results.waiting.indicatorCard.heading')}
          </Typography>

          <Card>
            <CircularProgress
              percent={test ? test.percentComplete : 0}
              indicatorColor={colors.powderBlue[700]}
              trackColor={colors.powderBlue[200]}
              strokeWidth={6.5}
              radius={38 / 2}
            />
            <div>
              <Heading level="3" color="minor">
                {t('pages.results.waiting.indicatorCard.title')}
              </Heading>
              <Typography type="body">
                {test && test.expectedResultsDate
                  ? t('sections.results.expected', {
                      expectedResultsDate: test.expectedResultsDate,
                    })
                  : t('sections.results.checkBackSoon')}
              </Typography>
            </div>
          </Card>

          <Typography type="body" level="7">
            {t('pages.results.waiting.article.heading')}.
          </Typography>
        </Grid>

        <PageSection title={t('pages.resources.section.articles.title')}>
          <ArticleCards feature="RESULT" />
        </PageSection>
      </MainNavPageLayout>
    </WaitingForResultsStyled>
  );
};
