import { useAppTranslation } from 'app';
import { DisplayField } from 'app/components/DisplayField';
import { Button, ListCard, Icon, PageLayout, UserHeader } from 'components';

import HealthProfileStyled from './HealthProfile.styles';

export const HealthProfile = () => {
  const t = useAppTranslation();
  const patientData = {
    shortName: "Lisa",
    fullName: "Lisa Consuela Jackson",
    dob: new Date(Date.UTC(2012, 1, 14)),
    genderGenetic: "Female",
    genderIdentified: "Female",
    insurance: "Kaiser",
    relationToCaregiver: "Child",
    phenotype: "Phenotype information here",
  }
  const caregiverData = {
    shortName: "Barbara",
    fullName: "Barbara Jackson",
    phoneNumber: "267-190-5214",
    emailAddress: "barb.jackson@example.com",
    location: "Austin, Texas",
    dob: new Date(Date.UTC(1989, 3, 9)),
    relationToPatient: "Parent",
  }

  return (
    <HealthProfileStyled>
      <PageLayout
        containsCards
        title={t('pages.healthProfile.title')}
        description={t('pages.healthProfile.description', { "patientsName": patientData.shortName })}
        customHeader={<UserHeader
          title={t('sections.results.childsName')}
          name={patientData.fullName}
        />}
      >
        <Button
          className="health-profile__download"
          kind="link-small"
          prefix={<Icon name="download" />}
        >
          {t('pages.healthProfile.actions.1.label')}
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
            {t('formatting.date', {value: patientData.dob})}
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
            {caregiverData.fullName}
          </DisplayField>
          <DisplayField
            label={t('pages.healthProfile.yourDetails.fields.2.label')}
          >
            {caregiverData.phoneNumber}
          </DisplayField>
          <DisplayField
            label={t('pages.healthProfile.yourDetails.fields.3.label')}
          >
            {caregiverData.emailAddress}
          </DisplayField>
          <DisplayField
            label={t('pages.healthProfile.yourDetails.fields.4.label')}
          >
            {caregiverData.location}
          </DisplayField>
          <DisplayField
            label={t('pages.healthProfile.yourDetails.fields.5.label')}
          >
            {t('formatting.date', {value: caregiverData.dob})}
          </DisplayField>
          <DisplayField
            label={t('pages.healthProfile.yourDetails.fields.6.label')}
          >
            {caregiverData.relationToPatient}
          </DisplayField>
        </ListCard>
      </PageLayout>
    </HealthProfileStyled>
  );
};
