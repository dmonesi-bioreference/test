
import { camelCase } from 'lodash';
import { useEffect } from 'react';

import { useAppEvents, useAppTranslation } from 'app/components/Shell';
import {
  LinkCard,
  Spinner,
  Typography,
} from 'components';
import { Theme } from 'styles';

import { Content } from './Content';
import InternalLinkCardsStyled from './InternalLinkCards.styles';
import { useContent } from './hooks';

export const InternalLinkCards = () => {
  const t = useAppTranslation();
  
  const { allInternalLinkCardsRequest } = useAppEvents();

  const [{ internalLinkCards, loadingInternalLinkCards, errorLoadingInternalLinkCards }] = useContent();

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
      {internalLinkCards.map((internalLinkCard, index) => (
        <Theme
          key={index}
          theme={internalLinkCard.label ? `${camelCase(internalLinkCard.label)}Theme` as Themes : 'defaultTheme'}
        >
          <LinkCard
            variant='link'
            href={`/demo/${internalLinkCard.label.split(' ').join('-').toLowerCase()}`}
            imageSrc={internalLinkCard.bannerImage?.fullpath as string}
            imageAlt='alt-text'
            label={internalLinkCard.label.toUpperCase()}
            prefixIcon={internalLinkCard.label.split(' ').join('-').toLowerCase()}
            heading={internalLinkCard.title}
          >
            <Content>{internalLinkCard.blurb}</Content>
          </LinkCard>
        </Theme>
      ))}
    </InternalLinkCardsStyled>
  );
};