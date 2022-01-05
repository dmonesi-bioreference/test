import { useEffect } from 'react';

import { MediaElements, useAppEvents, useAppTranslation, useAppSelector } from 'app';
import {
  Button,
  Heading,
  Icon,
  Typography,
  PageLayout,
  PageSection,
  UserHeader
} from 'components';

import ResultsReadyStyled from './ResultsReady.styles';

export const ResultsReady = () => {
  const t = useAppTranslation();
  const { viewTestResults } = useAppEvents();
  const report = useAppSelector((state) => state.context.test.report);

  useEffect(() => {
    viewTestResults();
  });

  return (
    <PageLayout containsCards={true}>
      <PageSection
        header={
          <UserHeader
            title={t('sections.results.childsName')}
            name="Lisa Consuela Jackson"
          />
        }
      >
        <ResultsReadyStyled>
          <div className='results-ready__nav'>
            <Button href='/demo' prefix={<Icon name='chevron-left' />}>
              <Typography type='body'>
                {t('pages.results.ready.home')}
              </Typography>
            </Button>
          </div>
          
          <div className='results-ready__heading'>
            <Heading level='1' color='minor'>
              {t('pages.results.ready.title')}
            </Heading>
            <Icon name='share' style='solid' />
          </div>

          <div className='results-ready__attention'>
            <Icon name='exclamation-circle' />
            <Heading level='3' color='minor'>
              {t('pages.results.ready.report.attention')}
            </Heading>
          </div>
          
          <div className='results-ready__description'>
            <Typography type='body'>
              {t('pages.results.ready.report.description')}
            </Typography>
          </div>

          <MediaElements.Pdf
            src={report.src}
            thumbnail={{
              src: report.thumbnail,
              alt: t('pages.results.ready.report.pdfThumbnailAlt')
            }}
          />
        </ResultsReadyStyled>
      </PageSection>
    </PageLayout>
  );
};
