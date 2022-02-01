import { useAppTranslation, TestStatus, Timeline } from 'app';
import { PageLayout, PageSection, UserHeader } from 'components';

export const LandingPage = () => {
  const t = useAppTranslation();
  return (
    <PageLayout
      containsCards={true}
      customHeader={
        <UserHeader
          title={t('sections.results.patient')}
          name="Lisa Consuela Jackson"
          variant="patient"
        />
      }
    >
      <PageSection>
        <TestStatus />
        <Timeline />
      </PageSection>
    </PageLayout>
  );
};
