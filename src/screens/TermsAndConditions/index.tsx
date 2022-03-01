import Head from 'next/head';

import { TerminusPageLayout } from 'app/components/AppLayout';
import { useAppTranslation } from 'app/components/Shell';
import { PageSection } from 'components/PageSection';
import { TermsAndConditionsContent } from 'screens/TermsAndConditions/TermsAndConditionsContent';

export const TermsAndConditions = () => {
  const t = useAppTranslation();
  return (
    <>
      <Head>
        <title>{t('pages.termsAndConditions.pageTitle')}</title>
      </Head>
      <TerminusPageLayout
        title={t('pages.termsAndConditions.userAgreement.title')}
      >
        <PageSection>
          <TermsAndConditionsContent />
        </PageSection>
      </TerminusPageLayout>
    </>
  );
};
