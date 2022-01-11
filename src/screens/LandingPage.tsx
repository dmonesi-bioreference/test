import { gql, useQuery } from '@apollo/client';

import { useAppTranslation, TestStatus, Timeline } from 'app';
import InTheNICUImage from 'assets/images/jpg/InTheNICU.jpg';
import {
  AppImage,
  Button,
  Card,
  Flag,
  Heading,
  Icon,
  PageLayout,
  PageSection,
  Typography,
  UserHeader
} from 'components';
import { tokens } from 'styles';

import { ArticleQuery } from '../mocks/handlers';

const FETCH_ARTICLE = gql`
  query GetTestStatusArticles {
    articles {
      id
      title
      content
      label
    }
  }
`;

export const LandingPage = () => {
  const t = useAppTranslation();
  const { data } = useQuery<ArticleQuery>(FETCH_ARTICLE);
  const articles = data?.articles.map((article) => {
    return (
      <Card
        key={article.id}
        header={
          <AppImage
            src={InTheNICUImage}
            alt="In The NICU"
            width={343}
            height={189}
          />
        }
      >
        <div style={{ marginBottom: tokens.spacingXSmall }}>
          <Typography type="label" labelType="title" color="primary">
            {article.label}
          </Typography>
        </div>
        <div style={{ marginBottom: tokens.spacing }}>
          <Heading>{article.title}</Heading>
        </div>
        <div style={{ marginBottom: tokens.spacingLarge }}>
          <Typography type="body">
            {article.content.map((textBlock) => textBlock.content).join()}
          </Typography>
        </div>
        <Button kind="primary" href="/resources/real-family-story-81707">
          {t('sections.resources.story.readMore')}
        </Button>
      </Card>
    );
  });

  return (
    <PageLayout containsCards={true}>
      <PageSection
        header={
          <UserHeader
            title={t('sections.results.childsName')}
            name="Lisa Consuela Jackson"
          />
        }
      >
        <TestStatus />
        <Timeline />
      </PageSection>

      <PageSection
        header={
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <div style={{ flexDirection: 'row', display: 'flex' }}>
              <div
                style={{
                  marginRight: tokens.spacingXxSmall,
                  display: 'flex',
                  flexDirection: 'row',
                }}
              >
                <Heading>{t('sections.resources.title')}</Heading>
              </div>
              <Heading color="minor">
                {t('sections.resources.subtitle')}
              </Heading>
            </div>

            <Icon name="chevron-right" />
          </div>
        }
      >
        {articles}
        <Card>
          <div style={{ marginBottom: tokens.spacingLarge }}>
            <Heading>{t('sections.resources.faq.title')}</Heading>
          </div>
          <div style={{ marginBottom: tokens.spacingXLarge }}>
            <Button kind="link-large" href="#">
              {t('sections.resources.faq.afterCare')}
            </Button>
          </div>
          <div style={{ marginBottom: tokens.spacingXLarge }}>
            <Button kind="link-large" href="#">
              {t('sections.resources.faq.noDiagnosis')}
            </Button>
          </div>
          <div style={{ marginBottom: tokens.spacingXLarge }}>
            <Button kind="link-large" href="#">
              {t('sections.resources.faq.moreChildren')}
            </Button>
          </div>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <Button kind="link-medium" href="#">
              {t('sections.resources.faq.viewAll')}
            </Button>
          </div>
        </Card>
      </PageSection>

      <PageSection header={<Heading>{t('sections.careTeam.title')}</Heading>}>
        <Card>
          <div style={{ marginBottom: tokens.spacingXLarge }}>
            <Heading>{t('sections.careTeam.counselor')}</Heading>
          </div>
          <Flag
            iconName="healthcare-provider"
            marginBottom={tokens.spacingXLarge}
          >
            {t('sections.careTeam.getAnswers')}
          </Flag>
          <div style={{ marginBottom: tokens.spacingXLarge }}>
            <Heading>{t('sections.careTeam.wereHere')}</Heading>
          </div>
          <div style={{ marginBottom: tokens.spacing }}>
            <Button kind="primary">{t('sections.careTeam.callUs')}</Button>
          </div>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <Button kind="link-medium" href="#">
              {t('sections.careTeam.learnMore')}
            </Button>
          </div>
        </Card>
      </PageSection>

      <PageSection header={<Heading>{t('sections.science.title')}</Heading>}>
        <Card>
          <div style={{ marginBottom: tokens.spacingXLarge }}>
            <Heading>{t('sections.science.genetics.title')}</Heading>
          </div>
          <Flag iconName="helix">{t('sections.science.genetics.body')}</Flag>
        </Card>
        <Card>
          <div style={{ marginBottom: tokens.spacingXLarge }}>
            <Heading>{t('sections.science.sequencing.title')}</Heading>
          </div>
          <Flag iconName="atom">{t('sections.science.sequencing.body')}</Flag>
        </Card>
      </PageSection>
    </PageLayout>
  );
};
