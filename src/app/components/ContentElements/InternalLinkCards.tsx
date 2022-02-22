import camelCase from 'lodash/camelCase';
import { useEffect } from 'react';

import { useAppEvents, useAppTranslation } from 'app/components/Shell';
import { ContentCard } from 'components/ContentCard';
import { Grid } from 'components/Grid';
import { Spinner } from 'components/Spinner';
import { Typography } from 'components/Typography';
import { isTheme, Theme } from 'styles';

import { Content } from './Content';
import InternalLinkCardsStyled from './InternalLinkCards.styles';
import { useContent } from './hooks';

export const InternalLinkCards = () => {
  const t = useAppTranslation();

  const { allInternalLinkCardsRequest } = useAppEvents();

  const [
    {
      internalLinkCards,
      loadingInternalLinkCards,
      errorLoadingInternalLinkCards,
    },
  ] = useContent();

  useEffect(allInternalLinkCardsRequest, [allInternalLinkCardsRequest]);

  if (loadingInternalLinkCards) {
    return <Spinner />;
  }

  if (errorLoadingInternalLinkCards) {
    return (
      <Typography color="error" level="7" type="heading">
        {t('pages.resources.section.articles.error')}
      </Typography>
    );
  }

  return (
    <InternalLinkCardsStyled>
      <Grid>
        {internalLinkCards.map((internalLinkCard, index) => {
          const theme = `${camelCase(internalLinkCard.label)}Theme`;
          return (
            <Theme key={index} theme={isTheme(theme) ? theme : 'defaultTheme'}>
              <ContentCard
                variant="link"
                href={`/${internalLinkCard.label
                  .split(' ')
                  .join('-')
                  .toLowerCase()}`}
                imageSrc={internalLinkCard.bannerImage?.fullpath as string}
                imageAlt="alt-text"
                label={internalLinkCard.label.toUpperCase()}
                prefixIcon={internalLinkCard.label
                  .split(' ')
                  .join('-')
                  .toLowerCase()}
                heading={internalLinkCard.title}
              >
                <Content>{internalLinkCard.blurb}</Content>
              </ContentCard>
            </Theme>
          );
        })}
      </Grid>
    </InternalLinkCardsStyled>
  );
};
