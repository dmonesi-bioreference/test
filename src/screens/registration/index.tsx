import { AnimatePresence } from 'framer-motion';
import Head from 'next/head';

import { useAppState, useAppTranslation } from 'app/components/Shell';
import { PageLayout, PageSection } from 'components';
import { tokens } from 'styles';

import { CaregiverContact, CaregiverContactHeader } from './CaregiverContact';
import { CaregiverName, CaregiverNameHeader } from './CaregiverName';
import {
  CaregiverRelationship,
  CaregiverRelationshipHeader,
} from './CaregiverRelationship';
import { Consent, ConsentHeader } from './Consent';
import { Password, PasswordHeader } from './Password';

interface PageProps {
  header: React.ReactNode;
}

function Page(props: Props<PageProps>) {
  return (
    <PageLayout>
      <PageSection
        header={
          <div
            style={{
              alignItems: 'center',
              display: 'flex',
              flexDirection: 'column',
              gap: tokens.spacingXLarge,
              marginTop: tokens.spacingXxLarge,
              marginBottom: tokens.spacingXxLarge,
            }}
          >
            {props.header}
          </div>
        }
      >
        {props.children}
      </PageSection>
    </PageLayout>
  );
}
export function RegistrationWizard() {
  const t = useAppTranslation();
  const isConsentStep = useAppState('registration.consent');
  const isNameStep = useAppState('registration.name');
  const isContactStep = useAppState('registration.contact');
  const isRelationshipStep = useAppState('registration.relationship');
  const isPasswordStep = useAppState('registration.password');

  return (
    <Page
      header={
        <AnimatePresence exitBeforeEnter initial={false}>
          {isConsentStep && <ConsentHeader key="consent" />}
          {isNameStep && <CaregiverNameHeader key="name" />}
          {isContactStep && <CaregiverContactHeader key="contact" />}
          {isRelationshipStep && (
            <CaregiverRelationshipHeader key="relationship" />
          )}
          {isPasswordStep && <PasswordHeader key="password" />}
        </AnimatePresence>
      }
    >
      <Head>
        <title>{t('pages.registration.pageTitle')}</title>
      </Head>
      <AnimatePresence exitBeforeEnter initial={false}>
        {isConsentStep && <Consent key="consent" />}
        {isNameStep && <CaregiverName key="name" />}
        {isContactStep && <CaregiverContact key="contact" />}
        {isRelationshipStep && <CaregiverRelationship key="relationship" />}
        {isPasswordStep && <Password key="password" />}
      </AnimatePresence>
    </Page>
  );
}
