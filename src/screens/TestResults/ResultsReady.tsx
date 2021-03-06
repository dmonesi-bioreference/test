import { useEffect } from 'react';

import { MainNavPageLayout } from 'app/components/AppLayout';
import {
  ArticleCards,
  AudioCard,
  Content,
} from 'app/components/ContentElements';
import { MediaElements } from 'app/components/MediaElements';
import {
  useAppEvents,
  useAppTranslation,
} from 'app/components/Shell';
import { useTestStatus } from 'app/hooks';
import { Icon } from 'components/Icon';
import { Spinner } from 'components/Spinner';
import { Heading, Typography } from 'components/Typography';

import { Grid, PageSection } from '../../components';

import ResultsReadyStyled from './ResultsReady.styles';

export const ResultsReady = (isLoading) => {
  const t = useAppTranslation();
  const { viewTestResults, loadReport, allAudiosRequest } = useAppEvents();
  const [{ test, loadingReport, errorLoadingReport }] = useTestStatus();

  useEffect(() => {
    viewTestResults();
    allAudiosRequest();
  });

  useEffect(() => {
    if (test && !test.report) {
      loadReport({ testId: test.id });
    }
  }, [test, loadReport]);

  return (
    <ResultsReadyStyled>
      <MainNavPageLayout
        title={t('pages.results.ready.title')}
        isLoading={isLoading}
        theme="healthProfileTheme"
      >
        <Grid>
          <Content>{t('pages.results.ready.description')}</Content>
          <AudioCard />
        </Grid>

        <div>
          <div className="results-ready__report-attention">
            <Icon name="exclamation-circle" />
            <Heading level="3" color="minor">
              {t('pages.results.ready.report.attention')}
            </Heading>
          </div>

          <div className="results-ready__report-description">
            <Typography type="body">
              {t('pages.results.ready.report.description')}
            </Typography>
          </div>
        </div>

        <PageSection centered>
          {loadingReport && <Spinner data-testid="spinner-report" />}
          {errorLoadingReport &&
            <Typography color="error" level="7" type="heading">
              {t('pages.results.ready.report.error')}
            </Typography>
          }
          {test && test.report &&
            <MediaElements.Pdf
              src={test.report.pdf}
              thumbnail={{
                src: test.report.thumbnail,
                alt: t('pages.results.ready.report.pdfThumbnailAlt'),
              }}
            />
          }
        </PageSection>

        <PageSection title={t('pages.resources.section.articles.title')}>
          <ArticleCards feature="RESULT" />
        </PageSection>
      </MainNavPageLayout>
    </ResultsReadyStyled>
  );
};
