import Head from 'next/head';

import { AppLayout } from 'app/components/AppLayout';
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
      <AppLayout
        title={t('pages.termsAndConditions.userAgreement.title')}
        hasReturnLink
      >
        <PageSection>
          <TermsAndConditionsContent />
        </PageSection>
      </AppLayout>
    </>
  );
};
