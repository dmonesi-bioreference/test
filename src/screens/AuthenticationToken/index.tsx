import Carousel from 'react-multi-carousel';

import { useAppTranslation } from 'app/components';
import AcademicResearch from 'assets/images/png/AcademicResearch.png';
import ResultsProvider1 from 'assets/images/png/ResultsProvider1.png';
import ResultsToProvider1_4 from 'assets/images/png/ResultsToProvider1_4.png';
import { PageLayout, Button, LinkCard } from 'components';

import AuthenticationTokenStyledDiv from './AuthenticationTokenStyledDiv.styles';
import 'react-multi-carousel/lib/styles.css';

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
    slidesToSlide: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
    slidesToSlide: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1,
  },
};

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
        <Carousel
          swipeable={true}
          draggable={false}
          showDots={true}
          responsive={responsive}
          ssr={true}
          infinite={true}
          autoPlay={false}
          autoPlaySpeed={5000}
          keyBoardControl={true}
          customTransition="all .5"
          transitionDuration={500}
          containerClass="carousel-container"
          removeArrowOnDeviceType={['tablet', 'mobile']}
          deviceType={'mobile'}
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px"
        >
          {articleCardSpecs.map((articleCardSpec, i) => (
            <LinkCard
              variant="article"
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
