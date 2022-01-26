import { useAppTranslation } from 'app/components';
import AcademicResearch from 'assets/images/png/AcademicResearch.png';
import ResultsProvider1 from 'assets/images/png/ResultsProvider1.png';
import ResultsToProvider1_4 from 'assets/images/png/ResultsToProvider1_4.png';
import { PageLayout, Button, LinkCard, Carousel } from 'components';

import AuthenticationTokenStyledDiv from './AuthenticationTokenStyledDiv.styles';

export const AuthenticationToken = () => {
  const t = useAppTranslation();

  const articleCardSpecs = [
    {
      imageSrc: AcademicResearch,
      imageTitle: 'Academic Research',
      title: t('sections.authenticationToken.slides.1.title'),
      heading: t('sections.authenticationToken.slides.1.overView'),
      body: t('sections.authenticationToken.slides.1.content'),
    },
    {
      imageSrc: ResultsToProvider1_4,
      imageTitle: 'Results To Provider',
      title: t('sections.authenticationToken.slides.2.title'),
      heading: t('sections.authenticationToken.slides.2.overView'),
      body: t('sections.authenticationToken.slides.2.content'),
    },
    {
      imageSrc: ResultsProvider1,
      imageTitle: 'Results Provider',
      title: t('sections.authenticationToken.slides.3.title'),
      heading: t('sections.authenticationToken.slides.3.overView'),
      body: t('sections.authenticationToken.slides.3.content'),
    },
  ];

  return (
    <PageLayout containsCards={true}>
      <AuthenticationTokenStyledDiv>
        <Carousel>
          {articleCardSpecs.map((articleCardSpec, i) => (
            <LinkCard
              variant='article'
              key={i}
              imageSrc={articleCardSpec.imageSrc}
              imageAlt={articleCardSpec.imageTitle}
              label={articleCardSpec.title}
              heading={articleCardSpec.heading}
              body={articleCardSpec.body}
            />
          ))}
        </Carousel>
        <div className="authentication-form-button-holder">
          <Button kind="primary" href="/demo/authentication-form">
            {t('sections.authenticationToken.buttonText')}
          </Button>
        </div>
      </AuthenticationTokenStyledDiv>
    </PageLayout>
  );
};
