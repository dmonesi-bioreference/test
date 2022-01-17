import { useEffect } from 'react';
import ReactHtmlParser from 'react-html-parser';

import {
  useAppEvents,
  useAppSelector,
  useAppState,
  useAppTranslation,
} from 'app';
import {
  Heading,
  PageLayout,
  PageSection,
  Spinner,
  Typography,
} from 'components';
import { tokens } from 'styles';

export const FAQsPage = () => {
  const t = useAppTranslation();
  const events = useAppEvents();

  useEffect(() => {
    events.fetchAllFAQs();
  }, [events]);

  const faqs = useAppSelector((state) => state.context.content.FAQs.data);
  const loadingFAQs = useAppState('content.faqs.requesting');
  const errorFetchingFAQs = useAppState('content.faqs.failure');

  /* eslint-disable @typescript-eslint/no-unsafe-call */
  const FAQs = faqs.map((faq) => {
    return (
      <div key={faq.id}>
        <div style={{ marginBottom: tokens.spacingLarge }}>
          <Typography type="heading" level="2">
            {faq.title}
          </Typography>
        </div>
        <Typography type="body">
          <div>{ReactHtmlParser(faq.content)}</div>
        </Typography>
      </div>
    );
  });

  return (
    <PageLayout theme="resources">
      <PageSection
        header={
          <div style={{ marginBottom: tokens.spacingXSmall }}>
            <Heading level="1">{t('pages.geneticTestingFAQs.title')}</Heading>
          </div>
        }
      >
        <Typography type="body">
          {t('pages.geneticTestingFAQs.subTitle')}
        </Typography>
        {loadingFAQs ? (
          <Spinner />
        ) : errorFetchingFAQs ? (
          <Typography color="error" level="7" type="heading">
            Error fetching FAQs.
          </Typography>
        ) : (
          FAQs
        )}
      </PageSection>
    </PageLayout>
  );
};
