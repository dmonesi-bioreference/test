import { useEffect } from 'react';

import { AppLayout } from 'app/components/AppLayout';
import { ArticleCards } from 'app/components/ContentElements';
import { MediaElements } from 'app/components/MediaElements';
import {
  useAppEvents,
  useAppTranslation,
  useAppSelector,
} from 'app/components/Shell';
import { Button } from 'components/Button';
import { Icon } from 'components/Icon';
import { PageSection } from 'components/PageSection';
import { Heading, Typography } from 'components/Typography';

import ResultsReadyStyled from './ResultsReady.styles';

export const ResultsReady = () => {
  const t = useAppTranslation();
  const { viewTestResults } = useAppEvents();
  const report = useAppSelector((state) => state.context.tests.report);

  useEffect(() => {
    viewTestResults();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <AppLayout containsCards hasPatientBanner>
      <PageSection>
        <ResultsReadyStyled>
          <div className="results-ready__nav">
            <Button href="/demo" prefix={<Icon name="chevron-left" />}>
              <Typography type="body">
                {t('pages.results.ready.home')}
              </Typography>
            </Button>
          </div>

          <div className="results-ready__heading">
            <Heading level="1" color="minor">
              {t('pages.results.ready.title')}
            </Heading>
            <Icon name="share" style="solid" />
          </div>

          <div className="results-ready__attention">
            <Icon name="exclamation-circle" />
            <Heading level="3" color="minor">
              {t('pages.results.ready.report.attention')}
            </Heading>
          </div>

          <div className="results-ready__description">
            <Typography type="body">
              {t('pages.results.ready.report.description')}
            </Typography>
          </div>

          <MediaElements.Pdf
            src={report.src}
            thumbnail={{
              src: report.thumbnail,
              alt: t('pages.results.ready.report.pdfThumbnailAlt'),
            }}
          />
        </ResultsReadyStyled>
        <Heading>{t('pages.resources.section.articles.title')}</Heading>
        <ArticleCards feature="RESULTS" />
      </PageSection>
    </AppLayout>
  );
};
