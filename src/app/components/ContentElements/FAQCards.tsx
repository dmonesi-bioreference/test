import { useEffect } from 'react';

import { Carousel, FaqCard, Spinner, Typography } from 'components';

import { useAppEvents, useAppTranslation } from '../Shell';

import { Content } from './Content';
import { useContent, useContentByTestStatus } from './hooks';

export const FAQCards = () => {
  const t = useAppTranslation();
  const { allFaqsRequest } = useAppEvents();

  useEffect(allFaqsRequest, [allFaqsRequest]);

  const [{ faqs, loadingFAQs, errorFetchingFAQs }] = useContent();

  const faqsByTestStatus = useContentByTestStatus(faqs) as FAQ[];

  const FAQSetsByPriority = faqsByTestStatus.slice().sort((a, b) => {
    if (!a.priority) {
      return 1;
    } else if (!b.priority) {
      return -1;
    } else {
      return a.priority < b.priority ? 1 : -1;
    }
  });

  const FAQCards = FAQSetsByPriority.map((faq) => {
    return (
      <FaqCard
        key={faq.id}
        title={faq.title}
        href={`/demo/faq${faq.slug}`}
        label={<Content>{faq.blurb}</Content>}
        questions={
          faq.content
            ? faq.content.slice(0, 3).map((contentBlock) => contentBlock.title)
            : []
        }
      />
    );
  });

  return (
    <div>
      {loadingFAQs ? <Spinner /> : null}
      {errorFetchingFAQs ? (
        <Typography color="error" level="7" type="heading">
          {t('pages.resources.section.faqs.error')}
        </Typography>
      ) : null}

      {faqsByTestStatus.length !== 0 ? (
        <Carousel
          showIndicator={false}
          externalControl={{
            prevText: t('pages.resources.section.faqs.prevFAQ'),
            nextText: t('pages.resources.section.faqs.nextFAQ'),
          }}
          enablePeak={true}
        >
          {FAQCards}
        </Carousel>
      ) : null}
    </div>
  );
};
