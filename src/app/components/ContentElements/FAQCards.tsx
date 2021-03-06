import { useEffect } from 'react';

import { FaqCard } from 'app/components/FaqCard';
import {
  useContent,
  useContentByPriority,
  useContentByTestStatus,
} from 'app/hooks';
import { Card } from 'components/Card';
import { Carousel } from 'components/Carousel';
import { Typography } from 'components/Typography';

import { useAppEvents, useAppTranslation } from '../Shell';

import { Content } from './Content';

export const FAQCards = () => {
  const t = useAppTranslation();
  const { allFaqsRequest } = useAppEvents();

  useEffect(allFaqsRequest, [allFaqsRequest]);

  const [{ faqs, loadingFAQs, errorFetchingFAQs }] = useContent();

  const faqsByTestStatus = useContentByTestStatus(faqs);
  const FAQSetsByPriority = useContentByPriority(faqsByTestStatus);

  const FAQCards = FAQSetsByPriority.map((faq) => {
    return (
      <FaqCard
        key={faq.id}
        title={faq.title}
        href={`/faq${faq.slug}`}
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
      {loadingFAQs && <Card isLoading />}
      {errorFetchingFAQs ? (
        <Typography color="error" level="7" type="heading">
          {t('pages.resources.section.faqs.error')}
        </Typography>
      ) : null}

      {faqsByTestStatus.length !== 0 ? (
        <div data-testid="resources--faqs-carousel">
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
        </div>
      ) : null}
    </div>
  );
};
