import Head from 'next/head';

import { AppLayout } from 'app/components/AppLayout';
import { useAppTranslation } from 'app/components/Shell';
import { Button } from 'components/Button';
import { PageSection } from 'components/PageSection';
import { Typography, Heading } from 'components/Typography';

export interface ErrorPageProps {
  statusCode: 404 | 500;
}

export const ErrorPage: React.FC<ErrorPageProps> = (props) => {
  const t = useAppTranslation();
  const statusCodePath =
    props.statusCode === 404
      ? 'pages.errorPage.notFound'
      : 'pages.errorPage.serverError';
  const pageTitle = t(`${statusCodePath}.title`);
  const pageContent = t(`${statusCodePath}.content`);

  return (
    <>
      <Head>
        <title>{t('pages.errorPage.title')}</title>
      </Head>

      <AppLayout isWithoutNav>
        <PageSection verticalPadding="extraLarge" spacing="extraLarge">
          <Heading level="1">{pageTitle}</Heading>
          <Typography type="body" level="2">
            {pageContent}
          </Typography>
          <Button href="/" kind="primary" hugContent>
            Go back to home
          </Button>
        </PageSection>
      </AppLayout>
    </>
  );
};
