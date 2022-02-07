import { useEffect } from 'react';

import { Carousel, FaqCard } from 'components';

import { useAppEvents, useAppSelector, useAppTranslation } from '../Shell';
import { useTestStatus } from '../Timeline/hooks';

import { Content } from './Content';

export const FAQCards = () => {
  const t = useAppTranslation();
  const { allFaqsRequest } = useAppEvents();

  useEffect(allFaqsRequest, [allFaqsRequest]);

  const faqs = useAppSelector((state) => state.context.requests.allFaqs.values);

  const [{ isWaiting, isResultsReady, isAfterAppointment, isViewed }] =
    useTestStatus();

  const faqsByTestStatus = () => {
    if (isWaiting) {
      return faqs.filter((faq) => faq.introduceAt === 'WAITING');
    } else if (isResultsReady) {
      return faqs.filter((faq) => faq.introduceAt === 'READY');
    } else if (isAfterAppointment) {
      return faqs.filter((faq) => faq.introduceAt === 'DISCUSSED');
    } else if (isViewed) {
      return faqs.filter((faq) => faq.introduceAt === 'VIEWED');
    } else {
      return faqs;
    }
  };

  const FAQSetsByPriority = faqsByTestStatus()
    .slice()
    .sort((a, b) => {
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
  );
};
