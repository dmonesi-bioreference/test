import { useEffect } from 'react';

import { ArticleCards, Content } from 'app/components/ContentElements';
import { MediaElements } from 'app/components/MediaElements';
import {
  useAppEvents,
  useAppTranslation,
  useAppSelector,
} from 'app/components/Shell';
import { Icon } from 'components/Icon';
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
    <ResultsReadyStyled>
      <div className="results-ready__description">
        <Content>
          {t('pages.results.ready.description')}
        </Content>
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

      <MediaElements.Pdf
        src={report.src}
        thumbnail={{
          src: report.thumbnail,
          alt: t('pages.results.ready.report.pdfThumbnailAlt'),
        }}
      />
      <Heading>{t('pages.resources.section.articles.title')}</Heading>
      <ArticleCards feature="RESULTS" />
    </ResultsReadyStyled>
  );
};
