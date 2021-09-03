import InTheNICUImage from 'assets/images/jpg/InTheNICU.jpg';
import {
  AppImage,
  Button,
  Card,
  Divider,
  Flag,
  Heading,
  Icon,
  PageLayout,
  PageSection,
  Typography,
  useAppTranslation,
} from 'components';
import { tokens } from 'styles';

export const Main = () => {
  const t = useAppTranslation();
  return (
    <PageLayout>
      <PageSection
        header={
          <div style={{ marginBottom: tokens.spacingXSmall }}>
            <div style={{ marginBottom: tokens.spacingXxSmall }}>
              <Typography type="label" color="minor" labelType="display">
                {t('sections.results.childsName')}
              </Typography>
            </div>
            <Heading level="5">Lisa Consuela Jackson</Heading>
          </div>
        }
      >
        <Card>
          <div style={{ marginBottom: tokens.spacing }}>
            <div style={{ marginBottom: tokens.spacingXSmall }}>
              <Heading>{t('sections.results.inProcess')}</Heading>
            </div>
            <Heading level="4">{t('sections.results.onTrack')}</Heading>
          </div>
          <div style={{ marginBottom: tokens.spacing }}>
            {/* Note: This was a heading "7" */}
            <Heading level="6" color="minor">
              {t('sections.results.noUpdates')}
            </Heading>
          </div>
          <div style={{ marginBottom: tokens.spacingLarge }}>
            <div style={{ marginBottom: tokens.spacingXxSmall }}>
              <Heading level="5">
                {t('sections.results.estimate', { estimate: '7-10' })}
              </Heading>
            </div>
            <Heading level="6">{t('sections.results.mayVary')}</Heading>
          </div>
          <div style={{ marginBottom: tokens.spacing }}>
            <Button
              kind="tertiary"
              href="#"
              prefix={<Icon name="device-mobile" color="primary" />}
            >
              {t('sections.results.getUpdates')}
            </Button>
          </div>
          <div style={{ marginBottom: tokens.spacingLarge }}>
            <Divider />
          </div>
          <Button
            kind="tertiary"
            href="/testing-process"
            suffix={<Icon name="chevron-right" color="primary" />}
            spreadContent={true}
          >
            {t('sections.results.seeMore')}
          </Button>
        </Card>
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
        <Card
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
              {t('sections.resources.story.title')}
            </Typography>
          </div>
          <div style={{ marginBottom: tokens.spacing }}>
            <Heading>
              How other parents have coped with this time of uncertainty.
            </Heading>
          </div>
          <div style={{ marginBottom: tokens.spacingLarge }}>
            <Typography type="body">
              They said it was supposed to be the most wonderful experience of
              my life. But when Jonas was born with complications I struggled..
            </Typography>
          </div>
          <Button kind="primary">
            {t('sections.resources.story.readMore')}
          </Button>
        </Card>
        <Card>
          <div style={{ marginBottom: tokens.spacingLarge }}>
            <Heading>{t('sections.resources.faq.title')}</Heading>
          </div>
          <div style={{ marginBottom: tokens.spacingXLarge }}>
            <Button kind="secondary" href="#">
              {t('sections.resources.faq.afterCare')}
            </Button>
          </div>
          <div style={{ marginBottom: tokens.spacingXLarge }}>
            <Button kind="secondary" href="#">
              {t('sections.resources.faq.noDiagnosis')}
            </Button>
          </div>
          <div style={{ marginBottom: tokens.spacingXLarge }}>
            <Button kind="secondary" href="#">
              {t('sections.resources.faq.moreChildren')}
            </Button>
          </div>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <Button kind="tertiary" href="#">
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
            <Button kind="tertiary" href="#">
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
