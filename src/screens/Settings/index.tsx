import Head from 'next/head';

import { useAppTranslation } from 'app';
import { DisplayField } from 'app/components/DisplayField';
import { Button, ListCard, PageLayout, PageSection } from 'components';

export const Settings = () => {
  const t = useAppTranslation();
  return (
    <>
      <Head>
        <title>{t('pages.settings.pageTitle')}</title>
      </Head>
      <PageLayout containsCards title={t('pages.settings.title')}>
        <PageSection>
          <ListCard
            iconName="user-circle"
            title={t('pages.settings.accountDetails.title')}
          >
            <DisplayField
              label={t('pages.settings.accountDetails.fields.1.label')}
            />
            <DisplayField
              label={t('pages.settings.accountDetails.fields.2.label')}
            />
          </ListCard>

          <ListCard
            iconName="phone"
            title={t('pages.settings.contactDetails.title')}
          >
            <DisplayField
              label={t('pages.settings.contactDetails.fields.1.label')}
            />
            <DisplayField
              label={t('pages.settings.contactDetails.fields.2.label')}
            />
            <DisplayField
              label={t('pages.settings.contactDetails.fields.3.label')}
            />
          </ListCard>

          <Button kind="link-small">
            {t('pages.settings.actions.1.label')}
          </Button>
          <Button kind="link-small">
            {t('pages.settings.actions.2.label')}
          </Button>
          <Button kind="link-small" color="danger" href="/demo/delete-account">
            {t('pages.settings.actions.3.label')}
          </Button>
        </PageSection>
      </PageLayout>
    </>
  );
};
