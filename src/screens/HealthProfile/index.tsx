import { useAppTranslation } from 'app';
import { DisplayField } from 'app/components/DisplayField';
import {
  Button,
  ListCard,
  Icon,
  PageLayout,
  PageSection,
  UserHeader,
} from 'components';

import HealthProfileStyled from './HealthProfile.styles';

export const HealthProfile = () => {
  const t = useAppTranslation();
  const patientData = {
    shortName: 'Lisa',
    fullName: 'Lisa Consuela Jackson',
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

  return (
    <HealthProfileStyled>
      <PageLayout
        containsCards
        title={t('pages.healthProfile.title')}
        description={t('pages.healthProfile.description', {
          patientsNickname: patientData.shortName,
        })}
        customHeader={
          <UserHeader
            title={t('sections.results.patient')}
            name={patientData.fullName}
            variant="patient"
          />
        }
      >
        <PageSection>
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
              label={t('pages.healthProfile.basicInformation.fields.1.label')}
            >
              {patientData.fullName}
            </DisplayField>
            <DisplayField
              label={t('pages.healthProfile.basicInformation.fields.2.label')}
            >
              {t('formatting.date', { value: patientData.dob })}
            </DisplayField>
            <DisplayField
              label={t('pages.healthProfile.basicInformation.fields.3.label')}
            >
              {patientData.genderGenetic}
            </DisplayField>
            <DisplayField
              label={t('pages.healthProfile.basicInformation.fields.4.label')}
            >
              {patientData.genderIdentified}
            </DisplayField>
            <DisplayField
              label={t('pages.healthProfile.basicInformation.fields.5.label')}
            >
              {patientData.insurance}
            </DisplayField>
            <DisplayField
              label={t('pages.healthProfile.basicInformation.fields.6.label')}
            >
              {patientData.relationToCaregiver}
            </DisplayField>
          </ListCard>

          <ListCard
            iconName="clipboard"
            title={t('pages.healthProfile.primaryIndication.title')}
          >
            <DisplayField
              label={t('pages.healthProfile.primaryIndication.fields.1.label')}
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
              {caregiverData.name}
            </DisplayField>
            <DisplayField
              label={t('pages.healthProfile.yourDetails.fields.2.label')}
            >
              {caregiverData.phone_number}
            </DisplayField>
            <DisplayField
              label={t('pages.healthProfile.yourDetails.fields.3.label')}
            >
              {caregiverData.email}
            </DisplayField>
            <DisplayField
              label={t('pages.healthProfile.yourDetails.fields.4.label')}
            >
              {caregiverData.location}
            </DisplayField>
            <DisplayField
              label={t('pages.healthProfile.yourDetails.fields.5.label')}
            >
              {t('formatting.date', { value: caregiverData.dob })}
            </DisplayField>
            <DisplayField
              label={t('pages.healthProfile.yourDetails.fields.6.label')}
            >
              {caregiverData.relation_to_patient}
            </DisplayField>
          </ListCard>
        </PageSection>
      </PageLayout>
    </HealthProfileStyled>
  );
};
