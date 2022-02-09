import Head from 'next/head';
import { useEffect } from 'react';

import { AppLayout } from 'app/components/AppLayout';
import { DisplayField } from 'app/components/DisplayField';
import {
  useAppTranslation,
  useAppSelector,
  useAppEvents,
  useAppState,
} from 'app/components/Shell';
import { AsyncRegion } from 'components/AsyncRegion';
import { ListCard } from 'components/ListCard';
import { PageSection } from 'components/PageSection';

import { HealthProfileContainer } from './HealthProfile.styles';

export const HealthProfile = () => {
  const t = useAppTranslation();
  const { identityProfileRequest } = useAppEvents();
  const requesting = useAppState('requests.identityProfile.requesting');

  const session = useAppSelector(({ context }) => context.auth.session);
  const profile = useAppSelector(
    ({ context }) => context.requests.identityProfile.values
  );

  useEffect(identityProfileRequest, [identityProfileRequest]);

  if (!session) {
    return null;
  }

  return (
    <>
      <Head>
        <title>{t('pages.healthProfile.pageTitle')}</title>
      </Head>
      <HealthProfileContainer>
        <AppLayout
          containsCards
          title={t('pages.healthProfile.title')}
          description={t('pages.healthProfile.description', {
            patientsNickname: profile.patient_nickname,
          })}
          theme="healthProfileTheme"
          hasPatientBanner
          isLoading={requesting}
        >
          <PageSection>
            <AsyncRegion pending={requesting}>
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
                  label={t(
                    'pages.healthProfile.basicInformation.fields.dob.label'
                  )}
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
                  label={t(
                    'pages.healthProfile.yourDetails.fields.fullName.label'
                  )}
                >
                  {profile.caregiver_name}
                </DisplayField>
                <DisplayField
                  label={t(
                    'pages.healthProfile.yourDetails.fields.phoneNumber.label'
                  )}
                >
                  {profile.phone_number}
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
                  label={t(
                    'pages.healthProfile.yourDetails.fields.relation.label'
                  )}
                >
                  {profile.relation_to_patient}
                </DisplayField>
              </ListCard>
            </AsyncRegion>
          </PageSection>
        </AppLayout>
      </HealthProfileContainer>
    </>
  );
};
