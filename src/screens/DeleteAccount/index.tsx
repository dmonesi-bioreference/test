import Head from 'next/head';

import { AppLayout } from 'app/components/AppLayout';
import { useAppTranslation } from 'app/components/Shell';
import { ActionGroup } from 'components/ActionGroup';
import { Button } from 'components/Button';
import { ContentBlock } from 'components/ContentBlock';
import { Icon } from 'components/Icon';
import { PageSection } from 'components/PageSection';

export const DeleteAccount = () => {
  const t = useAppTranslation();
  return (
    <>
      <Head>
        <title>{t('pages.deleteAccount.pageTitle')}</title>
      </Head>
      <AppLayout title={t('pages.deleteAccount.title')} kind="secondary">
        <PageSection>
          <ContentBlock scale="small">
            {t('pages.deleteAccount.description.paragraph1', {
              customerServiceEmailAddress: t(
                'application.customerServiceEmailAddress'
              ),
              customerServicePhoneNumber: t(
                'application.customerServicePhoneNumber'
              ),
            })}
          </ContentBlock>

          <ContentBlock scale="small">
            {t('pages.deleteAccount.description.paragraph2')}
          </ContentBlock>

          <ContentBlock
            scale="small"
            title={t('pages.deleteAccount.implications.1.question')}
          >
            {t('pages.deleteAccount.implications.1.answer')}
          </ContentBlock>
          <ActionGroup narrow topPadding>
            <Button
              href={`mailto:${t(
                'application.customerServiceEmailAddress'
              )}?subject=${t(
                'pages.deleteAccount.actions.primary.emailSubject'
              )}`}
              target="_blank"
              kind="primary"
              prefix={<Icon name="mail" />}
            >
              {t('pages.deleteAccount.actions.primary.label')}
            </Button>
            <Button
              href={`tel:${t('application.customerServicePhoneNumber')}`}
              kind="info"
              prefix={<Icon name="phone" />}
            >
              {t('pages.deleteAccount.actions.secondary.label')}
            </Button>
          </ActionGroup>
        </PageSection>
      </AppLayout>
    </>
  );
};
