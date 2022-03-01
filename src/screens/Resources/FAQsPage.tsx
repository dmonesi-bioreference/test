import Head from 'next/head';
import React, { RefObject, useEffect, useState } from 'react';

import { ContentPageLayout } from 'app/components/AppLayout';
import { ContentWithPimcore } from 'app/components/ContentElements';
import {
  useAppEvents,
  useAppSelector,
  useAppState,
  useAppTranslation,
} from 'app/components/Shell';
import { ContentBlock } from 'components/ContentBlock';
import { PageSection } from 'components/PageSection';
import { Spinner } from 'components/Spinner';
import { Typography } from 'components/Typography';

interface FAQPageProps {
  slug?: string;
  question?: string;
}

export const FAQsPage: React.FC<FAQPageProps> = (props) => {
  const t = useAppTranslation();
  const { setFaqSlug, singleFaqRequest } = useAppEvents();

  const [faqTitle, setFaqTitle] = useState<string>();
  const [faqLabel, setFaqLabel] = useState<string>();
  const [faqContents, setFaqContents] = useState<
    { ref: RefObject<HTMLDivElement>; title: string; content: string }[]
  >([]);

  const { slug, question } = props;

  const loadingFAQs = useAppState('requests.singleFaq.requesting');
  const errorFetchingFAQs = useAppState('requests.singleFaq.failure');
  const faqs = useAppSelector((state) => state.context.requests.allFaqs.values);
  const singleFaq = useAppSelector(
    (state) => state.context.requests.singleFaq.values
  );

  useEffect(() => {
    setFaqTitle(singleFaq.title);
    setFaqLabel(singleFaq.label);
    setFaqContents(
      singleFaq.content
        ? singleFaq.content.map((e) => ({
            title: e.title,
            content: e.content,
            ref: React.createRef(),
          }))
        : []
    );
  }, [singleFaq]);

  useEffect(() => {
    if (faqs.length == 0) {
      setFaqSlug({
        FAQSlug: slug as string,
      });
      singleFaqRequest();
    } else {
      const faq = faqs.find((faq) => faq.slug === `/${slug}`);
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
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [slug, faqs, setFaqSlug, singleFaqRequest]);

  useEffect(() => {
    faqContents
      .find((content) => content.title.trim() == question)
      ?.ref.current?.scrollIntoView();
  });

  return (
    <>
      <Head>
        <title>{t('pages.faqs.pageTitle')}</title>
      </Head>
      <ContentPageLayout label={faqLabel} title={faqTitle}>
        {loadingFAQs ? (
          <PageSection centered verticalPadding="large">
            <Spinner />
          </PageSection>
        ) : errorFetchingFAQs ? (
          <PageSection centered verticalPadding="large">
            <Typography color="error" level="7" type="heading">
              Error fetching FAQs.
            </Typography>
          </PageSection>
        ) : (
          renderContentOf(faqContents)
        )}
      </ContentPageLayout>
    </>
  );
};

const renderContentOf = (
  faqContents: {
    ref: RefObject<HTMLDivElement>;
    title: string;
    content: string;
  }[]
) => {
  const contents: React.ReactNode[] = [];
  if (faqContents) {
    {
      faqContents.map((contentBlock, index) =>
        contents.push(
          <PageSection>
            <ContentBlock title={contentBlock.title} scale="large" key={index}>
              <ContentWithPimcore>{contentBlock.content}</ContentWithPimcore>
            </ContentBlock>
          </PageSection>
        )
      );
    }
  }
  return contents;
};
