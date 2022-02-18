import { useEffect } from 'react';

import { ArticleCards, Content } from 'app/components/ContentElements';
import { MediaElements } from 'app/components/MediaElements';
import {
  useAppEvents,
  useAppTranslation,
  useAppSelector,
} from 'app/components/Shell';
import { useTestStatus } from 'app/hooks';
import { Icon } from 'components/Icon';
import { Spinner } from 'components/Spinner';
import { Heading, Typography } from 'components/Typography';

import ResultsReadyStyled from './ResultsReady.styles';

export const ResultsReady = () => {
  const t = useAppTranslation();
  const { viewTestResults, fetchReport } = useAppEvents();
  const [{ loadingReport, errorLoadingReport }] = useTestStatus();
  const report = useAppSelector((state) => state.context.tests.report);

  useEffect(() => {
    viewTestResults();
    fetchReport();
  });

  return (
    <ResultsReadyStyled>
      <div className="results-ready__description">
        <Content>{t('pages.results.ready.description')}</Content>
      </div>

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

      {loadingReport && <Spinner data-testid="spinner-report" />}
      {errorLoadingReport &&
        <Typography color="error" level="7" type="heading">
          {t('pages.results.ready.report.error')}
        </Typography>
      }
      {report &&
        <MediaElements.Pdf
          src={report.pdf}
          thumbnail={{
            src: report.thumbnail,
            alt: t('pages.results.ready.report.pdfThumbnailAlt'),
          }}
        />
      }
      <Heading>{t('pages.resources.section.articles.title')}</Heading>
      <ArticleCards feature="RESULT" />
    </ResultsReadyStyled>
  );
};
