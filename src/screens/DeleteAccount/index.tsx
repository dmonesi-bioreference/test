import Head from 'next/head';

import { useAppTranslation } from 'app';
import {
  ActionGroup,
  Button,
  ContentBlock,
  Icon,
  PageLayout,
  PageSection,
} from 'components';

export const DeleteAccount = () => {
  const t = useAppTranslation();
  return (
    <>
      <Head>
        <title>{t('pages.deleteAccount.pageTitle')}</title>
      </Head>
      <PageLayout title={t('pages.deleteAccount.title')} kind="secondary">
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
        </PageSection>

        <ActionGroup>
          <Button
            href={`mailto:${t(
              'application.customerServiceEmailAddress'
            )}?subject=${t(
              'pages.deleteAccount.actions.primary.emailSubject'
            )}`}
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
      </PageLayout>
    </>
  );
};
