import Head from 'next/head';
import { useEffect } from 'react';

import { MainNavPageLayout } from 'app/components/AppLayout';
import { DisplayField } from 'app/components/DisplayField';
import {
  useAppTranslation,
  useAppSelector,
  useAppEvents,
  useAppState,
} from 'app/components/Shell';
import { AsyncRegion } from 'components/AsyncRegion';
import { ListCard } from 'components/ListCard';

export const HealthProfile = () => {
  const t = useAppTranslation();
  const { identityProfileRequest } = useAppEvents();
  const requesting = useAppState('requests.identityProfile.requesting');

  const session = useAppSelector(({ context }) => context.auth.session);
  const profile = useAppSelector(
    ({ context }) => context.requests.identityProfile.values
  );

  const formatPhoneNumber = (phone: string) => {
    phone = phone.replace(/[^\d]/g, '');
    if (phone.length == 10) {
      return phone.replace(/(\d{3})(\d{3})(\d{4})/, '($1) $2-$3');
    }
    return phone;
  };

  useEffect(identityProfileRequest, [identityProfileRequest]);

  if (!session) {
    return null;
  }

  return (
    <>
      <Head>
        <title>{t('pages.healthProfile.pageTitle')}</title>
      </Head>
      <AsyncRegion pending={requesting}>
        <MainNavPageLayout
          title={t('pages.healthProfile.title')}
          description={t('pages.healthProfile.description', {
            patientsNickname: profile.patient_nickname,
          })}
          theme="healthProfileTheme"
          isLoading={requesting}
        >
          <ListCard
            iconName="information-circle"
            title={t('pages.healthProfile.basicInformation.title')}
          >
            <DisplayField
              label={t(
                'pages.healthProfile.basicInformation.fields.name.label'
              )}
            >
              {profile.patient_name}
            </DisplayField>
            <DisplayField
              label={t('pages.healthProfile.basicInformation.fields.dob.label')}
            >
              {profile.patient_dob
                ? t('formatting.date', { value: profile.patient_dob })
                : null}
            </DisplayField>
            <DisplayField
              label={t(
                'pages.healthProfile.basicInformation.fields.gender.label'
              )}
            >
              {profile.gender_genetic}
            </DisplayField>
            <DisplayField
              label={t(
                'pages.healthProfile.basicInformation.fields.genderIdentity.label'
              )}
            >
              {profile.gender_identity}
            </DisplayField>
            <DisplayField
              label={t(
                'pages.healthProfile.basicInformation.fields.insurance.label'
              )}
            >
              {profile.insurance}
            </DisplayField>
          </ListCard>

          <ListCard
            iconName="clipboard"
            title={t('pages.healthProfile.primaryIndication.title')}
          >
            <DisplayField
              label={t(
                'pages.healthProfile.primaryIndication.fields.phenotype.label'
              )}
            >
              {profile.phenotype}
            </DisplayField>
          </ListCard>

          <ListCard
            iconName="user-circle"
            title={t('pages.healthProfile.yourDetails.title')}
          >
            <DisplayField
              label={t('pages.healthProfile.yourDetails.fields.fullName.label')}
            >
              {profile.caregiver_name}
            </DisplayField>
            <DisplayField
              label={t(
                'pages.healthProfile.yourDetails.fields.phoneNumber.label'
              )}
            >
              {formatPhoneNumber(profile.phone_number)}
            </DisplayField>
            <DisplayField
              label={t(
                'pages.healthProfile.yourDetails.fields.emailAddress.label'
              )}
            >
              {session.email}
            </DisplayField>
            <DisplayField
              label={t('pages.healthProfile.yourDetails.fields.city.label')}
            >
              {profile.caregiver_location}
            </DisplayField>
            <DisplayField
              label={t('pages.healthProfile.yourDetails.fields.dob.label')}
            >
              {profile.caregiver_dob
                ? t('formatting.date', { value: profile.caregiver_dob })
                : null}
            </DisplayField>
            <DisplayField
              label={t('pages.healthProfile.yourDetails.fields.relation.label')}
            >
              {profile.relation_to_patient}
            </DisplayField>
          </ListCard>
        </MainNavPageLayout>
      </AsyncRegion>
    </>
  );
};
