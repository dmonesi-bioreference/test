import Head from 'next/head';
import { useEffect } from 'react';

import { DisplayField } from 'app/components/DisplayField';
import { PatientBanner } from 'app/components/PatientBanner';
import {
  useAppTranslation,
  useAppSelector,
  useAppEvents,
  useAppState,
} from 'app/components/Shell';
import { ListCard, PageLayout, PageSection } from 'components';
import { AsyncRegion } from 'components/AsyncRegion';

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
        <PageLayout
          containsCards
          title={t('pages.healthProfile.title')}
          description={t('pages.healthProfile.description', {
            patientsNickname: profile.patient_nickname,
          })}
          theme="healthProfileTheme"
          customHeader={<PatientBanner />}
          loading={requesting}
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
                  label={t('pages.healthProfile.yourDetails.fields.1.label')}
                >
                  {profile.caregiver_name}
                </DisplayField>
                <DisplayField
                  label={t('pages.healthProfile.yourDetails.fields.2.label')}
                >
                  {profile.phone_number}
                </DisplayField>
                <DisplayField
                  label={t('pages.healthProfile.yourDetails.fields.3.label')}
                >
                  {session.email}
                </DisplayField>
                <DisplayField
                  label={t('pages.healthProfile.yourDetails.fields.4.label')}
                >
                  {profile.caregiver_location}
                </DisplayField>
                <DisplayField
                  label={t('pages.healthProfile.yourDetails.fields.5.label')}
                >
                  {profile.caregiver_dob
                    ? t('formatting.date', { value: profile.caregiver_dob })
                    : null}
                </DisplayField>
                <DisplayField
                  label={t('pages.healthProfile.yourDetails.fields.6.label')}
                >
                  {profile.relation_to_patient}
                </DisplayField>
              </ListCard>
            </AsyncRegion>
          </PageSection>
        </PageLayout>
      </HealthProfileContainer>
    </>
  );
};
