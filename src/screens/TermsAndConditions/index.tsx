import Head from 'next/head';

import { AppLayout } from 'app/components/AppLayout';
import { Content } from 'app/components/ContentElements';
import { useAppTranslation } from 'app/components/Shell';
import { ContentBlock } from 'components/ContentBlock';
import { List } from 'components/List';
import { Typography } from 'components/Typography';

import {
  Introduction,
  TermsAndConditionsContainer,
} from './TermsAndConditions.styles';

interface ListItem {
  title: string;
  content: string;
}

export const TermsAndConditions = () => {
  const t = useAppTranslation();

  const userAgreementList: ListItem[] = t(
    'pages.termsAndConditions.userAgreement.list',
    { returnObjects: true }
  );

  const privacyPolicyList: ListItem[] = t(
    'pages.termsAndConditions.privacyPolicy.list',
    { returnObjects: true }
  );

  const privacyPolicySections: ListItem[] = t(
    'pages.termsAndConditions.privacyPolicy.sections',
    { returnObjects: true }
  );

  return (
    <>
      <Head>
        <title>{t('pages.termsAndConditions.pageTitle')}</title>
      </Head>
      <AppLayout
        kind="content"
        title={t('pages.termsAndConditions.userAgreement.title')}
      >
        <TermsAndConditionsContainer>
          <Introduction>
            {t('pages.termsAndConditions.userAgreement.introduction')}
          </Introduction>
          <List kind="plain">
            {Array.isArray(userAgreementList) &&
              userAgreementList.map(({ title, content }, index) => (
                <ContentBlock key={index} title={`${index + 1}. ${title}`}>
                  <Content>{content}</Content>
                </ContentBlock>
              ))}
          </List>
          <Typography type="heading">
            {t('pages.termsAndConditions.privacyPolicy.title')}
          </Typography>
          <Typography type="helper-text">
            {t('pages.termsAndConditions.privacyPolicy.subtitle')}
          </Typography>
          <Introduction>
            {t('pages.termsAndConditions.privacyPolicy.introduction')}
          </Introduction>
          <List kind="plain">
            {Array.isArray(privacyPolicyList) &&
              privacyPolicyList.map(({ title, content }, index) => (
                <ContentBlock key={index} title={`${index + 1}. ${title}`}>
                  <Content>{content}</Content>
                </ContentBlock>
              ))}
          </List>
          <List kind="plain">
            {Array.isArray(privacyPolicySections) &&
              privacyPolicySections.map(({ title, content }, index) => (
                <ContentBlock key={index} title={title}>
                  <Content>{content}</Content>
                </ContentBlock>
              ))}
          </List>
          <ContentBlock title={t('pages.termsAndConditions.complains.title')}>
            <Content>{t('pages.termsAndConditions.complains.content')}</Content>
          </ContentBlock>
          <ContentBlock
            title={t('pages.termsAndConditions.translations.title')}
          >
            <Content>
              {t('pages.termsAndConditions.translations.content')}
            </Content>
          </ContentBlock>
        </TermsAndConditionsContainer>
      </AppLayout>
    </>
  );
};
