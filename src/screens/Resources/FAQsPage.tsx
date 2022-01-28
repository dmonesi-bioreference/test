import React, { useEffect } from 'react';

import {
  Content,
  useAppEvents,
  useAppSelector,
  useAppState,
  useAppTranslation,
} from 'app';
import {
  Heading,
  PageLayout,
  PageSection,
  ReturnLink,
  Spinner,
  Typography,
} from 'components';
import { tokens } from 'styles';

import ContentPageStyled from './ContentPage.styles';

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
        {faq.content &&
          faq.content.map((contentBlock, index) => (
            <React.Fragment key={index}>
              <Heading level="3">{contentBlock.title}</Heading>
              <Content>{contentBlock.content}</Content>
            </React.Fragment>
          ))}
      </div>
    );
  });

  return (
    <PageLayout theme="resourcesTheme">
      <ContentPageStyled>
        <ReturnLink label="Return" href="/demo/resources" />
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
      </ContentPageStyled>
    </PageLayout>
  );
};
