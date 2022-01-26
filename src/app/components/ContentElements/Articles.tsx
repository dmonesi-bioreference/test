import { useEffect } from 'react';

import { useTestStatus } from 'app/components/Timeline/hooks';
import InTheNICUImage from 'assets/images/jpg/InTheNICU.jpg';
import { Button, Carousel, LinkCard } from 'components';
import { tokens } from 'styles';

import { useAppEvents, useAppSelector, useAppTranslation } from '../Shell';

import { Content } from './Content';

export const Articles = () => {
  const t = useAppTranslation();
  const events = useAppEvents();

  useEffect(() => {
    events.fetchAllArticles();
  }, [events]);

  const articles = useAppSelector(
    (state) => state.context.content.articles.data
  );

  const [{ isWaiting, isResultsReady, isAfterAppointment, isViewed }] =
    useTestStatus();

  const articlesByTestStatus = () => {
    if (isWaiting) {
      return articles.filter((article) => article.introduceAt === 'WAITING');
    } else if (isResultsReady) {
      return articles.filter((article) => article.introduceAt === 'READY');
    } else if (isAfterAppointment) {
      return articles.filter((article) => article.introduceAt === 'DISCUSSED');
    } else if (isViewed) {
      return articles.filter((article) => article.introduceAt === 'VIEWED');
    } else {
      return articles;
    }
  };

  const articleCards = articlesByTestStatus().map((article) => {
    return (
      <LinkCard
        key={article.id}
        variant="article"
        imageSrc={InTheNICUImage}
        imageAlt="alt-text"
        label={article.label}
        heading={article.title}
        themeColor={tokens.colorPrimary}
      >
        <div style={{ marginBottom: tokens.spacingLarge }}>
          <Content>{article.blurb}</Content>
        </div>
        <Button kind="primary" href={`/demo/article/${article.id}`}>
          {t('sections.resources.story.readMore')}
        </Button>
      </LinkCard>
    );
  });

  return (
    <Carousel
      showIndicator={false}
      externalControl={{
        prevText: t('pages.resources.section.articles.prevArticle'),
        nextText: t('pages.resources.section.articles.nextArticle'),
      }}
      enablePeak={true}
    >
      {articleCards}
    </Carousel>
  );
};
