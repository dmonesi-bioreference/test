import { useEffect } from 'react';

import { useContent } from 'app/hooks';
import { Carousel } from 'components/Carousel';
import { ContentCard } from 'components/ContentCard';
import { Spinner } from 'components/Spinner';
import { Typography } from 'components/Typography';
import { tokens } from 'styles';

import { useAppEvents, useAppTranslation } from '../Shell';

import { Content } from './Content';

export const OnBoardingStories = () => {
  const t = useAppTranslation();
  const { allOnBoardingCardsRequest } = useAppEvents();

  useEffect(allOnBoardingCardsRequest, [allOnBoardingCardsRequest]);

  const [
    { loadingOnBoardingCards, errorFetchingOnBoardingCards, onBoardingCards },
  ] = useContent();

  const onBoardingCardsForCarousel = onBoardingCards.map((onBoardingCard) => {
    return (
      <ContentCard
        key={onBoardingCard.id}
        variant="onboarding"
        imageSrc={onBoardingCard.bannerImage?.fullpath as string}
        imageAlt={onBoardingCard.bannerImage?.altText}
        label={onBoardingCard.label}
        heading={onBoardingCard.title}
      >
        <div style={{ marginBottom: tokens.spacingLarge }}>
          <Content>{onBoardingCard.blurb}</Content>
        </div>
      </ContentCard>
    );
  });

  return (
    <div
      style={{
        marginTop: tokens.spacingXxLarge,
        marginBottom: tokens.spacingXxLarge,
      }}
    >
      {loadingOnBoardingCards && <Spinner />}
      {errorFetchingOnBoardingCards ? (
        <Typography color="error" level="7" type="heading">
          {t('pages.onboarding.error')}
        </Typography>
      ) : null}

      {onBoardingCards.length !== 0 ? (
        <Carousel
          showIndicator={false}
          externalControl={{
            prevText: t('pages.onboarding.previousStory'),
            nextText: t('pages.onboarding.nextStory'),
          }}
          enablePeak={true}
        >
          {onBoardingCardsForCarousel}
        </Carousel>
      ) : null}
    </div>
  );
};
