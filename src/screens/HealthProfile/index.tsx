import { useAppTranslation, useAppSelector } from 'app';
import { DisplayField } from 'app/components/DisplayField';
import { Button, ListCard, Icon, PageLayout, UserHeader } from 'components';

import HealthProfileStyled from './HealthProfile.styles';

export const HealthProfile = () => {
  const t = useAppTranslation();
  const patientData = {
    nickname: 'Lisa',
    name: 'Lisa Consuela Jackson',
    dob: new Date(Date.UTC(2012, 1, 14)),
    genderGenetic: 'Female',
    genderIdentified: 'Female',
    insurance: 'Kaiser',
    relationToCaregiver: 'Child',
    phenotype: 'Phenotype information here',
  };

  const caregiverData: AuthenticatedSession = {
    nickname: 'Barbara',
    name: 'Barbara Jackson',
    terms_version: '0.1',
    terms_given: 'true',
    terms_timestamp: '',
    patient_guid: '1234',
    phone_number: '267-190-5214',
    email: 'barb.jackson@example.com',
    location: 'Austin, Texas',
    dob: new Date(Date.UTC(1989, 3, 9)),
    relation_to_patient: 'Parent',
    picture: '',
    updated_at: '',
    email_verified: true,
    sub: 'Is this an ID of some sort?',
  };

  const caregiverEmail = useAppSelector(
    (state) => state.context.auth.session?.email
  );

  const caregiverName = useAppSelector(
    (state) => state.context.auth.session?.name
  );

  const caregiverDob = useAppSelector(
    (state) => state.context.auth.session?.dob
  );

  return (
    <HealthProfileStyled>
      <PageLayout
        containsCards
        title={t('pages.healthProfile.title')}
        description={t('pages.healthProfile.description', {
          patientsNickname: patientData.nickname,
        })}
        theme="healthProfileTheme"
        customHeader={
          <UserHeader
            title={t('pages.healthProfile.basicInformation.fields.name.label')}
            name={patientData.name || ''}
            variant="patient"
          />
        }
      >
        <Button
          className="health-profile__download"
          kind="link-small"
          prefix={<Icon name="download" />}
        >
          {t('pages.healthProfile.actions.download.label')}
        </Button>

        <ListCard
          iconName="information-circle"
          title={t('pages.healthProfile.basicInformation.title')}
        >
          <DisplayField
            label={t('pages.healthProfile.basicInformation.fields.name.label')}
          >
            {patientData.name}
          </DisplayField>
          <DisplayField
            label={t('pages.healthProfile.basicInformation.fields.dob.label')}
          >
            {patientData.dob &&
              t('formatting.date', { value: patientData.dob })}
          </DisplayField>
          <DisplayField
            label={t(
              'pages.healthProfile.basicInformation.fields.gender.label'
            )}
          >
            {patientData.genderGenetic}
          </DisplayField>
          <DisplayField
            label={t(
              'pages.healthProfile.basicInformation.fields.genderIdentity.label'
            )}
          >
            {patientData.genderIdentified}
          </DisplayField>
          <DisplayField
            label={t(
              'pages.healthProfile.basicInformation.fields.insurance.label'
            )}
          >
            {patientData.insurance}
          </DisplayField>
          <DisplayField
            label={t(
              'pages.healthProfile.basicInformation.fields.relationship.label'
            )}
          >
            {patientData.relationToCaregiver}
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
            {patientData.phenotype}
          </DisplayField>
        </ListCard>

        <ListCard
          iconName="user-circle"
          title={t('pages.healthProfile.yourDetails.title')}
        >
          <DisplayField
            label={t('pages.healthProfile.yourDetails.fields.1.label')}
          >
            {caregiverName}
          </DisplayField>
          <DisplayField
            label={t('pages.healthProfile.yourDetails.fields.2.label')}
          >
            {caregiverData.phone_number}
          </DisplayField>
          <DisplayField
            label={t('pages.healthProfile.yourDetails.fields.3.label')}
          >
            {caregiverEmail}
          </DisplayField>
          <DisplayField
            label={t('pages.healthProfile.yourDetails.fields.4.label')}
          >
            {caregiverData.location}
          </DisplayField>
          <DisplayField
            label={t('pages.healthProfile.yourDetails.fields.5.label')}
          >
            {t('formatting.date', { value: caregiverDob })}
          </DisplayField>
          <DisplayField
            label={t('pages.healthProfile.yourDetails.fields.6.label')}
          >
            {caregiverData.relation_to_patient}
          </DisplayField>
        </ListCard>
      </PageLayout>
    </HealthProfileStyled>
  );
};
