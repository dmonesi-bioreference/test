import Head from 'next/head';

import { OnState, useAppTranslation } from 'app/components/Shell';

import { CaregiverContact } from './CaregiverContact';
import { CaregiverName } from './CaregiverName';
import { CaregiverRelationship } from './CaregiverRelationship';
import { Consent } from './Consent';
import { Password } from './Password';

export function RegistrationWizard() {
  const t = useAppTranslation();

  return (
    <>
      <Head>
        <title>{t('pages.registration.pageTitle')}</title>
      </Head>

      <OnState matches="registration.consent">
        <Consent key="consent" />
      </OnState>

      <OnState matches="registration.name">
        <CaregiverName key="name" />
      </OnState>

      <OnState matches="registration.contact">
        <CaregiverContact key="contact" />
      </OnState>

      <OnState matches="registration.relationship">
        <CaregiverRelationship key="relationship" />
      </OnState>

      <OnState matches="registration.password">
        <Password key="password" />
      </OnState>
    </>
  );
}
