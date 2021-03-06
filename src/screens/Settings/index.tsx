import Head from 'next/head';
import { useEffect } from 'react';

import { MainNavPageLayout } from 'app/components/AppLayout';
import { DisplayField } from 'app/components/DisplayField';
import {
  useAppEvents,
  useAppSelector,
  useAppState,
  useAppTranslation,
} from 'app/components/Shell';
import { AsyncRegion } from 'components/AsyncRegion';
import { Button } from 'components/Button';
import { ListCard } from 'components/ListCard';
import { PageSection } from 'components/PageSection';

export const Settings = () => {
  const events = useAppEvents();
  const t = useAppTranslation();
  const requesting = useAppState('requests.identityProfile.requesting');
  const session = useAppSelector(({ context }) => context.auth.session);
  const profile = useAppSelector(
    ({ context }) => context.requests.identityProfile.values
  );

  useEffect(() => {
    events.identityProfileRequest();
  }, [events]);

  return (
    <>
      <Head>
        <title>{t('pages.settings.pageTitle')}</title>
      </Head>
      <MainNavPageLayout
        title={t('pages.settings.title')}
        isLoading={requesting}
      >
        <AsyncRegion pending={requesting}>
          <PageSection>
            <ListCard
              iconName="user-circle"
              title={t('pages.settings.accountDetails.title')}
            >
              <DisplayField
                label={t('pages.settings.accountDetails.fields.nickname.label')}
              >
                {profile.caregiver_nickname}
              </DisplayField>
              <DisplayField
                label={t('pages.settings.accountDetails.fields.fullName.label')}
              >
                {profile.caregiver_name}
              </DisplayField>
            </ListCard>

            <ListCard
              iconName="phone"
              title={t('pages.settings.contactDetails.title')}
            >
              <DisplayField
                label={t('pages.settings.contactDetails.fields.email.label')}
              >
                {session?.email}
              </DisplayField>
              <DisplayField
                label={t('pages.settings.contactDetails.fields.phone.label')}
              >
                {profile.phone_number}
              </DisplayField>
              <DisplayField
                label={t(
                  'pages.settings.contactDetails.fields.preference.label'
                )}
              ></DisplayField>
            </ListCard>

            <Button kind="link-small" color="danger" href="/delete-account">
              {t('pages.settings.actions.delete.label')}
            </Button>
          </PageSection>
        </AsyncRegion>
      </MainNavPageLayout>
    </>
  );
};
