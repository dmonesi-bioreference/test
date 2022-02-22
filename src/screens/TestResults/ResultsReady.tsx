import { useEffect, useState } from 'react';

import { ArticleCards, AudioCard, Content } from 'app/components/ContentElements';
import { MediaElements } from 'app/components/MediaElements';
import {
  useAppEvents,
  useAppTranslation,
  useAppSelector,
} from 'app/components/Shell';
import { useTestStatus } from 'app/hooks';
import { Accordion } from 'components/Accordion';
import { Icon } from 'components/Icon';
import { Spinner } from 'components/Spinner';
import { Heading, Typography } from 'components/Typography';
import { Theme } from 'styles';

import ResultsReadyStyled, { ResultsReadyReportStyled } from './ResultsReady.styles';

export const ResultsReady = () => {
  const t = useAppTranslation();
  const { viewTestResults, fetchReport, allAudiosRequest } = useAppEvents();
  const [{ loadingReport, errorLoadingReport }] = useTestStatus();
  const report = useAppSelector((state) => state.context.tests.report);

  const [isAccordionCollapsed, setIsAccordionCollapsed] = useState<boolean>(true)

  useEffect(() => {
    viewTestResults();
    fetchReport();
    allAudiosRequest();
  });

  return (
    <ResultsReadyStyled>
      <div className="results-ready__audio">
        {!isAccordionCollapsed && <AudioCard />}
      </div>
      
      <Theme theme='medicalReportTheme'>
        <ResultsReadyReportStyled>
          <div className="results-ready__report_bar"></div>
          <Accordion
            icon={<Icon name="exclamation-circle" />}
            heading={
              <Heading level="3" color="minor">
                {t('pages.results.ready.report.attention')}
              </Heading>
            }
            body={
              <Content withBreaks={true}>
                {t('pages.results.ready.report.description')}
              </Content>
            }
            onCollapse={(bodyVisible) => setIsAccordionCollapsed(!bodyVisible)}
          />
          {loadingReport && <Spinner data-testid="spinner-report" />}
          {errorLoadingReport &&
            <Typography color="error" level="7" type="heading">
              {t('pages.results.ready.report.error')}
            </Typography>
          }
          {report &&
            <Theme theme='healthProfileTheme'>
              <MediaElements.Pdf
                src={report.pdf}
                thumbnail={{
                  src: report.thumbnail,
                  alt: t('pages.results.ready.report.pdfThumbnailAlt'),
                }}
              />
            </Theme>
          }
        </ResultsReadyReportStyled>
      </Theme>

      <Heading>{t('pages.resources.section.articles.title')}</Heading>
      <ArticleCards feature="RESULT" />
    </ResultsReadyStyled>
  );
};
