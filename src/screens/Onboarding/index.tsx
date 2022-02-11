import Head from 'next/head';
import { useEffect, useState } from 'react';

import { AppLayout } from 'app/components/AppLayout';
import { OnBoardingStories } from 'app/components/ContentElements';
import { useContent } from 'app/components/ContentElements/hooks';
import { useAppEvents, useAppTranslation } from 'app/components/Shell';
import { Button } from 'components/Button';
import { PageSection } from 'components/PageSection';
import { IdentityForm } from 'screens/IdentityForm';

export const OnBoarding = () => {
  const t = useAppTranslation();
  const [beginRegistration, setBeginRegistration] = useState(false);
  const { allOnBoardingCardsRequest } = useAppEvents();

  useEffect(allOnBoardingCardsRequest, [allOnBoardingCardsRequest]);

  const [{ loadingOnBoardingCards }] = useContent();

  return beginRegistration ? (
    <IdentityForm />
  ) : (
    <>
      <Head>
        <title>{t('pages.onboarding.title')}</title>
      </Head>
      <AppLayout
        kind="preLogin"
        isLoading={loadingOnBoardingCards}
        containsCards
        isWithoutFooter
        theme="resourcesTheme"
      >
        <PageSection>
          <OnBoardingStories />
          <Button kind="primary" onClick={() => setBeginRegistration(true)}>
            {t('pages.onboarding.actions.beginRegistration')}
          </Button>
        </PageSection>
      </AppLayout>
    </>
  );
};
