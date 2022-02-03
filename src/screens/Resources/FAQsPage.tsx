import Head from 'next/head';
import React, { RefObject, useEffect, useState } from 'react';

import {
  Content,
  useAppEvents,
  useAppSelector,
  useAppState,
  useAppTranslation,
} from 'app';
import {
  ContentBlock,
  Heading,
  PageLayout,
  PageSection,
  ReturnLink,
  Spinner,
  Typography,
} from 'components';
import { tokens } from 'styles';

import ContentPageStyled from './ContentPage.styles';

interface FAQPageProps {
  slug?: string;
  question?: string;
}

export const FAQsPage: React.FC<FAQPageProps> = (props) => {
  const t = useAppTranslation();
  const events = useAppEvents();

  const [faqTitle, setFaqTitle] = useState<string>();
  const [faqLabel, setFaqLabel] = useState<string>();
  const [faqContents, setFaqContents] = useState<
    { ref: RefObject<HTMLDivElement>; title: string; content: string }[]
  >([]);

  const faqs = useAppSelector((state) => state.context.content.FAQs.data);
  const loadingFAQs = useAppState('content.faqs.fetchingSingleFAQ');
  const errorFetchingFAQs = useAppState('content.faqs.failure');

  useEffect(() => {
    const faq = faqs.find((faq) => faq.slug === `/${props.slug}`);
    setFaqTitle(faq ? faq.title : '');
    setFaqLabel(faq ? faq.label : '');
    setFaqContents(
      faq && faq.content
        ? faq.content.map((e) => ({
            title: e.title,
            content: e.content,
            ref: React.createRef(),
          }))
        : []
    );
  }, [faqs, props]);

  useEffect(() => {
    if (faqContents.length == 0) {
      events.fetchSingleFAQ({ FAQSlug: props.slug as string });
    }
  }, [faqContents, events, props]);

  useEffect(() => {
    faqContents
      .find((content) => content.title.trim() == props.question)
      ?.ref.current?.scrollIntoView();
  });

  return (
    <>
      <Head>
        <title>{t('pages.faqs.pageTitle')}</title>
      </Head>
      <PageLayout theme="resourcesTheme">
        <ContentPageStyled>
          <ReturnLink label="Return" href="/demo/resources" />
          <PageSection
            header={
              <div style={{ marginBottom: tokens.spacingXSmall }}>
                <div style={{ marginBottom: tokens.spacingXSmall }}>
                  <Typography type="label" labelType="title" color="blue">
                    {faqLabel}
                  </Typography>
                </div>
                <Heading level="1">{faqTitle}</Heading>
              </div>
            }
          >
            {loadingFAQs ? (
              <Spinner />
            ) : errorFetchingFAQs ? (
              <Typography color="error" level="7" type="heading">
                Error fetching FAQs.
              </Typography>
            ) : (
              <>
                {faqContents &&
                  faqContents.map((contentBlock, index) => (
                    <div ref={contentBlock.ref} key={index}>
                      <ContentBlock title={contentBlock.title}>
                        <Content>{contentBlock.content}</Content>
                      </ContentBlock>
                    </div>
                  ))}
              </>
            )}
          </PageSection>
        </ContentPageStyled>
      </PageLayout>
    </>
  );
};
