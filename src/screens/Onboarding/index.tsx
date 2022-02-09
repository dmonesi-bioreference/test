import Head from 'next/head';

import { useAppTranslation } from 'app/components/Shell';
import AcademicResearch from 'assets/images/png/AcademicResearch.png';
import ResultsToProvider1_4 from 'assets/images/png/ResultsToProvider1_4.png';
import { ActionGroup } from 'components/ActionGroup';
import { Button } from 'components/Button';
import { Carousel } from 'components/Carousel';
import { LinkCard } from 'components/LinkCard';
import { PageLayout } from 'components/PageLayout';

export const Onboarding = () => {
  const t = useAppTranslation();

  const articleCardSpecs = [
    {
      imageSrc: AcademicResearch,
      imageTitle: 'Academic Research',
      label: t('pages.onboarding.stories.1.label'),
      heading: t('pages.onboarding.stories.1.heading'),
      body: t('pages.onboarding.stories.1.description'),
    },
    {
      imageSrc: ResultsToProvider1_4,
      imageTitle: 'Results To Provider',
      label: t('pages.onboarding.stories.2.label'),
      heading: t('pages.onboarding.stories.2.heading'),
      body: t('pages.onboarding.stories.2.description'),
    },
  ];

  return (
    <>
      <Head>
        <title>{t('pages.onboarding.pageTitle')}</title>
      </Head>
      <PageLayout containsCards isWithoutFooter>
        <Carousel>
          {articleCardSpecs.map((articleCardSpec, i) => (
            <LinkCard
              variant="article"
              key={i}
              imageSrc={articleCardSpec.imageSrc}
              imageAlt={articleCardSpec.imageTitle}
              label={articleCardSpec.label}
              heading={articleCardSpec.heading}
              body={articleCardSpec.body}
            />
          ))}
        </Carousel>
        <ActionGroup>
          <Button kind="primary" href="/demo/authentication-form">
            {t('pages.onboarding.actions.primary.label')}
          </Button>
        </ActionGroup>
      </PageLayout>
    </>
  );
};
