import { useAppTranslation, TestStatus, Timeline } from 'app';
import {
  Button,
  Card,
  Flag,
  Heading,
  Icon,
  PageLayout,
  PageSection,
  UserHeader,
} from 'components';
import { tokens } from 'styles';

export const LandingPage = () => {
  const t = useAppTranslation();
  return (
    <PageLayout containsCards={true}>
      <PageSection
        header={
          <UserHeader
            title={t('sections.results.patient')}
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
